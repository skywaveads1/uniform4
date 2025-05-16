const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SRC_DIR = 'src';
const COMPONENT_DIRS = ['components', 'app'];
const REPORT_FILE = 'lazy-loading-report.json';

// Find components that could be lazily loaded
function findComponents() {
  console.log('🔍 Finding components for lazy loading analysis...');
  
  const componentFiles = [];
  
  for (const dir of COMPONENT_DIRS) {
    const pattern = `${SRC_DIR}/${dir}/**/*.{jsx,tsx}`;
    const files = glob.sync(pattern, {
      ignore: [
        `${SRC_DIR}/${dir}/**/page.tsx`, // Skip Next.js page components
        `${SRC_DIR}/${dir}/**/layout.tsx`, // Skip Next.js layout components
        `${SRC_DIR}/${dir}/**/_*.{jsx,tsx}`, // Skip private components
      ]
    });
    
    componentFiles.push(...files);
  }
  
  return componentFiles;
}

// Find regular <img> tags that could be replaced with Next.js Image
function findImageTags(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for <img> tags without loading="lazy"
    const imgRegex = /<img\s+(?![^>]*loading=['"]lazy['"])([^>]*)>/g;
    const matches = [...content.matchAll(imgRegex)];
    
    return {
      file: path.relative(process.cwd(), filePath),
      imgTags: matches.map(match => match[0]),
      content
    };
  } catch (error) {
    console.error(`Error analyzing ${filePath}: ${error.message}`);
    return {
      file: path.relative(process.cwd(), filePath),
      error: error.message
    };
  }
}

// Analyze component for potential lazy loading
function analyzeComponentForLazyLoading(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if already using React.lazy or next/dynamic
    const isAlreadyLazy = 
      content.includes('lazy(') || 
      content.includes('React.lazy') || 
      content.includes('import dynamic from') ||
      content.includes('pages|sections|views');
    
    // Simple heuristic: components over 100 lines might benefit from lazy loading
    const lineCount = content.split('\n').length;
    const isLarge = lineCount > 100;
    
    // Check for imports of large libraries that could be lazily loaded
    const hasLargeImports = 
      content.includes('import { Chart') || 
      content.includes('import { Map') || 
      content.includes('import { Editor') ||
      content.includes('import { Table') ||
      content.includes('swiper') ||
      content.includes('calendar') ||
      content.includes('datepicker') ||
      content.includes('quill') ||
      content.includes('three');
    
    // Check if it's a client component
    const isClientComponent = content.includes("'use client'");
    
    // Check export default
    const hasDefaultExport = /export\s+default\s+\w+/.test(content);
    
    return {
      file: path.relative(process.cwd(), filePath),
      isAlreadyLazy,
      isLarge,
      hasLargeImports,
      isClientComponent,
      hasDefaultExport,
      lineCount,
      recommendation: (!isAlreadyLazy && (isLarge || hasLargeImports) && hasDefaultExport) 
        ? 'Consider lazy loading this component' 
        : 'No lazy loading needed'
    };
  } catch (error) {
    console.error(`Error analyzing ${filePath}: ${error.message}`);
    return {
      file: path.relative(process.cwd(), filePath),
      error: error.message
    };
  }
}

// Add lazy loading to standard images
function implementLazyLoadingForImgTags(fileInfo) {
  if (!fileInfo.imgTags || fileInfo.imgTags.length === 0) {
    return {
      file: fileInfo.file,
      status: 'skipped',
      reason: 'No eligible <img> tags found'
    };
  }
  
  let updatedContent = fileInfo.content;
  
  // Add loading="lazy" attribute to <img> tags
  let count = 0;
  updatedContent = updatedContent.replace(
    /<img\s+(?![^>]*loading=['"]lazy['"])([^>]*)>/g,
    (match, attributes) => {
      count++;
      return `<img loading="lazy" ${attributes}>`;
    }
  );
  
  // Only write if changes were made
  if (count > 0) {
    fs.writeFileSync(fileInfo.file, updatedContent);
    console.log(`✅ Added lazy loading to ${count} <img> tags in ${fileInfo.file}`);
    return {
      file: fileInfo.file,
      status: 'updated',
      updatedTags: count
    };
  }
  
  return {
    file: fileInfo.file,
    status: 'skipped',
    reason: 'No updates needed'
  };
}

// Generate example for lazily loading components
function generateLazyLoadingExample(componentInfo) {
  if (!componentInfo.recommendation.includes('Consider lazy loading')) {
    return null;
  }
  
  const componentName = path.basename(componentInfo.file, path.extname(componentInfo.file));
  const relativePath = `./${componentName}`;
  
  // Get the import directory
  const fileDir = path.dirname(componentInfo.file);
  const srcRelativePath = path.relative(SRC_DIR, fileDir);
  
  // Create examples for both React.lazy and Next.js dynamic imports
  const reactLazyExample = `// React.lazy example for ${componentName}
import { lazy, Suspense } from 'react';

// Replace regular import with lazy import
// import ${componentName} from '${relativePath}';
const ${componentName} = lazy(() => import('${relativePath}'));

// Then wrap with Suspense when using the component
function ParentComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <${componentName} />
    </Suspense>
  );
}`;

  const nextDynamicExample = `// Next.js dynamic import example for ${componentName}
import dynamic from 'next/dynamic';

// Replace regular import with dynamic import
// import ${componentName} from '${relativePath}';
const ${componentName} = dynamic(() => import('${relativePath}'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Set to false if this component shouldn't render on the server
});

// Then use normally - no Suspense needed
function ParentComponent() {
  return <${componentName} />;
}`;

  return {
    componentName,
    file: componentInfo.file,
    reactLazyExample,
    nextDynamicExample
  };
}

// Main function
async function analyzeLazyLoading() {
  console.log('🔍 Finding components and images for lazy loading optimization...');
  
  // Find components
  const componentFiles = findComponents();
  console.log(`Found ${componentFiles.length} component files.`);
  
  // Analyze components for lazy loading
  const componentAnalysis = componentFiles.map(file => analyzeComponentForLazyLoading(file));
  
  // Find <img> tags for lazy loading
  const imageTagsAnalysis = componentFiles.map(file => findImageTags(file));
  
  // Implement lazy loading for <img> tags
  const imageTagUpdates = imageTagsAnalysis.map(info => implementLazyLoadingForImgTags(info));
  
  // Generate lazy loading examples
  const lazyLoadingExamples = componentAnalysis
    .filter(info => info.recommendation && info.recommendation.includes('Consider lazy loading'))
    .map(info => generateLazyLoadingExample(info));
  
  // Create lazy loading guide
  let lazyLoadingGuide = `# Lazy Loading Guide
Created on: ${new Date().toISOString().split('T')[0]}

This guide shows components that could benefit from lazy loading based on their size, complexity, or use of heavy libraries.

## What is Lazy Loading?

Lazy loading defers loading of non-critical resources (components or images) until they are needed.
Benefits include:
- Faster initial page load
- Lower memory usage
- Reduced bandwidth for users who don't view all content

## Components Recommended for Lazy Loading

${componentAnalysis
    .filter(info => info.recommendation && info.recommendation.includes('Consider lazy loading'))
    .map(info => `- **${info.file}** (${info.lineCount} lines)${info.hasLargeImports ? ' - Uses large imports' : ''}`)
    .join('\n')}

## How to Implement Lazy Loading

### For Next.js Components:

\`\`\`jsx
import dynamic from 'next/dynamic';

// Instead of: import HeavyComponent from './HeavyComponent';
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: true // Set to false if component shouldn't render on server
});

// Use normally
function MyPage() {
  return <HeavyComponent />;
}
\`\`\`

### For React Components:

\`\`\`jsx
import { lazy, Suspense } from 'react';

// Instead of: import HeavyComponent from './HeavyComponent';
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Wrap with Suspense
function MyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

### For Images:

1. Use the Next.js Image component with priority=false (default)
2. For standard <img> tags, add loading="lazy" attribute
3. Consider adding width and height attributes to avoid layout shifts

## Specific Component Examples:
${lazyLoadingExamples.map(example => `
### ${example.componentName}

**File:** ${example.file}

**Next.js Dynamic Import:**
\`\`\`jsx
${example.nextDynamicExample}
\`\`\`

**React.lazy Alternative:**
\`\`\`jsx
${example.reactLazyExample}
\`\`\`
`).join('\n')}
`;
  
  // Write guide
  fs.writeFileSync('lazy-loading-guide.md', lazyLoadingGuide);
  
  // Create report
  const report = {
    date: new Date().toISOString(),
    summary: {
      totalComponents: componentFiles.length,
      componentsRecommendedForLazyLoading: componentAnalysis.filter(
        info => info.recommendation && info.recommendation.includes('Consider lazy loading')
      ).length,
      imageTagsUpdated: imageTagUpdates.filter(info => info.status === 'updated')
        .reduce((sum, info) => sum + (info.updatedTags || 0), 0)
    },
    componentsAnalysis: componentAnalysis,
    imageTagUpdates: imageTagUpdates
  };
  
  // Save report
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n=== LAZY LOADING ANALYSIS COMPLETE ===');
  console.log(`Total components analyzed: ${componentFiles.length}`);
  console.log(`Components recommended for lazy loading: ${report.summary.componentsRecommendedForLazyLoading}`);
  console.log(`Image tags updated with loading="lazy": ${report.summary.imageTagsUpdated}`);
  console.log(`Lazy loading guide created: lazy-loading-guide.md`);
  console.log(`Detailed report saved to: ${REPORT_FILE}`);
}

// Run the analysis
analyzeLazyLoading().catch(err => {
  console.error('Error during lazy loading analysis:', err);
  process.exit(1);
}); 
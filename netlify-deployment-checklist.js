const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CHECKLIST_FILE = 'netlify-deployment-checklist.md';
const PASS = '✅';
const FAIL = '❌';
const WARNING = '⚠️';
const INFO = 'ℹ️';

// Files to check
const requiredFiles = [
  { path: 'netlify.toml', description: 'Netlify configuration file' },
  { path: 'public/_headers', description: 'HTTP headers configuration' },
  { path: 'public/_redirects', description: 'URL redirects configuration' },
  { path: 'public/robots.txt', description: 'Robots.txt file' },
  { path: 'public/sitemap.xml', description: 'XML Sitemap' },
];

// Check if a file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Check package.json for required build scripts
function checkBuildScripts() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const scripts = packageJson.scripts || {};
  
  const results = [];
  
  // Check build script
  results.push({
    name: 'Build script',
    description: 'Command to build the site',
    status: scripts.build ? PASS : FAIL,
    value: scripts.build || 'Not found'
  });
  
  // Check if there's a specific Netlify deploy script
  results.push({
    name: 'Netlify deploy script',
    description: 'Script specifically for Netlify deployment',
    status: scripts['netlify-deploy'] ? PASS : WARNING,
    value: scripts['netlify-deploy'] || 'Not found (optional)'
  });
  
  // Check sitemap generation
  results.push({
    name: 'Sitemap generation',
    description: 'Script to generate sitemap.xml',
    status: scripts['generate-sitemap'] ? PASS : WARNING,
    value: scripts['generate-sitemap'] || 'Not found (recommended)'
  });
  
  // Check image optimization
  results.push({
    name: 'Image optimization',
    description: 'Script to optimize images',
    status: scripts['optimize-images'] ? PASS : WARNING,
    value: scripts['optimize-images'] || 'Not found (recommended)'
  });
  
  return results;
}

// Check for Next.js/React best practices in next.config.js
function checkNextConfig() {
  if (!fileExists('next.config.js')) {
    return [{
      name: 'next.config.js',
      description: 'Next.js configuration file',
      status: FAIL,
      value: 'File not found'
    }];
  }
  
  const nextConfig = fs.readFileSync('next.config.js', 'utf8');
  const results = [];
  
  // Check for static export
  results.push({
    name: 'Static export',
    description: 'Configuration for static site generation',
    status: nextConfig.includes('output') && nextConfig.includes('export') ? PASS : WARNING,
    value: nextConfig.includes('output') && nextConfig.includes('export') ? 'Configured' : 'Not configured (recommended for Netlify)'
  });
  
  // Check for images optimization
  results.push({
    name: 'Image optimization',
    description: 'Next.js Image configuration',
    status: nextConfig.includes('images') ? PASS : WARNING,
    value: nextConfig.includes('images') ? 'Configured' : 'Not configured'
  });
  
  // Check for WebP support
  results.push({
    name: 'WebP support',
    description: 'Modern image format support',
    status: nextConfig.includes('formats') && nextConfig.includes('webp') ? PASS : WARNING,
    value: nextConfig.includes('formats') && nextConfig.includes('webp') ? 'Enabled' : 'Not enabled (recommended)'
  });
  
  return results;
}

// Check Netlify.toml configuration
function checkNetlifyConfig() {
  if (!fileExists('netlify.toml')) {
    return [{
      name: 'netlify.toml',
      description: 'Netlify configuration file',
      status: FAIL,
      value: 'File not found'
    }];
  }
  
  const netlifyConfig = fs.readFileSync('netlify.toml', 'utf8');
  const results = [];
  
  // Check build command
  results.push({
    name: 'Build command',
    description: 'Command to build the site',
    status: netlifyConfig.includes('command =') ? PASS : FAIL,
    value: netlifyConfig.match(/command\s*=\s*["']([^"']*)["']/) ? 
      netlifyConfig.match(/command\s*=\s*["']([^"']*)["']/)[1] : 'Not found'
  });
  
  // Check publish directory
  results.push({
    name: 'Publish directory',
    description: 'Directory to publish',
    status: netlifyConfig.includes('publish =') ? PASS : FAIL,
    value: netlifyConfig.match(/publish\s*=\s*["']([^"']*)["']/) ? 
      netlifyConfig.match(/publish\s*=\s*["']([^"']*)["']/)[1] : 'Not found'
  });
  
  // Check for environment variables
  results.push({
    name: 'Environment variables',
    description: 'Environment configuration',
    status: netlifyConfig.includes('[build.environment]') ? PASS : WARNING,
    value: netlifyConfig.includes('[build.environment]') ? 'Configured' : 'Not configured (recommended)'
  });
  
  // Check for production context
  results.push({
    name: 'Production context',
    description: 'Production-specific settings',
    status: netlifyConfig.includes('[context.production') ? PASS : WARNING,
    value: netlifyConfig.includes('[context.production') ? 'Configured' : 'Not configured (recommended)'
  });
  
  // Check for headers
  results.push({
    name: 'HTTP headers',
    description: 'Custom HTTP headers configuration',
    status: netlifyConfig.includes('[[headers]]') ? PASS : WARNING,
    value: netlifyConfig.includes('[[headers]]') ? 'Configured' : 'Not configured in netlify.toml (using _headers file instead?)'
  });
  
  // Check for plugins
  results.push({
    name: 'Plugins',
    description: 'Netlify plugins',
    status: netlifyConfig.includes('[[plugins]]') ? PASS : INFO,
    value: netlifyConfig.includes('[[plugins]]') ? 'Configured' : 'Not configured (optional)'
  });
  
  return results;
}

// Check _headers file
function checkHeadersFile() {
  if (!fileExists('public/_headers')) {
    return [{
      name: '_headers file',
      description: 'HTTP headers configuration',
      status: WARNING,
      value: 'File not found (recommended)'
    }];
  }
  
  const headers = fs.readFileSync('public/_headers', 'utf8');
  const results = [];
  
  // Check for security headers
  const securityHeaders = [
    'X-Frame-Options',
    'X-XSS-Protection',
    'X-Content-Type-Options',
    'Content-Security-Policy',
    'Strict-Transport-Security'
  ];
  
  for (const header of securityHeaders) {
    results.push({
      name: header,
      description: 'Security header',
      status: headers.includes(header) ? PASS : WARNING,
      value: headers.includes(header) ? 'Configured' : 'Not configured (recommended)'
    });
  }
  
  // Check for caching headers
  results.push({
    name: 'Cache-Control',
    description: 'Caching policy',
    status: headers.includes('Cache-Control') ? PASS : WARNING,
    value: headers.includes('Cache-Control') ? 'Configured' : 'Not configured (recommended)'
  });
  
  return results;
}

// Main function to generate the checklist
function generateChecklist() {
  console.log('Generating Netlify deployment checklist...');
  
  let content = `# Netlify Deployment Checklist
Generated on: ${new Date().toISOString().split('T')[0]}

## Required Files
`;

  // Check required files
  for (const file of requiredFiles) {
    const exists = fileExists(file.path);
    content += `- ${exists ? PASS : (file.path === 'netlify.toml' ? FAIL : WARNING)} **${file.path}**: ${file.description} ${exists ? '(Found)' : '(Missing)'}\n`;
  }
  
  content += `\n## Build Configuration\n`;
  
  // Check package.json scripts
  const scriptResults = checkBuildScripts();
  for (const result of scriptResults) {
    content += `- ${result.status} **${result.name}**: ${result.description} - ${result.value}\n`;
  }
  
  content += `\n## Next.js Configuration\n`;
  
  // Check next.config.js
  const nextResults = checkNextConfig();
  for (const result of nextResults) {
    content += `- ${result.status} **${result.name}**: ${result.description} - ${result.value}\n`;
  }
  
  content += `\n## Netlify Configuration\n`;
  
  // Check netlify.toml
  const netlifyResults = checkNetlifyConfig();
  for (const result of netlifyResults) {
    content += `- ${result.status} **${result.name}**: ${result.description} - ${result.value}\n`;
  }
  
  content += `\n## Headers Configuration\n`;
  
  // Check _headers file
  const headerResults = checkHeadersFile();
  for (const result of headerResults) {
    content += `- ${result.status} **${result.name}**: ${result.description} - ${result.value}\n`;
  }
  
  // Add recommendations section
  content += `
## Recommendations

${INFO} **Before deploying to Netlify:**

1. Run \`npm run netlify-deploy\` locally to test the build process
2. Check that all images are optimized and WebP versions are available
3. Verify that the sitemap.xml includes all your pages
4. Test your site with Lighthouse to identify performance issues
5. Set up environment variables in the Netlify dashboard

${INFO} **After deploying to Netlify:**

1. Verify all pages render correctly
2. Test forms and interactive functionality
3. Check that redirects are working
4. Validate headers with [Security Headers](https://securityheaders.com/)
5. Test performance with [PageSpeed Insights](https://pagespeed.web.dev/)
6. Validate your sitemap at \`https://your-site.netlify.app/sitemap.xml\`

${INFO} **Netlify Resources:**

- [Netlify Docs](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Netlify Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/)
- [Netlify Headers Documentation](https://docs.netlify.com/routing/headers/)
- [Netlify Redirects Documentation](https://docs.netlify.com/routing/redirects/)
`;
  
  // Write the checklist to file
  fs.writeFileSync(CHECKLIST_FILE, content);
  console.log(`✅ Checklist generated: ${CHECKLIST_FILE}`);
}

// Run the generation
try {
  generateChecklist();
} catch (error) {
  console.error('Error generating checklist:', error);
  process.exit(1);
} 
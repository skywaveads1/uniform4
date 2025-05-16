const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get site URL from environment variable or fallback to default
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://uniform-blogs.netlify.app';
const NETLIFY_ENV = process.env.NEXT_PUBLIC_NETLIFY_ENV || 'development';

// Function to get the last modified date of a file
function getLastModifiedDate(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  } catch (error) {
    console.error(`Error getting last modified date for ${filePath}:`, error);
    return new Date().toISOString().split('T')[0]; // Use current date as fallback
  }
}

// Function to generate the sitemap
async function generateSitemap() {
  console.log('🔍 Generando sitemap.xml...');
  
  // Use a set to prevent duplicate routes
  const routesSet = new Set();
  
  // Priority order from highest to lowest
  const routePriorities = {
    '': 1.0, // Home page
    'about': 0.9,
    'services': 0.9,
    'contact': 0.9,
    'blog': 0.8,
    'workwear': 0.7
  };
  
  // Default values
  const defaultChangeFreq = 'weekly';
  const defaultPriority = 0.5;
  
  // Get all page files
  const pageFiles = glob.sync('src/app/**/page.tsx', {
    ignore: ['src/app/**/not-found.tsx', 'src/app/**/_*.tsx']
  });
  
  // Process each file to extract route information
  const routes = pageFiles.map(filePath => {
    // Extract route from file path
    let route = filePath
      .replace('src/app', '')
      .replace('/page.tsx', '')
      .replace(/\/\[.*\]/g, ''); // Remove dynamic route parameters
      
    // Skip special Next.js files and components
    if (route.includes('_') || route.includes('api/')) {
      return null;
    }
      
    // Handle root route
    if (route === '') {
      routesSet.add('/');
      return {
        url: SITE_URL,
        lastmod: getLastModifiedDate(filePath),
        changefreq: 'daily',
        priority: 1.0
      };
    }
    
    // Normalize route and add to set
    route = route.startsWith('/') ? route : `/${route}`;
    routesSet.add(route);
    
    // Extract section for priority determination
    const section = route.split('/')[1] || '';
    
    return {
      url: `${SITE_URL}${route}`,
      lastmod: getLastModifiedDate(filePath),
      changefreq: section === 'blog' ? 'monthly' : defaultChangeFreq,
      priority: routePriorities[section] || defaultPriority
    };
  }).filter(Boolean); // Remove null entries
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap.xml to public directory
  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log(`✅ Sitemap generado con éxito con ${routes.length} rutas.`);
  
  // Generate robots.txt if it doesn't exist
  const robotsTxtPath = 'public/robots.txt';
  if (!fs.existsSync(robotsTxtPath)) {
    const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
${NETLIFY_ENV === 'production' ? 'Allow: /' : 'Disallow: /'}

Sitemap: ${SITE_URL}/sitemap.xml
`;
    fs.writeFileSync(robotsTxtPath, robotsTxt);
    console.log('✅ robots.txt generado con éxito.');
  }
}

// Execute sitemap generation
generateSitemap().catch(err => {
  console.error('❌ Error al generar el sitemap:', err);
  process.exit(1);
}); 
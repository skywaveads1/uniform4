const fs = require('fs');
const path = require('path');

// Create out directory if it doesn't exist
if (!fs.existsSync('out')) {
  fs.mkdirSync('out', { recursive: true });
  console.log('Created out directory');
}

// Copy robots.txt and sitemap.xml to out directory
try {
  if (fs.existsSync('public/robots.txt')) {
    fs.copyFileSync('public/robots.txt', 'out/robots.txt');
    console.log('✅ Copied robots.txt to out directory');
  }
  
  if (fs.existsSync('public/sitemap.xml')) {
    fs.copyFileSync('public/sitemap.xml', 'out/sitemap.xml');
    console.log('✅ Copied sitemap.xml to out directory');
  } else if (fs.existsSync('sitemap.xml')) {
    fs.copyFileSync('sitemap.xml', 'out/sitemap.xml');
    console.log('✅ Copied sitemap.xml to out directory');
  }
  
  // Ensure optimized_images directory exists in out
  if (!fs.existsSync('out/optimized_images')) {
    fs.mkdirSync('out/optimized_images', { recursive: true });
    console.log('Created out/optimized_images directory');
  }
  
  // Ensure blog post directories exist and have a basic index.html file
  // This helps fix 404 errors for direct blog URL access
  const blogCategories = [
    'flight-crew',
    'clinic-wear',
    'culinary-apparel'
  ];
  
  const flightCrewPosts = Array.from({ length: 25 }, (_, i) => `flight-${i + 1}`);
  
  // Create category folders and index files
  blogCategories.forEach(category => {
    const categoryDir = path.join('out', 'blog', category);
    
    // Create category directory if it doesn't exist
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
      console.log(`Created directory: ${categoryDir}`);
      
      // Create basic index.html for the category
      const categoryIndexHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=/blog/">
  <title>${category} - يونيفورم</title>
</head>
<body>
  <p>جاري التحويل إلى صفحة المدونة...</p>
</body>
</html>`;
      
      fs.writeFileSync(path.join(categoryDir, 'index.html'), categoryIndexHtml);
      console.log(`Created index.html for ${category}`);
    }
    
    // For flight-crew, create all post directories
    if (category === 'flight-crew') {
      flightCrewPosts.forEach(post => {
        const postDir = path.join(categoryDir, post);
        
        // Create post directory if it doesn't exist
        if (!fs.existsSync(postDir)) {
          fs.mkdirSync(postDir, { recursive: true });
          console.log(`Created directory: ${postDir}`);
          
          // Create basic index.html for the post that redirects to the actual post
          const postIndexHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=/blog/flight-crew/${post}/">
  <title>${post} - يونيفورم</title>
</head>
<body>
  <p>جاري التحويل إلى المقالة...</p>
</body>
</html>`;
          
          fs.writeFileSync(path.join(postDir, 'index.html'), postIndexHtml);
          console.log(`Created index.html for ${post}`);
        }
      });
    }
  });
  
  // Create redirect pages for other main site sections that may be getting 404s
  const mainPages = [
    'about',
    'contact',
    'faq',
    'terms',
    'privacy',
    'quote'
  ];
  
  mainPages.forEach(page => {
    const pageDir = path.join('out', page);
    
    // Create page directory if it doesn't exist
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
      console.log(`Created directory: ${pageDir}`);
      
      // Create basic index.html for the page
      const pageIndexHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=/${page}/">
  <title>${page} - يونيفورم</title>
</head>
<body>
  <p>جاري التحويل إلى الصفحة...</p>
</body>
</html>`;
      
      fs.writeFileSync(path.join(pageDir, 'index.html'), pageIndexHtml);
      console.log(`Created index.html for ${page}`);
    }
  });
  
  console.log('✅ All required static files and directories created');
} catch (error) {
  console.error('❌ Error processing static files:', error);
} 
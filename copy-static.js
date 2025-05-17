const fs = require('fs');
const path = require('path');

// Define directories to ensure exist
const directoriesToEnsure = [
  'out/blog',
  'out/blog/flight-crew',
  'out/blog/clinic-wear',
  'out/blog/culinary-apparel',
  'out/privacy',
  'out/about',
  'out/contact',
  'out/terms',
  'out/faq',
  'out/quote'
];

// Add all flight-crew flight-N directories (1-25)
for (let i = 1; i <= 25; i++) {
  directoriesToEnsure.push(`out/blog/flight-crew/flight-${i}`);
};

// Create directories if they don't exist
directoriesToEnsure.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`Creating directory: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy index.html files to ensure directories have content
const sourceDirs = {
  'out/blog/index.html': [
    'out/blog/flight-crew/index.html',
    'out/blog/clinic-wear/index.html',
    'out/blog/culinary-apparel/index.html'
  ],
  'out/privacy/index.html': ['out/privacy/index.html'],
  'out/about/index.html': ['out/about/index.html'],
  'out/contact/index.html': ['out/contact/index.html'],
  'out/terms/index.html': ['out/terms/index.html'],
  'out/faq/index.html': ['out/faq/index.html'],
  'out/quote/index.html': ['out/quote/index.html']
};

// Create flight-crew article directories and copy placeholder content
for (let i = 1; i <= 25; i++) {
  const flightDir = `out/blog/flight-crew/flight-${i}`;
  if (!fs.existsSync(flightDir)) {
    console.log(`Creating flight article directory: ${flightDir}`);
    fs.mkdirSync(flightDir, { recursive: true });
  }
}

// Copy specific blog post from one to the others
if (fs.existsSync('out/blog/flight-crew/flight-1/index.html')) {
  const sourcePage = fs.readFileSync('out/blog/flight-crew/flight-1/index.html', 'utf8');
  
  for (let i = 2; i <= 25; i++) {
    const targetDir = `out/blog/flight-crew/flight-${i}`;
    const targetFile = `${targetDir}/index.html`;
    
    if (!fs.existsSync(targetFile)) {
      console.log(`Creating flight article page: ${targetFile}`);
      // Modify the content to match the specific article number
      let modifiedContent = sourcePage
        .replace(/flight-1/g, `flight-${i}`)
        .replace(/مقالة رقم 1/g, `مقالة رقم ${i}`)
        .replace(/مقالة أزياء الطيران رقم 1/g, `مقالة أزياء الطيران رقم ${i}`);
      
      fs.writeFileSync(targetFile, modifiedContent);
    }
  }
}

console.log('Static file copying complete!'); 
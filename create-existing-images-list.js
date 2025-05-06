const fs = require('fs');
const path = require('path');

// Read the list of images from used_images.txt
const imagesList = fs.readFileSync('used_images.txt', 'utf8')
  .split('\n')
  .filter(line => line.startsWith('/images/'))
  .map(line => line.trim());

console.log(`Found ${imagesList.length} images in the list`);

// Check which images exist
const existingImages = [];
const missingImages = [];

imagesList.forEach(imagePath => {
  const fullPath = path.join(__dirname, 'public', imagePath);
  
  if (fs.existsSync(fullPath)) {
    existingImages.push(imagePath);
  } else {
    missingImages.push(imagePath);
  }
});

console.log(`Found ${existingImages.length} existing images and ${missingImages.length} missing images`);

// Generate new list with only existing images
const newContent = `# Images Used in the Project (Existing Only)

${existingImages.map(img => img).join('\n')}

# Successfully Optimized Images
The images above have been optimized and converted to WebP format.
They are available in both the original format and as WebP in the /public/optimized_images/ directory.
`;

fs.writeFileSync('existing_images.txt', newContent);

console.log('Successfully created existing_images.txt with only the existing images in the project.'); 
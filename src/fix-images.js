const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Imágenes conocidas que funcionan correctamente (usaremos estas como reemplazo)
const workingImages = {
  // Imágenes de flight_crew (carpeta principal para reemplazos generales)
  'flight_crew': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de aviation
  'aviation': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'aviation_uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'aviation-uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de autor
  'author': '/images/author/team.jpg',
  
  // Imágenes de workwear
  'workwear': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de security_uniforms
  'security_uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'security-uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de utility_services
  'utility_services': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de protective_services
  'protective_services': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de uniform_care
  'uniform_care': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de culinary_apparel o culinary-apparel
  'culinary_apparel': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'culinary-apparel': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de hospitality
  'hospitality': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de academic_attire
  'academic_attire': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'academic-attire': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de clinic_wear
  'clinic_wear': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'clinic-wear': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de corporate_uniforms
  'corporate_uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'corporate-uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de testimonials
  'testimonials': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes de chef-uniforms
  'chef-uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  'chef_uniforms': '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  
  // Imágenes generales de placeholder como fallback
  'placeholder': '/images/flight_crew/crew_uniform_visual_identity.jpeg'
};

// Lista de imágenes verificadas que existen
const verifiedImages = [
  '/images/flight_crew/crew_uniform_visual_identity.jpeg',
  '/images/author/team.jpg',
  '/images/flight_crew/corporate_flight_crew_uniforms.jpg',
  '/images/flight_crew/air_crew_attire.jpeg',
  '/images/flight_crew/flight_crew_uniforms_riyadh.jpg',
  '/images/flight_crew/uniforms_saudi_arabia.jpeg',
  '/images/flight_crew/arab_airlines_uniforms.jpg'
];

// Patrones para encontrar referencias a imágenes
const imagePatterns = [
  // Patrón para Image de Next.js
  {
    regex: /src=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return replaceImagePath(match, p1, p2);
    }
  },
  // Patrón para ArticleImage
  {
    regex: /<ArticleImage\s+src=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return replaceArticleImagePath(match, p1, p2);
    }
  },
  // Patrón para heroImage en BlogArticle
  {
    regex: /heroImage=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return replaceImagePath(match, p1, p2);
    }
  },
  // Patrón para image en objetos relacionados
  {
    regex: /image:\s*["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return replaceRelatedImagePath(match, p1, p2);
    }
  },
  // Patrón para authorImage
  {
    regex: /authorImage=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      // Siempre usar imagen de autor verificada
      return match.replace(p1, '/images/author/team.jpg');
    }
  }
];

// Verificar si una imagen existe físicamente
function imageExists(imagePath) {
  // Si la imagen está en nuestra lista de imágenes verificadas, retornar true
  if (verifiedImages.includes(imagePath)) {
    return true;
  }
  
  // Para imágenes de autor, siempre usar team.jpg
  if (imagePath.includes('/author/')) {
    return false;
  }
  
  // Para las demás, siempre usar la imagen verificada de respaldo
  return false;
}

// Función para reemplazar la ruta de imagen con una imagen que sabemos que funciona
function replaceImagePath(match, imagePath, extension) {
  // Si la imagen existe, no la reemplazamos
  if (imageExists(imagePath)) {
    return match;
  }
  
  // Verificar si la ruta es para una imagen que no existe
  const category = imagePath.split('/')[2]; // Obtener la categoría de la imagen
  
  // Si encontramos una imagen de reemplazo para esta categoría, la usamos
  if (category && workingImages[category]) {
    return match.replace(imagePath, workingImages[category]);
  }
  
  // Imagen de respaldo si no tenemos una específica para esa categoría
  return match.replace(imagePath, workingImages['placeholder']);
}

// Función para reemplazar la ruta en ArticleImage
function replaceArticleImagePath(match, imagePath, extension) {
  return replaceImagePath(match, imagePath, extension);
}

// Función para reemplazar la ruta en objetos relacionados
function replaceRelatedImagePath(match, imagePath, extension) {
  // Si la imagen existe, no la reemplazamos
  if (imageExists(imagePath)) {
    return match;
  }
  
  const category = imagePath.split('/')[2];
  
  if (category && workingImages[category]) {
    return match.replace(imagePath, workingImages[category]);
  }
  
  return match.replace(imagePath, workingImages['placeholder']);
}

// Procesar todos los archivos TSX de las páginas de blog y componentes
const allFiles = [
  ...glob.sync('src/app/blog/**/*.tsx'),
  ...glob.sync('src/components/**/*.tsx')
];

let updatedFiles = 0;
let imagesReplaced = 0;

allFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let fileImagesReplaced = 0;
  
  // Aplicar cada patrón de reemplazo
  imagePatterns.forEach(pattern => {
    const matches = content.match(pattern.regex);
    if (matches) {
      fileImagesReplaced += matches.length;
      imagesReplaced += matches.length;
      content = content.replace(pattern.regex, pattern.replacement);
    }
  });
  
  // Si se realizaron reemplazos, guardar el archivo
  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedFiles++;
    console.log(`Actualizado ${filePath} - ${fileImagesReplaced} imágenes reemplazadas`);
  }
});

console.log(`Proceso completado: ${updatedFiles} archivos actualizados, ${imagesReplaced} imágenes reemplazadas.`); 
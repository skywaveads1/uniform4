const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Imagen garantizada que sabemos que existe
const GUARANTEED_IMAGE = '/images/flight_crew/crew_uniform_visual_identity.jpeg';
const AUTHOR_IMAGE = '/images/author/team.jpg';

// Patrones para encontrar referencias a imágenes
const imagePatterns = [
  // Patrón para Image de Next.js
  {
    regex: /src=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      // Si es una imagen de autor, usar imagen de autor
      if (p1.includes('/author/')) {
        return match.replace(p1, AUTHOR_IMAGE);
      }
      return match.replace(p1, GUARANTEED_IMAGE);
    }
  },
  // Patrón para ArticleImage
  {
    regex: /<ArticleImage\s+src=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return match.replace(p1, GUARANTEED_IMAGE);
    }
  },
  // Patrón para heroImage en BlogArticle
  {
    regex: /heroImage=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return match.replace(p1, GUARANTEED_IMAGE);
    }
  },
  // Patrón para image en objetos relacionados
  {
    regex: /image:\s*["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return match.replace(p1, GUARANTEED_IMAGE);
    }
  },
  // Patrón para authorImage
  {
    regex: /authorImage=["']([^"']+\.(jpg|jpeg|png))["']/g,
    replacement: (match, p1, p2) => {
      return match.replace(p1, AUTHOR_IMAGE);
    }
  },
  // Patrón para imágenes en estilos inline
  {
    regex: /background(-image)?:.*url\(["']([^"']+\.(jpg|jpeg|png))["']\)/g,
    replacement: (match, p1, p2, p3) => {
      return match.replace(p2, GUARANTEED_IMAGE);
    }
  }
];

// Función para reemplazar todas las imágenes en un archivo
function replaceImagesInFile(filePath) {
  console.log(`Procesando archivo: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let fileImagesReplaced = 0;
  
  // Aplicar cada patrón de reemplazo
  imagePatterns.forEach(pattern => {
    const matches = content.match(pattern.regex);
    if (matches) {
      matches.forEach(match => {
        console.log(`  Reemplazando imagen en ${filePath}: ${match}`);
      });
      fileImagesReplaced += matches.length;
      content = content.replace(pattern.regex, pattern.replacement);
    }
  });
  
  // Si se realizaron reemplazos, guardar el archivo
  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Actualizado ${filePath} - ${fileImagesReplaced} imágenes reemplazadas`);
    return fileImagesReplaced;
  }
  
  return 0;
}

// Encontrar todos los archivos en el proyecto
function findAllFiles() {
  return [
    ...glob.sync('src/app/**/*.{tsx,jsx,js,ts}'),
    ...glob.sync('src/components/**/*.{tsx,jsx,js,ts}'),
    ...glob.sync('src/pages/**/*.{tsx,jsx,js,ts}'),
    ...glob.sync('src/styles/**/*.{css,scss}')
  ];
}

// Procesar todos los archivos
function processAllFiles() {
  const allFiles = findAllFiles();
  console.log(`Encontrados ${allFiles.length} archivos para procesar`);
  
  let updatedFiles = 0;
  let imagesReplaced = 0;
  
  allFiles.forEach(filePath => {
    const replaced = replaceImagesInFile(filePath);
    if (replaced > 0) {
      updatedFiles++;
      imagesReplaced += replaced;
    }
  });
  
  console.log(`Proceso completado: ${updatedFiles} archivos actualizados, ${imagesReplaced} imágenes reemplazadas.`);
}

// Ejecutar el procesamiento
console.log("Iniciando reemplazo agresivo de imágenes...");
processAllFiles();
console.log("Proceso de reemplazo de imágenes completado."); 
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Mapeo de categorías a imágenes específicas
const categoryImageMap = {
  'academic-attire': '/images/academic_attire/school_uniforms_riyadh.jpeg',
  'academic_attire': '/images/academic_attire/school_uniforms_riyadh.jpeg',
  'aviation-uniforms': '/images/aviation_uniforms/airline_uniform_design.jpeg',
  'aviation_uniforms': '/images/aviation_uniforms/airline_uniform_design.jpeg',
  'aviation': '/images/aviation/aviation_uniform.jpeg',
  'clinic-wear': '/images/clinic_wear/medical_wear.jpeg',
  'clinic_wear': '/images/clinic_wear/medical_wear.jpeg',
  'corporate-uniforms': '/images/corporate_uniforms/corporate_identity_uniforms.jpeg',
  'corporate_uniforms': '/images/corporate_uniforms/corporate_identity_uniforms.jpeg',
  'culinary-apparel': '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
  'culinary_apparel': '/images/culinary_apparel/kitchen_staff_clothing.jpeg',
  'chef-uniforms': '/images/culinary_apparel/chef_uniforms.jpeg',
  'hospitality': '/images/hospitality/hotel_staff_uniforms.jpeg',
  'protective-services': '/images/protective_services/protective_services_uniforms.jpeg',
  'protective_services': '/images/protective_services/protective_services_uniforms.jpeg',
  'security-uniforms': '/images/protective_services/security_guard_uniforms.jpeg',
  'security_uniforms': '/images/protective_services/security_guard_uniforms.jpeg',
  'uniform-care': '/images/uniform_care/uniform_maintenance.jpg',
  'uniform_care': '/images/uniform_care/uniform_maintenance.jpg',
  'utility-services': '/images/utility_services/utility_uniforms.jpeg',
  'utility_services': '/images/utility_services/utility_uniforms.jpeg',
  'workwear': '/images/workwear/workwear_maintenance.jpeg',
  'flight-crew': '/images/flight_crew/air_crew_attire.jpeg',
  'flight_crew': '/images/flight_crew/air_crew_attire.jpeg'
};

// Asegurarse de que existan todas las carpetas y archivos de imágenes necesarios
function ensureDirectoriesAndFiles() {
  // Crear directorios si no existen
  Object.keys(categoryImageMap).forEach(category => {
    const imagePath = categoryImageMap[category];
    // Usamos replace para asegurar que las rutas funcionen en Windows
    const dir = path.dirname(path.join('public', imagePath)).replace(/\//g, path.sep);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Creado directorio: ${dir}`);
    }
    
    // Si la imagen no existe, copiar una imagen genérica
    const fullImagePath = path.join('public', imagePath).replace(/\//g, path.sep);
    if (!fs.existsSync(fullImagePath)) {
      const sourceImage = path.join('public', '/images/flight_crew/crew_uniform_visual_identity.jpeg').replace(/\//g, path.sep);
      if (fs.existsSync(sourceImage)) {
        fs.copyFileSync(sourceImage, fullImagePath);
        console.log(`Copiada imagen genérica a: ${fullImagePath}`);
      } else {
        console.log(`¡ADVERTENCIA! No se pudo encontrar la imagen fuente: ${sourceImage}`);
      }
    }
  });
}

// Actualizar referencias de imágenes en el archivo page.tsx principal
function updateMainPage() {
  const pageFile = 'src/app/page.tsx';
  
  if (!fs.existsSync(pageFile)) {
    console.log(`El archivo ${pageFile} no existe`);
    return;
  }
  
  let content = fs.readFileSync(pageFile, 'utf8');
  
  // Buscar todas las entradas de artículos con la imagen genérica
  const regex = /{\s*title:\s*'([^']+)',\s*path:\s*'(\/blog\/([^\/]+)\/[^']+)',\s*image:\s*'\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg'\s*}/g;
  
  content = content.replace(regex, (match, title, path, category) => {
    // Determinar categoría y seleccionar imagen adecuada
    const categoryKey = category.replace(/-/g, '_');
    const image = categoryImageMap[category] || categoryImageMap[categoryKey] || '/images/flight_crew/crew_uniform_visual_identity.jpeg';
    
    return `{ title: '${title}', path: '${path}', image: '${image}' }`;
  });
  
  fs.writeFileSync(pageFile, content);
  console.log('Actualizado archivo principal page.tsx');
}

// Actualizar imágenes en todos los archivos de artículos
function updateAllArticlePages() {
  const blogDir = 'src/app/blog'.replace(/\//g, path.sep);
  
  // Función recursiva para procesar directorios
  function processDirectory(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          processDirectory(fullPath);
        } else if (entry.name === 'page.tsx') {
          updateArticlePage(fullPath, dir);
        }
      }
    } catch (err) {
      console.error(`Error al procesar directorio ${dir}: ${err.message}`);
    }
  }
  
  // Actualizar un archivo de artículo específico
  function updateArticlePage(filePath, dir) {
    try {
      // Extraer categoría del path
      const pathParts = dir.split(path.sep);
      const categoryIndex = pathParts.indexOf('blog') + 1;
      
      if (categoryIndex >= pathParts.length) return;
      
      const category = pathParts[categoryIndex];
      const categoryKey = category.replace(/-/g, '_');
      
      // Seleccionar imagen adecuada
      const newImage = categoryImageMap[category] || categoryImageMap[categoryKey] || '/images/flight_crew/crew_uniform_visual_identity.jpeg';
      
      // Leer y actualizar contenido
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Reemplazar referencias a la imagen genérica - varios patrones posibles
      const genericImagePath = '/images/flight_crew/crew_uniform_visual_identity.jpeg';
      
      // 1. Reemplazar en propiedades de objeto
      content = content.replace(/image(?:Url)?:\s*["']\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg["']/g, 
        `image: "${newImage}"`);
      
      // 2. Reemplazar en atributos src de etiquetas
      content = content.replace(/src=["']\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg["']/g, 
        `src="${newImage}"`);
      
      // 3. Reemplazar en atributos heroImage
      content = content.replace(/heroImage=["']\/images\/flight_crew\/crew_uniform_visual_identity\.jpeg["']/g, 
        `heroImage="${newImage}"`);
      
      // 4. Otros patrones con formato diferente
      content = content.replace(new RegExp(genericImagePath.replace(/\//g, '\\/'), 'g'), newImage);
      
      fs.writeFileSync(filePath, content);
      console.log(`Actualizado archivo: ${filePath}`);
    } catch (err) {
      console.error(`Error al actualizar archivo ${filePath}: ${err.message}`);
    }
  }
  
  // Iniciar procesamiento
  if (fs.existsSync(blogDir)) {
    processDirectory(blogDir);
    console.log('Actualizados todos los archivos de artículos');
  } else {
    console.log(`El directorio ${blogDir} no existe`);
  }
}

// Ejecutar todas las funciones
console.log('Iniciando proceso de corrección de imágenes...');
ensureDirectoriesAndFiles();
updateMainPage();
updateAllArticlePages();
console.log('¡Proceso completado con éxito!');

// No ejecutamos npm run build desde el script, lo haremos manualmente después
console.log('Para completar el proceso, ejecuta: npm run build'); 
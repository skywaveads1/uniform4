# Guía de Optimización de Imágenes

## Resumen

Se ha implementado un sistema completo de optimización de imágenes para mejorar la velocidad del sitio web. La optimización incluye:

1. Compresión de imágenes JPEG/JPG, PNG y WebP
2. Conversión automática a formato WebP para navegadores compatibles
3. Un componente React optimizado para servir las imágenes adecuadas

## Imágenes Optimizadas

Las imágenes optimizadas se encuentran en la carpeta `/public/optimized_images/`, manteniendo la misma estructura de carpetas que `/public/images/`.

Para cada imagen original, se ha creado:
- Una versión optimizada en su formato original (JPG, PNG, etc.)
- Una versión WebP para navegadores modernos

## Cómo Usar el Componente OptimizedImage

Se ha creado un componente React llamado `OptimizedImage` que:

1. Detecta automáticamente si el navegador soporta WebP
2. Sirve la versión WebP para navegadores compatibles
3. Utiliza la versión optimizada del formato original como fallback
4. Incluye carga lazy (lazy loading) para mejorar el rendimiento

### Ejemplo de Uso

```jsx
import OptimizedImage from '@/components/OptimizedImage';

// En cualquier componente:
<OptimizedImage 
  src="/images/flight_crew/flight_crew_uniforms.jpeg" 
  alt="Flight Crew Uniforms" 
  width={640} 
  height={480} 
  className="rounded-lg shadow-md"
/>
```

### Parámetros

- `src`: Ruta de la imagen original (comenzando con `/images/...`)
- `alt`: Texto alternativo para la imagen
- `width`: Ancho de la imagen en píxeles
- `height`: Alto de la imagen en píxeles
- `className`: Clases CSS adicionales
- Cualquier otro atributo HTML válido para imágenes

## Ventajas de Esta Implementación

1. **Mejor Rendimiento**: Imágenes más pequeñas que cargan más rápido
2. **Compatibilidad**: Funciona en todos los navegadores, con mejoras para navegadores modernos
3. **SEO**: Mejora las métricas de Core Web Vitals (LCP, CLS)
4. **Experiencia de Usuario**: Carga más rápida de la página
5. **Ahorro de Ancho de Banda**: Reducción del uso de datos para usuarios móviles

## Métricas de Optimización

Las imágenes JPEG se han optimizado con:
- Calidad: 75%
- Modo progresivo: activado
- Optimización mozjpeg: activada

Las imágenes PNG se han optimizado con:
- Calidad: 75%
- Modo progresivo: activado
- Nivel de compresión: 9 (máximo)

Las imágenes WebP se han generado con:
- Calidad: 75%

## Lista de Imágenes Existentes

Se ha generado una lista de las imágenes existentes en el archivo `existing_images.txt`.

## Implementación Futura

Para futuras imágenes, se recomienda:

1. Usar el script `optimize-images.js` para optimizar automáticamente nuevas imágenes
2. Utilizar siempre el componente `OptimizedImage` en lugar de etiquetas `<img>` o `next/image`
3. Considerar implementar una etapa de optimización de imágenes en el proceso de construcción 
# GUÍA DE IMPORTACIÓN RÁPIDA A FIGMA USANDO TOKEN STUDIO

## Requisitos previos
1. Tener una cuenta en Figma (gratuita o de pago)
2. Tener acceso a un archivo Figma donde trabajar
3. Instalar el plugin "Token Studio" en Figma

## Paso 1: Instalar Token Studio en Figma
1. Abre tu archivo Figma
2. Ve a Menú → Recursos → Explorar comunitary
3. Busca "Token Studio" (creado por Enrique Moreno)
4. Haz clic en "Instalar"

## Paso 2: Preparar el archivo de tokens
Guarda este archivo como `serez-tokens.json`:
```json
{
  "color": {
    "background": {
      "main": { "value": "#141211" },
      "darker": { "value": "#0d0c0b" }
    },
    "text": {
      "main": { "value": "#F4F1EA" },
      "muted": { "value": "#B3AAA1" }
    },
    "accent": {
      "default": { "value": "#D9C5B2" },
      "hover": { "value": "#c4ae97" }
    }
  },
  "fontFamily": {
    "serif": { "value": "'Playfair Display', serif" },
    "sans": { "value": "'Inter', sans-serif" }
  },
  "fontWeight": {
    "light": { "value": 300 },
    "regular": { "value": 400 },
    "medium": { "value": 500 },
    "semiBold": { "value": 600 }
  },
  "fontSize": {
    "base": { "value": "14px" },
    "lg": { "value": "16px" },
    "xl": { "value": "18px" },
    "2xl": { "value": "20px" },
    "3xl": { "value": "24px" },
    "4xl": { "value": "32px" },
    "5xl": { "value": "48px" },
    "6xl": { "value": "64px" },
    "7xl": { "value": "72px" }
  },
  "lineHeight": {
    "tight": { "value": 1.2 },
    "base": { "value": 1.6 }
  },
  "letterSpacing": {
    "normal": { "value": "0" },
    "wide": { "value": "0.025em" },
    "wider": { "value": "0.05em" },
    "tagline": { "value": "0.2em" }
  },
  "radius": {
    "base": { "value": "12px" },
    "hero": { "value": "20px 20px 20px 200px" },
    "experience": { "value": "20px 100px 20px 20px" },
    "expert": { "value": "200px 20px 20px 20px" }
  },
  "spacing": {
    "2": { "value": "8px" },
    "3": { "value": "12px" },
    "4": { "value": "16px" },
    "5": { "value": "20px" },
    "6": { "value": "24px" },
    "8": { "value": "32px" },
    "10": { "value": "40px" },
    "12": { "value": "48px" },
    "16": { "value": "64px" },
    "20": { "value": "80px" },
    "24": { "value": "96px" },
    "32": { "value": "128px" }
  },
  "shadow": {
    "card": { "value": "0 10px 20px rgba(217, 197, 178, 0.1)" }
  },
  "border": {
    "card": { "value": "1px solid rgba(255,255,255,0.05)" },
    "cardHover": { "value": "1px solid rgba(217, 197, 178, 0.3)" },
    "header": { "value": "1px solid rgba(255,255,255,0.05)" }
  },
  "opacity": {
    "featureNumber": { "value": 0.5 },
    "decorativeCircle": { "value": 0.3 },
    "headerScrolled": { "value": 0.95 },
    "ctaOverlay": { "value": 0.85 }
  }
}
```

## Paso 3: Importar tokens con Token Studio
1. En Figma, abre el plugin Token Studio (Plugins → Token Studio → Open)
2. Haz clic en el icono de "+" o "Import"
3. Selecciona "Import from JSON"
4. Pega el contenido del archivo `serez-tokens.json` o selecciona el archivo
5. Haz clic en "Import"
6. ¡Todos los tokens estarán disponibles en tu archivo Figma!

## Paso 4: Crear estilos de texto (opcional pero recomendado)
Token Studio crea automáticamente los estilos de color, pero para los estilos de texto necesitas:
1. En Token Studio, ve a la sección "Text Styles"
2. Haz clic en "+" para crear nuevos estilos
3. Usa estos valores:

**Título H1 Hero**
- Font Family: Playfair Display
- Font Weight: 400
- Font Size: 72px
- Line Height: 1.2
- Letter Spacing: 0
- Color: Text/Main

**Título H2 Section**
- Font Family: Playfair Display
- Font Weight: 400
- Font Size: 48px
- Line Height: 1.2
- Color: Text/Main

**Título H3 Card**
- Font Family: Playfair Display
- Font Weight: 400
- Font Size: 24px
- Line Height: 1.2
- Color: Text/Main

**Body Large**
- Font Family: Inter
- Font Weight: 400
- Font Size: 20px
- Line Height: 1.6
- Color: Text/Muted

**Body**
- Font Family: Inter
- Font Weight: 400
- Font Size: 18px
- Line Height: 1.6
- Color: Text/Muted

**Body Small**
- Font Family: Inter
- Font Weight: 400
- Font Size: 16px
- Line Height: 1.6
- Color: Text/Muted

**Tagline**
- Font Family: Inter
- Font Weight: 500
- Font Size: 13px
- Letter Spacing: 0.2em
- Text Transform: Uppercase
- Color: Accent/Default

**Nav Link**
- Font Family: Inter
- Font Weight: 400
- Font Size: 14px
- Line Height: 1
- Color: Text/Main

**Button**
- Font Family: Inter
- Font Weight: 500
- Font Size: 14px
- Letter Spacing: 0.05em
- Text Transform: Uppercase

**Button Large**
- Font Family: Inter
- Font Weight: 500
- Font Size: 16px
- Letter Spacing: 0.05em
- Text Transform: Uppercase

## Paso 5: Crear componentes básicos (los átomos)
Una vez que tengas los tokens y estilos de texto, crear los componentes será mucho más rápido:

### Button / Primary
1. Crea un rectángulo con:
   - Relleno: Color/Accent/Default
   - Color de texto: Color/Background/Main
   - Radio: 50px (usando el token de radius)
   - Padding: 16px 40px (usando spacing)
2. Convierte en componente
3. Añade variantes:
   - Hover: Relleno transparente, Borde 1px Color/Accent/Default, Sombra Shadow/Card
   - Grande: Padding 20px 56px, Fuente tamaño lg

### Tagline
1. Crea un texto con:
   - Fuente: Inter
   - Peso: 500
   - Tamaño: 13px
   - Espaciado de letra: 0.2em
   - Transformación: Mayúsculas
   - Color: Color/Accent/Default

### Logo
1. Crea dos textos:
   - "SEREZ": Inter SemiBold 20px Color/Text/Main
   - "STUDIO": Inter Light 20px Color/Text/Muted
2. Agrúpalos y conviértelos en componente

## Paso 6: Ensamblar moléculas y organismos
Con los átomos creados, ensamblar las moléculas y organismos será intuitivo siguiendo la especificación en `SPEC.md` y `atomic-design.html`.

## Tiempo estimado
Con este método:
- Importar tokens: 2 minutos
- Crear estilos de texto: 5 minutos  
- Crear átomos básicos: 10-15 minutos
- Ensamblar moléculas: 10-15 minutos
- Construir landing page: 15-20 minutos

**Total: ~45 minutos** en lugar de 2+ horas trabajando desde cero.

## Archivos listos para usar
- `figma-tokens-for-tokenstudio.json` - Para importar directamente con Token Studio
- `SPEC.md` - Especificación detallada de construcción
- `atomic-design.html` - Referencia visual de cómo se ven los componentes

¿Necesitas que te ayude con algo específico del proceso de importación o creación de componentes?
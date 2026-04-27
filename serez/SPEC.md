# Serez Studio - Landing Page Figma Components

## 1. Estructura del Archivo Figma

### Páginas del Archivo
1. **Styles** - Tokens de diseño globales
2. **Atoms** - Componentes básicos individuales
3. **Molecules** - Combinaciones simples de átomos
4. **Organisms** - Secciones completas
5. **Templates** - Estructuras de página
6. **Landing Page** - Página final ensamblada

---

## 2. Design Tokens (Styles)

### Colors
| Nombre Figma | Valor Hex | Uso |
|-------------|---------|-----|
| Background Main | #141211 | Fondo principal |
| Background Darker | #0d0c0b | Fondos de secciones destacadas |
| Text Main | #F4F1EA | Texto principal |
| Text Muted | #B3AAA1 | Párrafos y texto secundario |
| Accent | #D9C5B2 | Acentos, botones, elementos destacados |
| Accent Hover | #c4ae97 | Estado hover de accent |

### Typography
| Nombre Estilo | Fuente | Tamaño | Peso | Line Height | Uso |
|-------------|-------|--------|------|-----------|-----|
| H1 / Hero Title | Playfair Display | 72px (4.5rem) | 400 | 1.2 | Título principal hero |
| H2 / Section Title | Playfair Display | 48px (3rem) | 400 | 1.2 | Títulos de sección |
| H3 / Card Title | Playfair Display | 24px (1.5rem) | 400 | 1.2 | Títulos de tarjetas |
| Body Large | Inter | 20px (1.25rem) | 400 | 1.6 | Subtítulos hero, párrafos destacados |
| Body | Inter | 18px (1.125rem) | 400 | 1.6 | Párrafos estándar |
| Body Small | Inter | 16px (1rem) | 400 | 1.6 | Texto de tarjetas |
| Tagline | Inter | 13px (0.8rem) | 400-500 | 1 | Etiquetas uppercase |
| Nav Link | Inter | 14px (0.9rem) | 400 | 1 | Navegación |
| Button | Inter | 14px (0.9rem) | 500 | 1 | Texto de botones |
| Button Large | Inter | 16px (1rem) | 500 | 1 | Botones grandes |
| Logo | Inter | 20px (1.25rem) | 600 | 1 | Logo principal |

### Effects
| Nombre | Definición | Uso |
|--------|-----------|-----|
| Shadow Card | 0 10px 20px rgba(217, 197, 178, 0.1) | Hover de botones |
| Border Card | 1px solid rgba(255,255,255,0.05) | Bordes de tarjetas |
| Border Card Hover | 1px solid rgba(217, 197, 178, 0.3) | Hover de tarjetas |
| Overlay Dark | rgba(20, 18, 17, 0.85) | Overlay de CTA final |

---

## 3. ÁTOMOS (Componentes Básicos)

### 3.1 Button Primary
**Nombre en Figma:** Button / Primary
**Estados:**
- Default: bg Accent, text Background Main, border 1px Accent
- Hover: bg transparent, text Accent, border Accent, transform translateY(-3px), shadow Card
- Pressed: mismo que hover pero sin transform
- Disabled: opacity 0.5

**Variantes:**
- Button Primary (padding 16px 40px, font 14px)
- Button Large (padding 20px 56px, font 16px)

**Uso en página:**
- Hero: "¡COMENCEMOS!"
- Final CTA: "ACCEDER A LA MASTERCLASS"

### 3.2 Tagline
**Nombre en Figma:** Text / Tagline
**Propiedades:**
- Font: Inter
- Size: 13px
- Weight: 400-500
- Letter Spacing: 0.2em (2px)
- Text Transform: Uppercase
- Color: Accent
- Margin Bottom: 24px (1.5rem)

**Uso en página:**
- Hero: "MASTERCLASS EXCLUSIVA"
- Experience: "UNA INVITACIÓN AL DESEO"
- Expert: "TU GUÍA EN ESTE VIAJE"

### 3.3 Title H1 (Hero)
**Nombre en Figma:** Title / H1 - Hero
**Propiedades:**
- Font: Playfair Display
- Size: 72px
- Weight: 400
- Line Height: 1.2
- Color: Text Main
- Margin Bottom: 24px (1.5rem)
- Max Width: 90%

**Uso en página:**
- Hero principal: "Despierta una conexión que trasciende la piel."

### 3.4 Title H2 (Section)
**Nombre en Figma:** Title / H2 - Section
**Propiedades:**
- Font: Playfair Display
- Size: 48px
- Weight: 400
- Line Height: 1.2
- Color: Text Main
- Margin Bottom: 32px (2rem)

**Uso en página:**
- Features: "Un Viaje Hacia lo Desconocido"
- Experience: "El Arte de Sentir y Conectar"
- Expert: "Manuela Escobar"
- Final CTA: "¿Estás lista para transformar tus encuentros?"

### 3.5 Title H3 (Card)
**Nombre en Figma:** Title / H3 - Card
**Propiedades:**
- Font: Playfair Display
- Size: 24px
- Weight: 400
- Line Height: 1.2
- Color: Text Main
- Margin Bottom: 16px (1rem)

**Uso en página:**
- Feature Cards

### 3.6 Paragraph Body
**Nombre en Figma:** Text / Body
**Variantes:**
- Body Large: font 20px, color Text Muted
- Body: font 18px, color Text Muted
- Body Small: font 16px, color Text Muted

**Propiedades base:**
- Font: Inter
- Weight: 400
- Line Height: 1.6
- Color: Text Muted
- Margin Bottom: 24px (1.5rem)

### 3.7 Feature Number
**Nombre en Figma:** Text / Feature Number
**Propiedades:**
- Font: Playfair Display
- Size: 48px
- Weight: 400
- Color: Accent
- Opacity: 0.5
- Margin Bottom: 16px (1rem)
- Line Height: 1

**Uso en página:**
- Feature Cards: "01", "02", "03"

### 3.8 Image Container
**Nombre en Figma:** Image / Container
**Propiedades:**
- Background: #2a2522 (fallback)
- Border Radius: variable según uso
- Overflow: hidden
- Aspect Ratio: específico según contexto

**Variantes de forma:**
- Hero Image: border-radius 20px 20px 20px 200px
- Expert Image: border-radius 200px 20px 20px 20px
- Experience Image: border-radius 20px 100px 20px 20px

### 3.9 Logo
**Nombre en Figma:** Logo / Brand
**Propiedades:**
- Font: Inter
- Size: 20px
- Weight: 600
- Letter Spacing: 0.1em (1px)

**Partes:**
- "SEREZ" - Weight 600
- "STUDIO" - Weight 300, color Text Muted

### 3.10 Nav Link
**Nombre en Figma:** Link / Navigation
**Estados:**
- Default: color Text Main, font-size 14px
- Hover: color Accent

**Propiedades:**
- Font: Inter
- Size: 14px
- Weight: 400
- Margin Left: 32px (2rem) (para espaciado entre links)

### 3.11 Decorative Circle
**Nombre en Figma:** Decor / Circle
**Propiedades:**
- Size: 200px x 200px
- Border: 1px solid Accent
- Border Radius: 50% (círculo)
- Opacity: 0.3
- Position: absolute, bottom -20px, left -20px

**Uso en página:**
- Hero: elemento decorativo detrás de imagen

---

## 4. MOLÉCULAS (Combinaciones Simples)

### 4.1 Navbar / Header
**Nombre en Figma:** Navbar
**Composición:**
- Logo (átomo 3.9)
- Nav Link x2 (átomo 3.10)
- Container con Logo + Nav (flex, space-between)

**Propiedades:**
- Position: fixed top
- Padding: 24px vertical
- Background: transparent (scrolled: rgba(20,18,17,0.95) con blur)
- Border Bottom: none (scrolled: 1px solid rgba(255,255,255,0.05))

**Uso en página:**
- Header fijo en todas las secciones

### 4.2 Feature Card
**Nombre en Figma:** Card / Feature
**Composición:**
- Feature Number (átomo 3.7)
- Title H3 (átomo 3.5)
- Paragraph Body (átomo 3.6, variant Body Small)

**Propiedades:**
- Padding: 48px 32px (3rem 2rem)
- Background: rgba(255,255,255,0.02)
- Border: 1px solid rgba(255,255,255,0.05)
- Border Radius: 12px
- Transition: transform 0.3s, border-color 0.3s

**Estados:**
- Default: transform translateY(0), border-color default
- Hover: transform translateY(-10px), border-color rgba(217,197,178,0.3)

**Uso en página:**
- Grilla de beneficios (3 tarjetas)

### 4.3 Hero Content Block
**Nombre en Figma:** Block / Hero Text
**Composición:**
- Tagline (átomo 3.2)
- Title H1 (átomo 3.3)
- Paragraph Body Large (átomo 3.6, variant Body Large)
- Button Primary (átomo 3.1)

**Propiedades:**
- Max Width: 90% para Subtítulo

**Uso en página:**
- Lado izquierdo del Hero

### 4.4 Image Hero with Decor
**Nombre en Figma:** Image / Hero - Full
**Composición:**
- Image Container (átomo 3.8, variant Hero)
- Decorative Circle (átomo 3.11)

**Propiedades:**
- Height: 80vh
- Position: relative

**Uso en página:**
- Lado derecho del Hero

### 4.5 Section Text Block
**Nombre en Figma:** Block / Section Text
**Composición:**
- Tagline (átomo 3.2)
- Title H2 (átomo 3.4)
- Paragraph Body (átomo 3.6)

**Propiedades:**
- Padding: 40px
- Background: rgba(255,255,255,0.02)
- Border: 1px solid rgba(255,255,255,0.05)
- Border Radius: 12px
- Text Align: center (en algunas secciones)

**Uso en página:**
- Sección Experience (texto a la derecha)
- Sección Expert (texto a la derecha)

### 4.6 Image with Container
**Nombre en Figma:** Image / Feature
**Propiedades:**
- height: 600px
- Container variant según sección

**Uso en página:**
- Experience: imagen izquierda
- Expert: imagen izquierda

---

## 5. ORGANISMOS (Secciones Completas)

### 5.1 Hero Section
**Nombre en Figma:** Section / Hero
**Composición:**
- Navbar (molécula 4.1)
- Hero Content Block (molécula 4.3)
- Image Hero with Decor (molécula 4.4)
- Container grid 2 columnas (1fr 1fr)

**Propiedades:**
- Min Height: 100vh
- Padding Top: 80px (offset header)
- Grid Gap: 4rem
- Align Items: center

**Ancho total:** 1440px

### 5.2 Features Section (Qué Descubrirás)
**Nombre en Figma:** Section / Features
**Composición:**
- Title H2 (Section)
- Grid 3 columnas de Feature Cards (molécula 4.2)

**Propiedades:**
- Padding: 100px 0
- Grid: repeat(3, 1fr)
- Gap: 3rem
- Margin Top: 4rem

### 5.3 Experience Section
**Nombre en Figma:** Section / Experience
**Composición:**
- Image with Container (molécula 4.6, variant Experience)
- Section Text Block (molécula 4.5)
- Grid 2 columnas (1fr 1fr)

**Propiedades:**
- Padding: 100px 0
- Grid Gap: 4rem

### 5.4 Banner Parallax Transition
**Nombre en Figma:** Section / Banner Parallax
**Composición:**
- Image Container (full width)
- Banner Overlay gradient

**Propiedades:**
- Height: 60vh
- Image height: 120% (para efecto parallax)
- Overlay: linear-gradient(to bottom, bg-main 0%, transparent 50%, bg-darker 100%)

### 5.5 Expert Section (Sobre la Experta)
**Nombre en Figma:** Section / Expert
**Composición:**
- Image with Container (molécula 4.6, variant Expert)
- Section Text Block (molécula 4.5)
- Grid 2 columnas (1fr 1fr)
- Background: bg-darker

**Propiedades:**
- Padding: 100px 0
- Grid Gap: 5rem
- Background: #0d0c0b

### 5.6 Final CTA Section
**Nombre en Figma:** Section / CTA - Final
**Composición:**
- Parallax Background Image
- CTA Overlay (dark)
- Title H2 (variant large)
- Paragraph Body Large
- Button Large (átomo 3.1, variant Large)
- Content Relative (z-index 2)

**Propiedades:**
- Padding: 150px 0
- Overlay: rgba(20, 18, 17, 0.85)
- Title Size: 64px (4rem)
- Text Align: center

### 5.7 Footer
**Nombre en Figma:** Footer
**Composición:**
- Paragrapho simple con copyright

**Propiedades:**
- Padding: 32px 0
- Text Align: center
- Border Top: 1px solid rgba(255,255,255,0.05)
- Color: rgba(255,255,255,0.3)
- Font Size: 14px (0.875rem)

---

## 6. Responsive Breakpoints

### Desktop (default)
- Container max-width: 1440px
- Padding X: 5%

### Tablet (max-width: 1024px)
- Hero Title: 56px (3.5rem)
- Grid gap: 2rem

### Mobile (max-width: 768px)
- Hero Grid: 1 columna
- Features Grid: 1 columna
- Experience Grid: 1 columna
- Expert Grid: 1 columna

---

## 7. Orden de Construcción Recomendado

### Fase 1: Estilos Base
1. Crear estilos de color (6 colores)
2. Crear estilos de tipografía (10+ estilos de texto)
3. Definir efectos (sombras, bordes)

### Fase 2: Átomos
1. Button Primary (con variantes y estados)
2. Tagline
3. Titles (H1, H2, H3)
4. Paragraphs
5. Feature Number
6. Image Container (con variantes de forma)
7. Logo
8. Nav Link
9. Decorative Circle

### Fase 3: Moléculas
1. Navbar (combinando Logo + Nav Links)
2. Feature Card (combinando Number + Title + Text)
3. Hero Content Block
4. Image Hero with Decor
5. Section Text Block
6. Image containers específicos

### Fase 4: Organismos
1. Hero Section (ensamblar todo el hero)
2. Features Section (título + 3 tarjetas)
3. Experience Section
4. Banner Parallax
5. Expert Section
6. Final CTA
7. Footer

### Fase 5: Landing Page
- Ensamblar todas las secciones en orden
- Verificar responsive
- Agregar interacciones de prototipado

### Fase 6: Documentación
- Agregar descripciones a componentes
- Crear guía de uso en página de documentación
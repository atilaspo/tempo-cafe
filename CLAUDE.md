# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Referencias de diseño

| URL | Qué tiene de bueno |
|---|---|
| https://www.lulacafe.com/catering-and-events/ | Sección de catering/eventos que le gustó a Santiago — layout limpio, tono sofisticado-casual, buena jerarquía de contenido, tipografía serif+sans |

---

## El proyecto

Sitio web estático para **Tempo Café** — café de especialidad dentro de una academia de danza en Buenos Aires.

- **Diseño y desarrollo:** Santiago (GitHub: atilaspo)
- **Deploy:** Vercel conectado a GitHub (atilaspo)
- **Stack:** HTML + CSS + JS vanilla. Sin frameworks, sin bundler. Se abre con `open index.html` o `python3 -m http.server`.

---

## Los dueños

**Martu** y **El Francés** son pareja y co-dueños del café. Hay una foto de los dos juntos detrás de la barra (`fotos/foto_pareja centrada.png`).

- **Martu** — pastelera y politóloga. Viene de una familia italiana con tradición en gastronomía y eventos. Ella es la responsable de toda la repostería y cocina.
- **El Francés** — chef apasionado por la gastronomía. Trabajó en Argentina y en Estados Unidos. Hace eventos gastronómicos.

Esta historia de fondo es el alma del negocio: producción 100% propia, formación profesional seria, raíces italianas, experiencia internacional. El sitio debe transmitir eso — no es un café genérico, es un proyecto de vida de dos profesionales de la gastronomía.

---

## Sobre Tempo Café

- Café de especialidad de **Puerto Blest**. Leche común, descremada y vegetal.
- Cocina 100% de producción propia: medialunas, cookies, budines (incluyendo sin TACC), pizzas con 48h de levado, empanadas, tartas, scones, alfajores sablé.
- Almuerzos con platos de cocina elaborada (bondiola braseada, tapa de asado, pollo).
- Modalidad: **take-away o barra**
- Tagline: *"Una pausa con arte, sabor y hospitalidad."*
- Dentro de una **academia de danza**, Buenos Aires, 2026.
- **Dirección:** Gral. Juan Domingo Perón 1467, Buenos Aires
- **Horario:** Lun–Vie 8 a 20 hs
- **Instagram:** @tempocafe_
- **WhatsApp Martu:** +54 9 11 2460-3313 (`https://wa.me/5491124603313`)

### Servicios especiales
- Catering
- Mesa dulce
- Desayunos empresariales / corporativos

---

## Identidad visual — respetar siempre

### Colores (CSS variables en styles.css)
```css
--cream:      #f4f4ed   /* fondo claro, texto sobre oscuro */
--gold:       #c9b779   /* dorado suave de identidad */
--green-dark: #2d3a1f   /* fondo principal del sitio */
--green-sage: #95a47a   /* acento secundario */
--amber:      #bf8233   /* acento principal, CTA, detalles dorados */
--black:      #232322
```

### Tipografías (self-hosted woff2 en assets/fonts/)
- `--serif: 'BespokeSerif'` → headings, taglines, nombres de productos, titulares
- `--sans: 'Satoshi'` → body, labels, nav, precios, textos corridos

### Ilustraciones estilo grabado/sello
Hay tres variantes de color para cada ilustración. **Regla:**
- Variante **sin sufijo** (negro sobre transparente) → sobre fondos claros (`--cream`)
- Variante **`-ambar`** (dorado/ámbar) → sobre fondos oscuros (`--green-dark`)
- Variante **`-verde`** → acento puntual o variación cromática

### Patrón rombos (arlequín)
Aparece en sección Nosotros, fondos y piezas de comunicación. Archivos en `assets/backgrounds/` y `RECURSOS GRÁFICOS/FONDO *.jpg`.

### Ilustración del personaje
`RECURSOS GRÁFICOS/Mesa de trabajo 1@4x.png` — persona de línea minimalista negra haciendo pour-over café. Es el símbolo visual más distintivo de la marca. Usarla en Hero o Nosotros. Copiarla a `assets/illustrations/personaje.png`.

---

## Estructura de archivos

```
index.html                    ← página principal (single-page)
styles.css                    ← todos los estilos
assets/
  logos/
    logo-negro.png            ← logo sobre fondo claro / loader / nav
    logo-oscuro-crema.jpg     ← versión para fondos oscuros con fondo crema
    logo-verde-crema.jpg      ← versión verde salvia con fondo crema
  illustrations/              ← íconos: reloj, medialuna, pan, taza, café
                                 variantes: sin sufijo=negro, -ambar, -verde
  backgrounds/
    rombos-ambar-blanco.jpg   ← patrón rombos fondo claro
    rombos-ambar-verde.jpg    ← patrón rombos fondo oscuro
    fondo3.jpg                ← fondo adicional
  fonts/                      ← BespokeSerif + Satoshi en woff2
fotos/                        ← FOTOS REALES del negocio (ver inventario abajo)
RECURSOS GRÁFICOS/            ← archivos originales del branding
LOGOTIPOS/                    ← logos en alta resolución
```

### Inventario de fotos (fotos/)

| Archivo | Contenido | Uso sugerido |
|---|---|---|
| `foto_pareja centrada.png` | **Los dueños** — El Francés y Martu detrás de la barra | Sección Nosotros |
| `cafe_1.jpeg`, `cafe_2.jpeg`, `cafe_3.jpeg` | Vasos take-away, barra y café Tempo | Cards de menú / carrusel Café |
| `budin_1_pasteleria.jpeg`, `budin_2_pasteleria.jpeg`, `cookie_pasteleria.jpeg`, `cookie_2_pasteleria.jpeg`, `alfajores_pasteleria.jpeg`, `medialunas.jpeg` | Pastelería propia | Cards de menú / carrusel Pastelería |
| `almuerzo_1.jpeg`, `almuerzo_2.jpeg` | Platos de cocina / almuerzos | Cards de menú / carrusel Almuerzos |
| `pizza_1.jpeg` | Pizza Tempo | Card de menú Pizzas |
| `scon_relleno.jpeg` | Opción salada | Cards Empanadas / Tartas |
| `menu.jpg` | Foto de carta con precios | Referencia de contenido |

**Todas las fotos de producto tienen fondo blanco puro / tabla de madera clara** — estética limpia y profesional.

---

## Secciones del sitio (orden en index.html)

1. **Loader** — fade con logo negro, desaparece al cargar
2. **Nav** — logo + links + hamburger. Logo clickeable vuelve a `#inicio`. Se oculta al scrollear abajo, reaparece al subir.
3. **`#inicio` — Hero** — fondo verde oscuro, parallax, ilustraciones flotantes (reloj-ambar + medialuna-ambar), logo grande, tagline, dirección
4. **`#nosotros` — Nosotros** — historia del café, los dueños, patrón rombos como visual. Usar foto `fotos/foto_pareja centrada.png`. Mencionar origen: familia italiana, formación profesional, experiencia internacional.
5. **`#menu` — Menú** — fondo verde oscuro. Categorías: Café (tabla de precios), Para todo el día (cards), Almuerzos (cards), Bebidas frías. Usar fotos reales en las cards.
6. **`#servicios` — Servicios** — Catering, Mesa dulce, Desayunos corporativos
7. **`#contacto` — Contacto** — dirección, horario, Google Maps, WhatsApp, Instagram
8. **Footer** — logo + Instagram

---

## JS y animaciones (todo inline al final de index.html)

- **Loader:** clase `.loaded` en body → opacity 0 + pointer-events none
- **Nav hide/show:** `lastScroll` comparado con `window.scrollY`; agrega/quita clase `.nav--hidden`
- **Parallax hero:** `heroBg.style.transform = translateY(scrollY * 0.4px)`
- **Scroll-reveal:** `IntersectionObserver` → agrega clase `.visible` a `.reveal` y `.reveal-right`
- **Delay classes:** `.reveal-delay-1` a `.reveal-delay-4` → `transition-delay` 0.1s–0.4s
- **Hamburger:** toggle `.open` en `#mobileMenu`; se cierra al hacer click en cualquier link

---

## CSS — notas clave

- Base del body: `background: var(--green-dark)`, `color: var(--cream)`
- Secciones alternas: menú y servicios sobre `--green-dark`, nosotros y galería sobre `--cream` o viceversa
- Hero logo: `width: min(300px, 65vw)` — evitar overflow en móvil
- `.container`: `max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 4rem)`
- Imágenes: `object-fit: cover` en las que tengan dimensiones fijas

### Breakpoints responsive
```
@media (max-width: 1024px)   ajustes grid/padding
@media (max-width: 900px)    nav desktop oculto → hamburger visible
@media (max-width: 600px)    móvil principal
@media (max-width: 380px)    móvil pequeño (iPhone SE)
```

---

## Menú con precios (fuente: PHOTO-2026-05-28-14-23-13.jpg)

### Café
Espresso $3500 · Cortado $4000 · Flat White $5500 · Latte $4500 · Capuccino $5000 · Iced Coffee $4800 · Extra shot $2000 · Té $2500

### Para todo el día
Medialuna $2000 · Medialuna rellena $3500 · Cookie chocolate chips $3500 · Cookie Red Velvet $3500 · Budín de limón $2500 · Budín de chocolate $3000 · Budín de naranja sin TACC $3000 · Scon $2500 · Scon relleno $3500 · Alfajor Sablé $2500

### Almuerzos
Pollo $12500 · Bondiola braseada $14000 · Tapa de Asado $15000 · Pizza Margherita $12000 · Pizza 4 Quesos $13000 · Pizza Pepperoni $13000 · Tarta de Pollo $7500 · Tarta de Calabaza $6500 · Tarta Jamón y queso $6500 · Empanada de Carne · Empanada de Pollo · Empanada de Calabaza (precios a confirmar)

---

## Deploy

```bash
gh auth status                  # verificar login como atilaspo
gh repo create atilaspo/tempo-cafe --public --source=. --remote=origin --push
# luego conectar en vercel.com con la cuenta atilaspo
gh auth logout                  # IMPORTANTE: hacer esto al terminar para no afectar a Barbi
```

---

## Herramientas y skills instalados

### npm packages
- **motion** — librería de animaciones. Usar vía CDN en el HTML:
  ```html
  <script type="module">
    import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"
  </script>
  ```

### Skills en `.claude/skills/`

| Skill | Fuente | Qué hace |
|---|---|---|
| `ui-ux-pro-max` | nextlevelbuilder | 50+ estilos UI, 97 paletas, 57 pairings tipográficos, 99 guías UX |
| `emil-design-eng` | emilkowalski/skills | Filosofía de animaciones de Emil Kowalski (Vercel/Linear) |
| `review-animations` | emilkowalski/skills | Auditoría estricta de animaciones según reglas de Emil |
| `design-taste-frontend` | leonxlnx/taste-skill | Elimina el "AI slop" — layout, tipografía, motion y spacing de calidad |
| `minimalist-ui` | leonxlnx/taste-skill | Variante minimalista del taste-skill |
| `high-end-visual-design` | leonxlnx/taste-skill | Diseño visual de alta gama |
| `redesign-existing-projects` | leonxlnx/taste-skill | Rediseño de proyectos existentes |
| `brandkit` | leonxlnx/taste-skill | Generación de brand kits |
| `image-to-code` | leonxlnx/taste-skill | Convierte imágenes/mockups a código |
| `impeccable` | pbakaus/impeccable | 23 comandos de diseño: `/polish`, `/audit`, `/animate`, `/bolder`, `/quieter`... Correr `/impeccable init` la primera vez |
| `front-a11y` | Effeilo/claude-code-frontend-skills | Accesibilidad frontend |
| `front-review` | Effeilo/claude-code-frontend-skills | Code review frontend |
| `front-refactor` | Effeilo/claude-code-frontend-skills | Refactoring seguro de frontend |
| `front-comments` | Effeilo/claude-code-frontend-skills | Comentarios estructurados |
| `code-simplifier` | anthropics/claude-plugins-official | Simplifica código sin cambiar comportamiento |
| `frontend-design` | anthropics/skills | Skill oficial de Anthropic para diseño frontend |
| `canvas-design` | anthropics/skills | Diseño en canvas |
| `theme-factory` | anthropics/skills | Generación de temas y design tokens |
| `web-artifacts-builder` | anthropics/skills | Construcción de artefactos web |
| `webapp-testing` | anthropics/skills | Testing de web apps |

---

## Pendientes

- [x] Agregar foto de los dueños a sección Nosotros (`fotos/foto_pareja centrada.png`)
- [x] Usar fotos reales en menú y servicios
- [x] Copiar y usar ilustración del personaje (`assets/illustrations/personaje.png`)
- [x] Confirmar número de WhatsApp con Martu: +54 9 11 2460-3313
- [ ] Crear repo GitHub y deployar en Vercel
- [ ] Hacer `gh auth logout` tras el deploy

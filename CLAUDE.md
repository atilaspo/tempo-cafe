# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## El proyecto

Sitio web estático para **Tempo Café** — café de especialidad dentro de una academia de danza en Buenos Aires.

- **Diseño y desarrollo:** Santiago (GitHub: atilaspo)
- **Deploy:** Vercel conectado a GitHub (atilaspo)
- **Stack:** HTML + CSS + JS vanilla. Sin frameworks, sin bundler. Se abre con `open index.html` o `python3 -m http.server`.

---

## Los dueños

**Martu** y **El Francés** son pareja y co-dueños del café. Hay una foto de los dos juntos detrás de la barra (`fotos/DSC03041.jpeg`).

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
- **WhatsApp:** pendiente de confirmar con Martu (usar placeholder por ahora)

### Servicios especiales
- Catering
- Mesa dulce
- Desayunos empresariales / corporativos

---

## Identidad visual — respetar siempre

### Colores (CSS variables en styles.css)
```css
--cream:      #F0EDE6   /* fondo claro, texto sobre oscuro */
--green-dark: #2D3B23   /* fondo principal del sitio */
--green-sage: #8B9E7A   /* acento secundario */
--amber:      #C47820   /* acento principal, CTA, detalles dorados */
--black:      #111111
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
| `DSC03041.jpeg` | **Los dueños** — El Francés y Martu detrás de la barra, remeras Tempo | Sección Nosotros / hero |
| `DSC02954.jpeg` | Ambiente: molinillo + logo TEMPO CAFÉ pintado en pared crema | Sección Nosotros / galería |
| `DSC03027.jpeg` | Persona con remera Tempo sosteniendo vaso de café — lifestyle | Hero / galería |
| `DSC03033.jpeg` | Dos vasos take-away Tempo (chico y grande), fondo blanco | Servicios / galería |
| `DSC03034.jpeg` | Dos vasos take-away Tempo, ángulo diferente | Galería |
| `DSC02993.jpeg` | Pizza Margherita sobre piedra | Menú / galería |
| `DSC02817.jpeg` | Bondiola con puré, plato con ribete dorado | Menú almuerzos |
| `DSC02828.jpeg` | Carne (tapa asado / bondiola) con ensalada verde | Menú almuerzos |
| `5DA38264...jpeg` | Medialunas sobre tabla de madera | Menú panadería |
| `DSC02727.jpeg` | Alfajores sablé con dulce de leche | Menú repostería |
| `DSC02768.jpeg` | Scon relleno con jamón y queso | Menú panadería |
| `DSC02835.jpeg` | Cookies de chocolate blanco | Menú repostería |
| `DSC02848.jpeg` | Cookies chocolate chips | Menú repostería |
| `DSC02855.jpeg` | Budín de limón decorado con pétalos de flores | Menú repostería |
| `DSC02880.jpeg` | Budín (naranja/nueces) | Menú repostería |
| `DSC02887.jpeg` | Budín, otra perspectiva | Menú / galería |

**Todas las fotos de producto tienen fondo blanco puro / tabla de madera clara** — estética limpia y profesional.

---

## Secciones del sitio (orden en index.html)

1. **Loader** — fade con logo negro, desaparece al cargar
2. **Nav** — logo + links + hamburger. Logo clickeable vuelve a `#inicio`. Se oculta al scrollear abajo, reaparece al subir.
3. **`#inicio` — Hero** — fondo verde oscuro, parallax, ilustraciones flotantes (reloj-ambar + medialuna-ambar), logo grande, tagline, dirección
4. **`#nosotros` — Nosotros** — historia del café, los dueños, patrón rombos como visual. Usar foto `DSC03041` o `DSC02954`. Mencionar origen: familia italiana, formación profesional, experiencia internacional.
5. **`#menu` — Menú** — fondo verde oscuro. Categorías: Café (tabla de precios), Para todo el día (cards), Almuerzos (cards), Bebidas frías. Usar fotos reales en las cards.
6. **`#servicios` — Servicios** — Catering, Mesa dulce, Desayunos corporativos
7. **`#galeria` — Galería** — usar las fotos de `fotos/` ya disponibles (no esperar más)
8. **`#contacto` — Contacto** — dirección, horario, Google Maps, WhatsApp, Instagram
9. **Footer** — logo + Instagram

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

## Pendientes

- [ ] Agregar foto de los dueños a sección Nosotros (`fotos/DSC03041.jpeg`)
- [ ] Usar fotos reales en galería (ya están en `fotos/`)
- [ ] Copiar y usar ilustración del personaje (`RECURSOS GRÁFICOS/Mesa de trabajo 1@4x.png` → `assets/illustrations/personaje.png`)
- [ ] Confirmar número de WhatsApp con Martu
- [ ] Crear repo GitHub y deployar en Vercel
- [ ] Hacer `gh auth logout` tras el deploy

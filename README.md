# Brice Munji — Personal Portfolio

A professional, minimal, and premium personal portfolio website with a black & red theme.

**Brice Munji** — Software Engineer · Frontend Developer · AI & Product Builder · COO at CodingHQ
📍 Douala, Cameroon

## Features
- **Bilingual (EN / FR)** — language toggle in the nav, English by default, switches instantly with a smooth fade and no page reload; preference is remembered via `localStorage`
- Elegant black background with red accent theme
- Fully responsive (mobile, tablet, desktop)
- Subtle, smooth scroll-reveal animations
- Sections: Hero, About, Skills, Projects, Community (COO @ CodingHQ), Education, Contact
- Interactive project cards with cursor-follow spotlight and red hover highlights
- Sticky navigation with scroll progress bar and active-section tracking

## Internationalization
All text carries a `data-i18n="key"` attribute; `script.js` holds an `I18N` dictionary
with professional `en` and `fr` translations. Switching swaps every key in place and
updates `<html lang>` and the document title. To edit copy, update both languages for a key.

## Tech
Plain, dependency-free **HTML · CSS · JavaScript** — fast, portable, and easy to host anywhere.

## Run locally
```bash
python3 -m http.server 3000
# then open http://localhost:3000
```

## Structure
```
index.html   # markup & content
styles.css   # black/red theme, layout, animations
script.js    # nav, scroll progress, reveals, project spotlight
```

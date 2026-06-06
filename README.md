# TSOPC Church Website

Static website for **The Sanctuary of Plant City (TSOPC)** — a church in Plant City, FL.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Connect | `connect.html` |
| Ministries | `ministries.html` |
| Events | `events.html` |
| Giving | `giving.html` |
| Resources | `resources.html` |
| Live Stream | `live.html` |

## Stack

Plain HTML, CSS (`styles.css`), and a small amount of vanilla JavaScript (`script.js`).
Fonts via Google Fonts (Inter + Playfair Display), icons via Font Awesome, and
embeds via Subsplash (giving, forms, sermons, live stream).

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Notes

- `bust_cache_hero.py` — small helper for cache-busting the hero image.
- Accessibility & UX pass applied: working mobile menu, visible keyboard focus,
  `aria-label`s on icon links, `prefers-reduced-motion` support, labeled iframes,
  and WCAG-compliant color contrast.

## TODO

- `resources.html`: the "Download PDF" reading-plan link is a placeholder (`href="#"`) —
  point it at the real file.

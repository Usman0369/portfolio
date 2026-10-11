# Personal Portfolio Website

A clean, responsive, five-page personal portfolio website built with **HTML5, CSS3, and vanilla JavaScript** — no frameworks, no templates, no build step.

The design follows the **"Deep Forest + Sage Green + Cream"** color theme (calm, minimal, nature-inspired).

By **Usman Rabbani** — software engineer & web developer, Lahore, Pakistan.

## Pages

| Page | Files | Description |
|------|-------|-------------|
| Home | `index/index.html`, `index/index.css` | Hero, technologies strip, skills preview, featured projects, call-to-action |
| About | `about/about.html`, `about/about.css` | Personal intro, values, and education & experience timeline |
| Skills | `skills/skills.html`, `skills/skills.css` | Animated skill bars and a toolbox grid |
| Projects | `projects/projects.html`, `projects/projects.css` | Filterable project cards (All / Web) |
| Contact | `contact/contact.html`, `contact/contact.css` | Validated contact form, info cards, and social links |

Each page lives in its own folder with its **own self-contained stylesheet**. The shared
`script.js` and the `images/` folder sit at the project root.

## Color Palette

| Name | Hex | Used for |
|------|-----|----------|
| Deep Forest | `#26382C` | Headings, body text, primary buttons, dark sections |
| Forest Soft | `#2F4436` | Secondary dark surfaces and gradients |
| Sage Green | `#879B82` | Accents, hover states, progress bars |
| Sage Dark | `#6F8369` | Accent text and hover borders |
| Pale Sage | `#DCE5D8` | Cards and tinted section backgrounds |
| Cream | `#F5F5EF` | Page background |
| Surface | `#FCFCFC` | Cards and navigation |
| Line | `#E3E7DD` | Subtle borders and dividers |

All colors are defined once as CSS variables at the top of each stylesheet (`:root`), so the whole theme can be changed from a single place.

## Project Structure

```
portfolio56/
├── index/
│   ├── index.html
│   └── index.css
├── about/
│   ├── about.html
│   └── about.css
├── skills/
│   ├── skills.html
│   └── skills.css
├── projects/
│   ├── projects.html
│   └── projects.css
├── contact/
│   ├── contact.html
│   └── contact.css
├── images/
│   ├── profile.jpg
│   ├── bakery website.jpeg
│   ├── coffee wedsite.jpeg
│   ├── turmeric restaurant.jpeg
│   └── A night in lahore.jpeg
├── docs/
│   └── REPORT.md
├── script.js
└── README.md
```

## JavaScript Features (`script.js`)

- Mobile hamburger navigation (closes on link click or outside click)
- Smooth scrolling for in-page anchor links
- Active navigation link highlighting based on the current page
- Scroll-reveal animations using `IntersectionObserver`
- Animated skill progress bars
- Project category filtering (All / Web)
- Contact form validation with inline error messages
- Header shadow on scroll

## Running the Website

1. Download or clone this folder.
2. Open `index/index.html` in any modern web browser.

No build step or server is required. (For GitHub Pages, enable Pages on the repository
root and point it at the `index/` folder, or set up a redirect from the site root.)

## Customizing

- Replace **"Usman Rabbani"**, the initials (`UR`), tagline, email, phone, and location
  across the HTML files.
- Swap `images/profile.jpg` for a higher-resolution portrait if you like.
- Replace the project images (`images/*.jpeg`) with real project screenshots and update
  the titles, tags, and links on `index/index.html` and `projects/projects.html`.
- Update the skill percentages in `skills/skills.html`.

## Documentation

A full project report — objective, technologies, structure, design, features, and
screenshots — is available in [`docs/REPORT.md`](docs/REPORT.md).

## Notes

- Fully responsive: desktop, laptop, tablet, and mobile.
- Semantic HTML and accessible elements (`alt` text, `aria` attributes, focus styles).
- Respects `prefers-reduced-motion` for users who disable animations.
- The contact form is front-end only (no backend), as required.

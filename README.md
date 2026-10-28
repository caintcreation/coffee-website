# Coffee Website

A responsive coffee shop website built with HTML, CSS, and JavaScript. The site presents the coffee shop, menu items, customer testimonials, image gallery, contact details, and a responsive footer.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Fixed navigation bar with a mobile slide-out menu
- Hero section with calls to action
- About section with social media links
- Coffee menu with product images
- Testimonial carousel powered by Swiper
- Responsive gallery with image hover effects
- Contact information and contact form
- Footer with social links, policy links, and hover states

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- [Swiper](https://swiperjs.com/) for the testimonial slider
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts: Poppins and Miniver

## Project structure

```text
.
├── index.html       # Main page markup
├── style.css        # Site styling and responsive rules
├── script.js        # Mobile navigation and testimonial slider behavior
└── images/          # Website images
```

## Running the site

No build tools or package installation are required.

1. Download or clone the project.
2. Open `index.html` directly in a browser.

For a local development server, run the following command from the project directory if Python is installed:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

## Customization

- Update the text and page sections in `index.html`.
- Change colors, spacing, typography, and breakpoints in `style.css`.
- Replace or add images in the `images/` directory.
- Update the slider behavior in `script.js`.

The page uses CDN-hosted Swiper, Font Awesome, and Google Fonts resources, so an internet connection is needed for those external assets to load.

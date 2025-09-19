# Ekalavya Childcare Website

A modern, responsive website for Ekalavya Childcare featuring a warm and welcoming design focused on nurturing young minds.

## Features

- **Fully Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Accessibility Compliant**: ARIA labels, skip links, and proper semantic HTML
- **Interactive Elements**: Testimonial carousel, mobile navigation, and smooth animations
- **Modern Design**: Clean layout with a cheerful color palette
- **Fast Loading**: Optimized CSS and minimal JavaScript

## Color Palette

- **Yellow** (#FFD54F): Call-to-action buttons and highlights
- **Green** (#81C784): Section highlights and nature-inspired elements
- **Blue** (#4FC3F7): Headings and primary navigation
- **Red** (#EF5350): Subtle accents and important notices
- **White** (#FFFFFF): Clean background for readability

## Project Structure

```
ekalavya-childcare/
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
├── assets/
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── js/
│   │   └── main.js            # JavaScript functionality
│   └── images/                # Image assets (see below)
│       ├── logo.png           # Main logo
│       ├── logo-white.png     # White logo for footer
│       ├── favicon.png        # Favicon
│       ├── hero.jpg           # Hero section image
│       ├── programs/
│       │   ├── infants.jpg    # Infant care program image
│       │   ├── toddlers.jpg   # Toddler program image
│       │   └── preschool.jpg  # Preschool program image
│       ├── gallery/
│       │   ├── play.jpg       # Playground activities
│       │   ├── art.jpg        # Art and craft activities
│       │   ├── reading.jpg    # Story time
│       │   ├── outdoor.jpg    # Outdoor activities
│       │   ├── music.jpg      # Music class
│       │   └── learning.jpg   # Learning activities
│       └── testimonials/
│           ├── parent1.jpg    # Parent testimonial photo 1
│           ├── parent2.jpg    # Parent testimonial photo 2
│           └── parent3.jpg    # Parent testimonial photo 3
```

## Required Images

To complete the website, you'll need to add the following images to the `assets/images/` directory:

### Logos & Branding

- `logo.png` (150x50px) - Main logo for header
- `logo-white.png` (150x50px) - White version for footer
- `favicon.png` (32x32px) - Browser favicon

### Hero Section

- `hero.jpg` (600x400px) - Welcoming image of children and caregivers

### Programs Section

- `programs/infants.jpg` (350x200px) - Infant care activities
- `programs/toddlers.jpg` (350x200px) - Toddler activities
- `programs/preschool.jpg` (350x200px) - Preschool learning

### Gallery Section

- `gallery/play.jpg` (250x250px) - Children playing
- `gallery/art.jpg` (250x250px) - Art activities
- `gallery/reading.jpg` (250x250px) - Story time
- `gallery/outdoor.jpg` (250x250px) - Outdoor play
- `gallery/music.jpg` (250x250px) - Music class
- `gallery/learning.jpg` (250x250px) - Educational activities

### Testimonials Section

- `testimonials/parent1.jpg` (60x60px) - Parent photo 1
- `testimonials/parent2.jpg` (60x60px) - Parent photo 2
- `testimonials/parent3.jpg` (60x60px) - Parent photo 3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To view the website locally:

1. Clone or download the project files
2. Add the required images to the `assets/images/` directory
3. Open `index.html` in your web browser

## Features Overview

### Navigation

- Sticky header with smooth scrolling navigation
- Mobile-responsive hamburger menu
- Skip link for accessibility

### Sections

- **Hero**: Full-width banner with call-to-action buttons
- **About**: Feature cards highlighting key benefits
- **Programs**: Program cards with age ranges and descriptions
- **Gallery**: Responsive image grid with hover effects
- **Testimonials**: Auto-playing carousel with manual controls
- **Contact**: Contact form with validation and location info
- **Footer**: Quick links, social media, and contact details

### Interactivity

- Mobile menu toggle
- Testimonial slider with auto-play and manual controls
- Form validation with error messages
- Smooth scrolling navigation
- Hover effects and animations

### Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast focus indicators
- Alt text for all images
- Reduced motion support

## Customization

### Colors

Edit the CSS custom properties in `assets/css/styles.css` to change the color scheme:

```css
:root {
  --yellow-primary: #ffd54f;
  --green-primary: #81c784;
  --blue-primary: #4fc3f7;
  --red-accent: #ef5350;
  /* ... */
}
```

### Content

Update the HTML content in `index.html` to customize:

- Company information and contact details
- Program descriptions and age ranges
- Testimonial content and parent information
- Navigation menu items

### Typography

The website uses Google Fonts (Quicksand and Open Sans). To change fonts, update the Google Fonts link in the HTML head and the CSS font-family variables.

## Performance

- CSS Grid and Flexbox for efficient layouts
- Minimal JavaScript for optimal loading speed
- Lazy loading for gallery images
- Optimized font loading with preconnect

## License

This project is created for Ekalavya Childcare and can be used as a template for similar childcare websites.

---

/_ Design System - Ekalavya Childcare _/

:root {
/_ Color Palette - Soft and Welcoming _/
--yellow-primary: #FFD54F;
--yellow-light: #FFE082;
--green-primary: #81C784;
--green-light: #A5D6A7;
--blue-primary: #4FC3F7;
--blue-light: #81D4FA;
--red-accent: #EF5350;
--red-light: #EF9A9A;

    /* Neutral Colors */
    --white: #FFFFFF;
    --gray-50: #F8FAFC;
    --gray-100: #F1F5F9;
    --gray-200: #E2E8F0;
    --gray-700: #334155;
    --gray-800: #1E293B;

    /* Typography */
    --font-primary: 'Quicksand', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;

    /* Breakpoints */
    --bp-sm: 30em;     /* 480px */
    --bp-md: 48em;     /* 768px */
    --bp-lg: 64em;     /* 1024px */
    --bp-xl: 80em;     /* 1280px */

    /* Containers */
    --container-padding: clamp(1rem, 5vw, 2rem);
    --container-max: 75rem;

    /* Spacing System - Fluid */
    --space-1: clamp(0.25rem, 0.5vw, 0.5rem);
    --space-2: clamp(0.5rem, 1vw, 1rem);
    --space-3: clamp(1rem, 2vw, 1.5rem);
    --space-4: clamp(1.5rem, 3vw, 2rem);
    --space-5: clamp(2rem, 4vw, 3rem);
    --space-6: clamp(3rem, 6vw, 4rem);

    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 300ms ease;
    --transition-slow: 500ms ease;

}

/_ Reset & Base Styles _/
_, _::before, \*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
font-size: 16px;
scroll-behavior: smooth;
-webkit-text-size-adjust: 100%;
}

body {
font-family: var(--font-secondary);
color: var(--gray-800);
line-height: 1.6;
background-color: var(--white);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas, svg {
display: block;
max-width: 100%;
height: auto;
}

/_ Skip Link _/
.skip-link {
position: absolute;
top: -40px;
left: 6px;
background: var(--blue-primary);
color: var(--white);
padding: 8px;
text-decoration: none;
border-radius: var(--radius-sm);
z-index: 1000;
transition: top var(--transition-fast);
}

.skip-link:focus {
top: 6px;
}

/_ Typography - Fluid and Responsive _/
h1, h2, h3, h4, h5, h6 {
font-family: var(--font-primary);
color: var(--blue-primary);
line-height: 1.2;
letter-spacing: -0.02em;
}

h1 {
font-size: clamp(2rem, 5vw + 1rem, 3.5rem);
margin-bottom: var(--space-4);
}

h2 {
font-size: clamp(1.5rem, 3vw + 1rem, 2.5rem);
margin-bottom: var(--space-3);
}

h3 {
font-size: clamp(1.25rem, 2vw + 1rem, 2rem);
margin-bottom: var(--space-2);
}

p {
margin-bottom: var(--space-3);
max-width: 70ch;
}

/_ Layout & Container _/
.container {
width: 100%;
max-width: var(--container-max);
margin: 0 auto;
padding: 0 var(--container-padding);
}

.section {
padding: var(--space-6) 0;
}

/_ Buttons _/
.btn {
display: inline-block;
padding: var(--space-2) var(--space-4);
border: none;
border-radius: var(--radius-md);
font-family: var(--font-primary);
font-weight: 600;
text-decoration: none;
cursor: pointer;
transition: all var(--transition-normal);
text-align: center;
}

.btn-primary {
background: var(--yellow-primary);
color: var(--gray-800);
}

.btn-primary:hover,
.btn-primary:focus {
background: var(--yellow-light);
transform: translateY(-2px);
box-shadow: var(--shadow-md);
}

.btn-outline {
background: transparent;
color: var(--yellow-primary);
border: 2px solid var(--yellow-primary);
}

.btn-outline:hover,
.btn-outline:focus {
background: var(--yellow-primary);
color: black;
transform: translateY(-2px);
box-shadow: var(--shadow-md);
}

/_ Header & Navigation _/
.header {
position: sticky;
top: 0;
background: var(--white);
box-shadow: var(--shadow-sm);
z-index: 100;
padding: var(--space-2) 0;
}

.nav-container {
display: flex;
justify-content: space-between;
align-items: center;
gap: var(--space-4);
}

.logo {
flex-shrink: 0;
}

.logo img {
max-height: 10rem;
width: auto;
}

.nav-menu {
display: flex;
align-items: center;
gap: var(--space-4);
}

.nav-link {
color: var(--gray-700);
text-decoration: none;
font-weight: 500;
transition: color var(--transition-fast);
position: relative;
}

.nav-link::after {
content: '';
position: absolute;
bottom: -4px;
left: 0;
width: 100%;
height: 2px;
transform: scaleX(0);
transition: transform var(--transition-normal);
}

.nav-menu li:nth-child(1) .nav-link::after {
background: var(--blue-primary);
}
.nav-menu li:nth-child(2) .nav-link::after {
background: var(--yellow-primary);
}
.nav-menu li:nth-child(3) .nav-link::after {
background: var(--red-accent);
}
.nav-menu li:nth-child(4) .nav-link::after {
background: var(--green-primary);
}
.nav-menu li:nth-child(5) .nav-link::after {
background: var(--blue-primary);
}
.nav-menu li:nth-child(6) .nav-link::after {
background: var(--yellow-primary);
}

.nav-link:hover::after,
.nav-link:focus::after {
transform: scaleX(1);
}

.mobile-menu-btn {
display: none;
background: none;
border: none;
cursor: pointer;
padding: var(--space-1);
}

.menu-icon,
.menu-icon::before,
.menu-icon::after {
display: block;
width: 24px;
height: 2px;
background: var(--gray-700);
transition: all var(--transition-fast);
}

.menu-icon::before,
.menu-icon::after {
content: '';
position: absolute;
}

.menu-icon::before {
top: -8px;
}

.menu-icon::after {
top: 8px;
}

/_ Hero Section _/
.blankherocolor{
color: white;
}

.hero {
position: relative;
background: linear-gradient(45deg, var(--blue-light), var(--red-light));
overflow: hidden;
}

.hero-content {
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--space-5);
align-items: center;
min-height: calc(100vh - 5rem);
color: white;
}

.hero-text {
max-width: 40ch;
}

.hero-image {
position: relative;
}

.hero-image img {
border-radius: var(--radius-lg);
box-shadow: var(--shadow-lg);
}

.hero-buttons {
display: flex;
gap: var(--space-3);
margin-top: var(--space-4);
}

/_ About Section _/
.about {
background: var(--gray-50);
}

.section-header {
margin-bottom: var(--space-5);
text-align: center;

}

.section-header #about-title {
margin-bottom: var(--space-5);
text-align: center;
color: var(--yellow-primary);
}

.section-header p {
color: var(--gray-700);
font-size: 1.1rem;
margin-bottom: 0;
}

/_ Features Grid _/
.features-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
gap: var(--space-4);
}

.feature-card {
background: var(--white);
padding: var(--space-4);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm);
transition: transform var(--transition-normal);
text-align: center;
}

.feature-card:hover {
transform: translateY(-5px);
box-shadow: var(--shadow-lg);
}

.feature-card h3 {
color: var(--green-primary);
margin-bottom: var(--space-2);
}

.feature-card .icon {
display: inline-block;
width: 48px;
height: 48px;
background: var(--green-light);
border-radius: 50%;
margin-bottom: var(--space-2);
}

/_ Programs Section _/
.programs {
background: var(--white);
}

.programs-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
gap: var(--space-4);
}

.program-card {
display: flex;
flex-direction: column;
background: var(--white);
border-radius: var(--radius-lg);
overflow: hidden;
box-shadow: var(--shadow-sm);
transition: transform var(--transition-normal);
}

.program-card:hover {
transform: translateY(-5px);
box-shadow: var(--shadow-lg);
}

.program-image {
aspect-ratio: 16/9;
object-fit: cover;
}

.program-content {
padding: var(--space-3);
flex-grow: 1;
}

.program-content h3 {
color: var(--blue-primary);
margin-bottom: var(--space-1);
}

.age-range {
color: var(--red-accent);
font-weight: 600;
margin-bottom: var(--space-2);
}

.program-content ul {
list-style: none;
padding: 0;
}

.program-content li {
padding: var(--space-1) 0;
position: relative;
padding-left: 1.5rem;
}

.program-content li::before {
content: '✓';
position: absolute;
left: 0;
color: var(--green-primary);
font-weight: bold;
}

/_ Gallery Section _/
.gallery {
background: var(--gray-50);
}

.gallery-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
gap: var(--space-3);
padding: var(--space-3);
}

.gallery-item {
position: relative;
border-radius: var(--radius-md);
overflow: hidden;
aspect-ratio: 1;
}

.gallery-item img {
width: 100%;
height: 100%;
object-fit: cover;
transition: transform var(--transition-normal);
}

.gallery-item:hover img {
transform: scale(1.05);
}

/_ Testimonials Section _/
.testimonials {
background: var(--white);
}

.testimonials-container {
max-width: 800px;
margin: 0 auto;
}

.testimonial-slider {
position: relative;
overflow: hidden;
}

.testimonial-card {
display: none;
opacity: 0;
transition: opacity var(--transition-normal);
}

.testimonial-card.active {
display: block;
opacity: 1;
}

.testimonial-content {
background: var(--white);
padding: var(--space-5);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
text-align: center;
margin: 0 var(--space-3);
}

.testimonial-content p {
font-size: 1.2rem;
font-style: italic;
margin-bottom: var(--space-4);
color: var(--gray-700);
}

.testimonial-author {
display: flex;
align-items: center;
justify-content: center;
gap: var(--space-3);
}

.author-image {
width: 60px;
height: 60px;
border-radius: 50%;
object-fit: cover;
}

.author-info h4 {
color: var(--blue-primary);
margin-bottom: 0.25rem;
}

.author-info p {
color: var(--gray-700);
font-size: 0.9rem;
margin-bottom: 0;
}

.testimonial-controls {
display: flex;
justify-content: center;
align-items: center;
gap: var(--space-4);
margin-top: var(--space-4);
}

.testimonial-prev,
.testimonial-next {
background: var(--yellow-primary);
color: var(--gray-800);
border: none;
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
font-size: 1.2rem;
transition: all var(--transition-fast);
}

.testimonial-prev:hover,
.testimonial-next:hover {
background: var(--yellow-light);
transform: scale(1.1);
}

.testimonial-dots {
display: flex;
gap: var(--space-2);
}

.dot {
width: 12px;
height: 12px;
border-radius: 50%;
background: var(--gray-200);
cursor: pointer;
transition: background var(--transition-fast);
}

.dot.active {
background: var(--blue-primary);
}

/_ Contact Section _/
.contact {
background: var(--gray-50);
}

.contact-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
gap: var(--space-5);
}

.contact-info {
background: var(--white);
padding: var(--space-4);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm);
}

.contact-info h3 {
color: var(--blue-primary);
margin-bottom: var(--space-3);
}

.contact-info address {
font-style: normal;
margin-bottom: var(--space-4);
}

.contact-info p {
margin-bottom: var(--space-2);
}

.contact-info a {
color: var(--gray-700);
text-decoration: none;
}

.contact-info a:hover {
color: var(--blue-primary);
}

.hours {
background: var(--green-light);
padding: var(--space-3);
border-radius: var(--radius-md);
}

.hours h4 {
color: black;
margin-bottom: var(--space-2);
}

.contact-form {
background: var(--white);
padding: var(--space-4);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm);
}

.form-group {
margin-bottom: var(--space-3);
}

.form-label {
display: block;
margin-bottom: var(--space-2);
color: var(--gray-700);
font-weight: 500;
}

.form-input {
width: 100%;
padding: var(--space-2);
border: 2px solid var(--gray-200);
border-radius: var(--radius-md);
font-size: 1rem;
transition: border-color var(--transition-fast);
}

.form-input:focus {
outline: none;
border-color: var(--blue-primary);
}

.form-input.error {
border-color: var(--red-accent);
}

.error-message {
color: var(--red-accent);
font-size: 0.9rem;
margin-top: var(--space-1);
}

/_ Footer _/
.footer {
background: var(--gray-800);
color: var(--white);
padding: var(--space-6) 0 var(--space-3);
}

.footer-grid {
display: grid;
grid-template-columns: 2fr repeat(3, 1fr);
gap: var(--space-4);
}

.footer-info img {
margin-bottom: var(--space-2);
}

.footer-info p {
color: var(--gray-200);
margin-bottom: 0;
}

.footer-nav h3,
.footer-social h3,
.footer-hours h3 {
color: var(--white);
margin-bottom: var(--space-2);
}

.footer-nav ul {
list-style: none;
}

.footer-nav li {
margin-bottom: var(--space-1);
}

.footer-nav a {
color: var(--gray-200);
text-decoration: none;
transition: color var(--transition-fast);
}

.footer-nav a:hover {
color: var(--blue-primary);
}

.social-icons {
display: flex;
gap: var(--space-2);
}

.social-icons a {
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
background: var(--gray-700);
border-radius: 50%;
color: var(--white);
text-decoration: none;
transition: all var(--transition-fast);
}

.social-icons a:hover {
background: var(--blue-primary);
transform: scale(1.1);
}

.footer-hours p {
color: var(--gray-200);
margin-bottom: var(--space-1);
}

.footer-bottom {
margin-top: var(--space-5);
padding-top: var(--space-3);
border-top: 1px solid var(--gray-700);
text-align: center;
}

.footer-bottom p {
color: var(--gray-200);
margin-bottom: 0;
}

/_ Responsive Design _/
@media (max-width: 64em) {
.footer-grid {
grid-template-columns: repeat(2, 1fr);
}
}

@media (max-width: 48em) {
.mobile-menu-btn {
display: block;
}

    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        padding: var(--space-3);
        flex-direction: column;
        align-items: stretch;
        box-shadow: var(--shadow-md);
        border-top: 1px solid var(--gray-200);

    }

    .nav-menu.active {
        display: flex;
    }

    .menu-icon.active {
        background: transparent;
    }

    .menu-icon.active::before {
        transform: rotate(45deg);
        top: 0;
    }

    .menu-icon.active::after {
        transform: rotate(-45deg);
        top: 0;
    }

    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-text {
        max-width: 100%;
    }

    .hero-buttons {
        justify-content: center;
    }

    .testimonial-author {
        flex-direction: column;
        text-align: center;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: var(--space-5);
        text-align: center;
    }

}

@media (max-width: 30em) {
.container {
padding: 0 var(--space-3);
}

    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .testimonial-content {
        margin: 0;
        padding: var(--space-3);
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

}

/_ Accessibility & Print _/
@media (prefers-reduced-motion: reduce) {
_,
_::before,
\*::after {
animation-duration: 0.01ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.01ms !important;
scroll-behavior: auto !important;
}
}

@media print {
.header,
.footer {
display: none;
}

    body {
        color: black;
    }

    .container {
        max-width: none;
        padding: 0;
    }

}

/_ Focus styles for accessibility _/
.nav-link:focus,
.btn:focus,
.form-input:focus,
.testimonial-prev:focus,
.testimonial-next:focus,
.dot:focus {
/_outline: 2px solid var(--blue-primary);_/
outline-offset: 2px;
}

/_ Text center utility _/
.text-center {
text-align: center;
}

---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ekalavya Childcare - Nurturing young minds with expert care, educational programs, and a safe, loving environment for children of all ages.">
    <title>Ekalavya Childcare - Nurturing Young Minds</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="assets/css/styles.css">

    <!-- Favicon -->
    <script src="https://kit.fontawesome.com/5edc195db1.js" crossorigin="anonymous"></script>

</head>
<body>


    <!-- Header -->
    <header class="header" role="banner">
        <nav class="nav-container container" role="navigation" aria-label="Main navigation">
            <a href="/" class="logo" aria-label="Ekalavya Childcare Home">

<img src="assets/images/logo.jpeg" alt="Ekalavya Childcare Logo" width="150" height="50">
            </a>

            <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-menu">
                <span class="menu-icon"></span>
            </button>

            <ul id="nav-menu" class="nav-menu" role="menubar">
                <li style="list-style-type: none;" role="none"><a href="#home" class="nav-link" role="menuitem">Home</a></li>
                <li style="list-style-type: none;" role="none"><a href="#about" class="nav-link" role="menuitem">About Us</a></li>
                <li style="list-style-type: none;" role="none"><a href="#programs" class="nav-link" role="menuitem">Programs</a></li>
                <li style="list-style-type: none;" role="none"><a href="#gallery" class="nav-link" role="menuitem">Gallery</a></li>
                <li style="list-style-type: none;" role="none"><a href="#testimonials" class="nav-link" role="menuitem">Testimonials</a></li>
                <li style="list-style-type: none;" role="none"><a href="#contact" class="nav-link" role="menuitem">Contact</a></li>
        </nav>
    </header>

    <main id="main-content" role="main">
        <!-- Hero Section -->
        <section id="home" class="hero section" aria-labelledby="hero-title">
            <div class="container hero-content">
                <div class="hero-text">
                    <h1 class="blankherocolor" id="hero-title">Nurturing Young Minds for a Brighter Tomorrow</h1>
                    <p>At Ekalavya Childcare, we create a safe, loving environment where children can learn, grow, and thrive through play-based learning and personalized attention.</p>
                    <div class="hero-buttons">
                        <a href="#contact" class="btn btn-primary">Schedule a Visit</a>
                        <a href="#programs" class="btn btn-outline">Explore Programs</a>
                    </div>
                </div>

<div class="hero-image" role="img" aria-label="Happy children engaged in learning activities">
    <img src="assets/images/picture 8.jpeg" alt="Happy children engaged in learning activities" width="600" height="400">
</div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" aria-labelledby="about-title">
            <div class="container">
                <header class="section-header text-center">
                    <h2 id="about-title">Why Choose Ekalavya Childcare?</h2>
                    <p>Discover our commitment to nurturing every child's unique potential</p>
                </header>

                <div class="features-grid">
                    <article class="feature-card">
                        <h3><i class="fa-solid fa-school"></i>Expert Educators</h3>
                        <p>Our qualified teachers bring years of experience and passion to early childhood education.</p>
                    </article>
                    <article class="feature-card">
                        <h3><i class="fa-solid fa-seedling"></i>Safe Environment</h3>
                        <p>State-of-the-art security systems and strict safety protocols ensure your child's wellbeing.</p>
                    </article>
                    <article class="feature-card">
                        <h3><i class="fa-solid fa-shapes"></i>Learning Through Play</h3>
                        <p>Age-appropriate activities that make learning fun and engaging for every child.</p>
                    </article>
                    <article class="feature-card">
                        <h3><i class="fa-solid fa-graduation-cap"></i>Balanced Development</h3>
                        <p>Programs designed to nurture cognitive, social, emotional, and physical growth.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Programs Section -->
        <section id="programs" class="programs section" aria-labelledby="programs-title">
            <div class="container">
                <header class="section-header text-center">
                    <h2 id="programs-title">Our Programs</h2>
                    <p>Tailored care and education for every stage of childhood</p>
                </header>

                <div class="programs-grid">
                    <article class="program-card">

<img src="assets/images/picture 5.jpeg" alt="Infant Care Program" class="program-image">
                        <div class="program-content">
                            <h3>Infant Care</h3>
                            <p class="age-range">6 weeks - 18 months</p>
                            <ul>
                                <li>Nurturing, secure environment</li>
                                <li>Individual care routines</li>
                                <li>Early development activities</li>
                            </ul>
                        </div>
                    </article>

                    <article class="program-card">

<img src="assets/images/picture 6.jpeg" alt="Toddler Program" class="program-image">
                        <div class="program-content">
                            <h3>Toddler Program</h3>
                            <p class="age-range">18 months - 3 years</p>
                            <ul>
                                <li>Active learning experiences</li>
                                <li>Social skill development</li>
                                <li>Creative expression</li>
                            </ul>
                        </div>
                    </article>

                    <article class="program-card">

<img src="assets/images/picture 7.jpeg" alt="Preschool Program" class="program-image">
                        <div class="program-content">
                            <h3>Preschool</h3>
                            <p class="age-range">3 - 5 years</p>
                            <ul>
                                <li>Kindergarten readiness</li>
                                <li>STEAM activities</li>
                                <li>Language development</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section id="gallery" class="gallery section" aria-labelledby="gallery-title">
            <div class="container">
                <header class="section-header text-center">
                    <h2 id="gallery-title">Life at Ekalavya</h2>
                    <!--<p>Moments of joy, learning, and discovery</p>-->
                </header>

                <div class="gallery-grid">
                    <div class="gallery-item animate-on-scroll">
                        <img src="assets/images/aca761e3-7ed1-40ed-be82-234be974001a.jpeg" alt="Gallery image 1" loading="lazy">
                    </div>
                    <div class="gallery-item animate-on-scroll">
                        <img src="assets/images/picture 3.jpeg" alt="Gallery image 2" loading="lazy">
                    </div>
                    <div class="gallery-item animate-on-scroll">
                        <img src="assets/images/picture 4.jpeg" alt="Gallery image 3" loading="lazy">
                    </div>
                    <div class="gallery-item animate-on-scroll">
                        <img src="assets/images/picture 5.jpeg" alt="Gallery image 4" loading="lazy">
                    </div>
                    <div class="gallery-item animate-on-scroll">
                        <img src="assets/images/picture 6.jpeg" alt="Gallery image 5" loading="lazy">
                    </div>
                    <div class="gallery-item animate-on-scroll">
                        <img src="assets/images/picture 7.jpeg" alt="Gallery image 6" loading="lazy">
                    </div>
                    <div class="gallery-item animate-on-scroll">
                        <img src="assets/images/picture2.jpeg" alt="Gallery image 7" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" aria-labelledby="testimonials-title">
            <div class="container">
                <header class="section-header text-center">
                    <h2 id="testimonials-title">What Parents Say</h2>
                    <p>Hear from our happy families!</p>
                </header>

                <div class="testimonials-container">
                    <div class="testimonial-slider">
                        <div class="testimonial-card active">
                            <div class="testimonial-content">
                                <p>"Ekalavya Childcare has been an amazing experience for our daughter. The teachers are incredibly caring and the curriculum is both fun and educational."</p>
                                <div class="testimonial-author">
                                    <img src="assets/images/testimonials/parent1.jpg" alt="Sarah Johnson" class="author-image">
                                    <div class="author-info">
                                        <h4>Sarah Johnson</h4>
                                        <p>Parent of Emma (3 years)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <p>"The safe and nurturing environment at Ekalavya has given us peace of mind. Our son has grown so much socially and academically."</p>
                                <div class="testimonial-author">
                                    <img src="assets/images/testimonials/parent2.jpg" alt="Michael Chen" class="author-image">
                                    <div class="author-info">
                                        <h4>Michael Chen</h4>
                                        <p>Parent of Alex (4 years)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <p>"We couldn't be happier with Ekalavya Childcare. The staff goes above and beyond to create a loving and stimulating environment for our twins."</p>
                                <div class="testimonial-author">
                                    <img src="assets/images/testimonials/parent3.jpg" alt="Jennifer Rodriguez" class="author-image">
                                    <div class="author-info">
                                        <h4>Jennifer Rodriguez</h4>
                                        <p>Parent of Sophia and Lucas (2 years)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-controls">
                        <button class="testimonial-prev" aria-label="Previous testimonial">‹</button>
                        <div class="testimonial-dots">
                            <span class="dot active" data-slide="0"></span>
                            <span class="dot" data-slide="1"></span>
                            <span class="dot" data-slide="2"></span>
                        </div>
                        <button class="testimonial-next" aria-label="Next testimonial">›</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact section" aria-labelledby="contact-title">
            <div class="container">
                <header class="section-header text-center">
                    <h2 id="contact-title">Get in Touch</h2>
                    <p>We'd love to hear from you and answer any questions</p>
                </header>

                <div class="contact-grid">
                    <div class="contact-info">
                        <h3>Contact Us!</h3>
                        <address>
                            <p><i class="icon" aria-hidden="true"></i>5202 86th Ave NE<br>Marysville, Washington 98270</p>
                            <p><i class="icon" aria-hidden="true"></i>
                                <a href="tel:+1234567890">Phone: (425) 504-9654</a>
                            </p>
                            <p><i class="icon" aria-hidden="true"></i>
                                <a href="mailto:ekalavya.childcare@gmail.com">Email: ekalavya.childcare@gmail.com</a>
                            </p>
                        </address>

                        <div class="hours">
                            <h4>Hours of Operation:</h4>
                            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p>Saturday - Sunday: Closed</p>
                        </div>
                    </div>

                    <form class="contact-form" action="/submit-form" method="POST">
                        <div class="form-group">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" id="name" name="name" class="form-input" required
                                   aria-required="true">
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="email" class="form-input" required
                                   aria-required="true">
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="tel" id="phone" name="phone" class="form-input" required
                                   aria-required="true">
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">Message</label>
                            <textarea id="message" name="message" class="form-input" rows="4" required
                                      aria-required="true"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-info">

<img src="assets/images/logo.jpeg" alt="Ekalavya Childcare" width="150" height="50">
                    <p>Nurturing young minds for a brighter tomorrow through play-based learning and personalized care.</p>
                </div>

                <nav class="footer-nav" aria-label="Footer navigation">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div class="footer-social">
                    <h3>Connect With Us</h3>
                    <div class="social-icons">
                        <a href="#" aria-label="Visit our Facebook page"><i class="icon" aria-hidden="true"></i></a>
                        <a href="#" aria-label="Follow us on Instagram"><i class="icon" aria-hidden="true"></i></a>
                        <a href="#" aria-label="Follow us on Twitter"><i class="icon" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div class="footer-hours">
                    <h3>Hours</h3>
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 Ekalavya Childcare. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>

</body>
</html>

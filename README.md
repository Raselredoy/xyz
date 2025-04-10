# Md Rasel Ahmed Redoy - Portfolio Website

![Portfolio Preview](/api/placeholder/800/400)

## Overview

This is a personal portfolio website for Md Rasel Ahmed Redoy, a video editor and graphic designer with 4 years of industry experience. The website showcases professional skills, portfolio projects, and provides a way for potential clients to make contact.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with animations and interactive elements
- **Portfolio Gallery**: Visual showcase of work samples with project descriptions
- **Contact Form**: Interactive form for potential clients to reach out
- **Smooth Scrolling**: Enhanced navigation experience
- **Animated Elements**: Subtle animations to improve user engagement
- **Social Media Integration**: Connect with professional profiles across platforms

## Technologies Used

- HTML5
- CSS3 (with modern features like Flexbox, Grid, and CSS animations)
- JavaScript (vanilla JS with no dependencies)
- Font Awesome for icons
- Google Fonts for typography

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── scripts.js          # JavaScript functionality
├── README.md           # Project documentation
└── .github/            # GitHub configurations
    └── workflows/      
        └── static.yml  # GitHub Pages deployment workflow
```

## Setup and Deployment

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Open the project in your code editor

3. Preview locally:
   - Open `index.html` in your browser, or
   - Use a local development server like Live Server for VS Code

### GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch:

1. Make sure your repository is configured for GitHub Pages in Settings > Pages
2. The GitHub Action workflow will handle the deployment process
3. Your site will be available at `https://yourusername.github.io/portfolio-website/`

## Customization

### Adding Portfolio Items

To add new portfolio items, modify the HTML structure in the portfolio section:

```html
<div class="portfolio-item">
    <img src="path/to/your/image.jpg" alt="Project Description" class="portfolio-image">
    <div class="portfolio-overlay">
        <h3 class="portfolio-title">Project Title</h3>
        <p>Project description goes here</p>
    </div>
</div>
```

### Updating Contact Information

Update your contact information in the contact section of `index.html`:

```html
<div class="contact-info">
    <div class="contact-item">
        <div class="contact-icon">
            <i class="fas fa-envelope"></i>
        </div>
        <div>
            <p>Email</p>
            <p><strong>your-email@example.com</strong></p>
        </div>
    </div>
    <!-- Additional contact methods -->
</div>
```

### Changing Colors and Theme

The main color scheme can be modified in the CSS file. Look for the following CSS variables or gradient definitions:

```css
/* Header background */
background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);

/* Accent colors */
background: linear-gradient(90deg, #e63946, #1d3557);
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

- Dark/Light mode toggle
- Project filtering by category
- Blog section for sharing industry insights
- Testimonials carousel
- Language localization

## License

© 2025 Md Rasel Ahmed Redoy. All rights reserved.

## Credits

- Fonts: Google Fonts (Montserrat)
- Icons: Font Awesome
- Placeholder Images: Used during development

---

Made with ❤️ by Md Rasel Ahmed Redoy

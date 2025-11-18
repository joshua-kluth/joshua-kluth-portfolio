# Engineering Portfolio Website

A fully responsive, accessible portfolio website designed for engineering students, built with plain HTML5, CSS, and vanilla JavaScript.

## 📁 File Structure

```
/
├── index.html              # Landing page with hero and quick links
├── about.html              # About me page with timeline
├── projects.html           # Projects overview with filtering
├── project-template.html   # Reusable single project page template
├── skills.html             # Skills and expertise showcase
├── resume.html             # Resume download and summary
├── contact.html            # Contact information and form
├── css/
│   └── styles.css         # Complete stylesheet with CSS variables
├── js/
│   └── main.js            # Interactive functionality
└── assets/
    ├── images/            # Store your images here
    └── pdfs/              # Store your resume and other PDFs here
```

## 🚀 Quick Start

1. **Replace Placeholder Content:**
   - Search for "Your Name Here" and replace with your actual name
   - Update email, phone, and location in contact.html
   - Replace LinkedIn/GitHub URLs throughout the site

2. **Add Your Images:**
   - Place images in `assets/images/`
   - Update image placeholders in HTML files with actual image paths
   - Recommended: use descriptive filenames like `profile-photo.jpg`, `project-drone.jpg`

3. **Upload Your Resume:**
   - Save your resume as PDF in `assets/pdfs/YourName_Resume.pdf`
   - Update the download link in resume.html

4. **Customize Colors:**
   - Open `css/styles.css`
   - Edit CSS variables at the top of the file:
     ```css
     --accent-primary: #2563eb;    /* Change to your preferred color */
     --accent-secondary: #3b82f6;  /* Lighter version */
     --accent-hover: #1d4ed8;      /* Darker version for hover */
     ```

## 🎨 Customization Guide

### Adding Projects

1. In `projects.html`, duplicate a `.project-card` element
2. Update the content:
   - Change `data-category` to "personal", "university", or "other"
   - Update title, description, tags, and image
   - Update the link to point to a new project page

3. Create a new project page:
   - Copy `project-template.html`
   - Rename it (e.g., `project-drone.html`)
   - Fill in all sections with your project details

### Updating Timeline

In `about.html`, find the `.timeline` section and:
- Duplicate `.timeline-item` elements
- Update dates, titles, and descriptions
- Add or remove items as needed

### Modifying Skills

In `skills.html`:
- Edit skill cards in the "Technical Domains" section
- Add/remove chips in the "Tools & Software" section
- Update certifications in the bottom section

### Customizing Navigation

To add/remove pages:
1. Update all nav menus (present in every HTML file)
2. Ensure the same structure across all pages
3. Update the active link highlighting in `main.js`

## 🌐 Deploying to GitHub Pages

1. **Create a GitHub repository**
   - Name it: `yourusername.github.io` for a user site, or any name for a project site

2. **Upload all files**
   - Keep the same folder structure
   - Include the assets folder with all images and PDFs

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select the main branch
   - Save and wait a few minutes

4. **Your site will be live at:**
   - User site: `https://yourusername.github.io`
   - Project site: `https://yourusername.github.io/repository-name`

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **Desktop**: 992px and above
- **Tablet**: 768px - 991px
- **Mobile**: Below 768px

All layouts automatically adapt to screen size.

## ♿ Accessibility Features

- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Alt text placeholders for all images
- Focus states on all interactive elements

## 🔧 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Content Checklist

Before going live, make sure to:

- [ ] Replace "Your Name Here" everywhere
- [ ] Update all contact information
- [ ] Add real project content (6 projects in projects.html)
- [ ] Upload resume PDF and update link
- [ ] Add profile photo
- [ ] Add project images/diagrams
- [ ] Update social media links
- [ ] Customize accent colors
- [ ] Update timeline with real dates
- [ ] Review all placeholder text
- [ ] Test contact form (set up backend or use Formspree)
- [ ] Test on mobile devices
- [ ] Validate HTML (validator.w3.org)
- [ ] Check all links work

## 🎯 Features

- **Mobile-friendly hamburger menu**
- **Project filtering by category**
- **Smooth scroll animations**
- **Scroll-to-top button**
- **Professional typography and spacing**
- **Optimized for performance**
- **Print-friendly resume page**

## 📧 Contact Form Setup

The contact form needs a backend to work. Options:

1. **Formspree** (Easiest):
   - Sign up at formspree.io
   - Get your form endpoint
   - Update form action in contact.html

2. **Netlify Forms**:
   - Deploy to Netlify
   - Add `netlify` attribute to form
   - Forms will work automatically

3. **Custom Backend**:
   - Set up your own server
   - Use Node.js, PHP, or Python
   - Update form action URL

## 🛠️ Maintenance Tips

- Keep your resume PDF up to date
- Add new projects regularly
- Update skills as you learn new tools
- Refresh project images with better photos
- Check for broken links periodically
- Update your availability status

## 📝 License

This template is free to use for your personal portfolio. Feel free to modify it as needed!

## 💡 Tips for Success

1. **Keep it updated**: Treat your portfolio as a living document
2. **Quality over quantity**: Better to have 4 excellent projects than 10 mediocre ones
3. **Show your process**: Employers want to see how you think and work
4. **Be specific**: Use numbers and metrics where possible
5. **Proofread**: Typos matter in engineering documentation

---

Good luck with your job search! 🚀

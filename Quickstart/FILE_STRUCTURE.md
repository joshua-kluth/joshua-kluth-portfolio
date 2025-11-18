# Engineering Portfolio - Complete File Structure

## 📂 Directory Tree

```
engineering-portfolio/
│
├── index.html                    # Home/Landing page
├── about.html                    # About Me page with timeline
├── projects.html                 # Projects overview with filtering
├── project-template.html         # Single project detail page (reusable template)
├── skills.html                   # Skills and expertise showcase
├── resume.html                   # Resume downloads and summary
├── contact.html                  # Contact information and form
├── README.md                     # Setup and customization instructions
│
├── css/
│   └── styles.css               # Complete stylesheet (all styling in one file)
│
├── js/
│   └── main.js                  # Interactive functionality (menu, filtering, animations)
│
└── assets/
    ├── images/                  # Store your images here
    │   └── (add your images)    # Profile photos, project images, diagrams, etc.
    │
    └── pdfs/                    # Store downloadable documents here
        └── (add your PDFs)      # Resume, portfolio PDF, transcripts, etc.
```

## 📄 Page Overview

### index.html (Landing Page)
- Hero section with name, title, and CTA
- Quick link cards to main sections
- Modern, striking first impression

### about.html (About Me)
- Profile photo and introduction
- Visual timeline of education/career
- "Beyond Engineering" personality section
- Humanizes your technical profile

### projects.html (Projects Overview)
- Filterable project grid (Personal/University/Other)
- Project cards with tags and categories
- Easy navigation to detailed project pages
- Showcase your best work at a glance

### project-template.html (Single Project)
- Detailed project breakdown template
- Sections: Overview, Problem, Approach, Technical Details, Results
- Image gallery support
- Reflection and learnings
- Copy this file for each project

### skills.html (Skills & Expertise)
- Technical domains organized by category
- Tools and software with chip-style tags
- Professional/soft skills
- Certifications section
- Comprehensive view of capabilities

### resume.html (Resume & Downloads)
- PDF preview area
- Download button for resume
- Additional documents section
- Quick summary cards
- Call-to-action for contact

### contact.html (Get in Touch)
- Contact methods (email, phone, location)
- Social media links (LinkedIn, GitHub, etc.)
- Contact form (requires backend setup)
- FAQ section
- Availability status

## 🎨 CSS Structure (styles.css)

The stylesheet is organized into clear sections:

1. **CSS Variables** - Easy color/spacing customization
2. **Reset & Base Styles** - Consistent foundation
3. **Layout Utilities** - Container and spacing
4. **Typography** - Headings and text styles
5. **Navigation** - Header, menu, mobile hamburger
6. **Hero Section** - Landing page hero
7. **Buttons** - CTA and action buttons
8. **Components** - Cards, timelines, galleries, etc.
9. **Page-Specific Styles** - Each page's unique elements
10. **Animations** - Fade-in, reveal-on-scroll
11. **Responsive Design** - Mobile, tablet, desktop breakpoints

## 🔧 JavaScript Features (main.js)

- **Mobile Menu Toggle** - Hamburger menu functionality
- **Project Filtering** - Filter projects by category
- **Scroll Reveal** - Animate elements on scroll
- **Smooth Scrolling** - Smooth anchor link scrolling
- **Form Validation** - Basic client-side validation
- **Active Nav Highlighting** - Current page indication
- **Scroll-to-Top Button** - Quick navigation to top
- **Performance Optimized** - Debounced scroll events

## 🖼️ Assets Organization

### images/ directory:
Place your images with descriptive names:
- `profile-photo.jpg` - Your headshot for About page
- `hero-image.jpg` - Main landing page image
- `project-drone-1.jpg` - Project photos
- `project-drone-diagram.png` - Technical diagrams
- `project-pcb-render.png` - CAD renders
- etc.

### pdfs/ directory:
Place your documents:
- `YourName_Resume.pdf` - Your resume/CV
- `YourName_Portfolio.pdf` - Extended portfolio
- `YourName_Transcript.pdf` - Academic transcript
- etc.

## 🎯 Key Features

### Fully Responsive
- Desktop: Full layout with all features
- Tablet: Adjusted grid layouts
- Mobile: Hamburger menu, single-column layout

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Good color contrast

### Performance
- Minimal dependencies (no frameworks)
- Optimized animations
- Fast loading times
- Works on GitHub Pages

### Customization
- CSS variables for easy theming
- Modular structure
- Well-commented code
- Easy to extend

## 📋 Customization Priority

Start with these files in order:

1. **All HTML files** - Replace "Your Name Here" and placeholder content
2. **contact.html** - Update email, phone, social links
3. **styles.css** - Change accent colors in CSS variables
4. **projects.html** - Add your actual projects
5. **project-template.html** - Create copies for each project
6. **about.html** - Update timeline and personal info
7. **skills.html** - Customize skills and tools
8. **resume.html** - Add your resume PDF
9. **assets/** - Add your images and documents

## 🚀 Deployment Notes

### For GitHub Pages:
1. Upload entire `engineering-portfolio/` folder to repository
2. Keep the exact folder structure
3. Enable GitHub Pages in repository settings
4. Site will be live at: `yourusername.github.io/repository-name`

### File Paths:
- All paths are relative (works anywhere)
- Images: `assets/images/filename.jpg`
- PDFs: `assets/pdfs/filename.pdf`
- CSS: `css/styles.css`
- JS: `js/main.js`

## 📱 Testing Checklist

Before deploying:
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Test project filtering
- [ ] Test hamburger menu
- [ ] Verify all images load
- [ ] Check PDF downloads work
- [ ] Validate HTML at validator.w3.org
- [ ] Test contact form (if backend set up)
- [ ] Check for typos/spelling

## 💡 Tips

- Start by customizing one page at a time
- Keep backup copies before major changes
- Use browser dev tools to test responsive design
- Test in multiple browsers
- Get feedback from peers before making public
- Update regularly with new projects

---

Ready to customize your portfolio! 🎨

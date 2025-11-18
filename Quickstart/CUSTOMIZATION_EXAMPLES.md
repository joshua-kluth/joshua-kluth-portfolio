# Customization Examples

This file contains copy-paste ready code snippets for common customizations.

---

## 🎨 Color Schemes

Replace the CSS variables in `css/styles.css` (lines 1-10) with these ready-made color schemes:

### Professional Blue (Default)
```css
--accent-primary: #2563eb;
--accent-secondary: #3b82f6;
--accent-hover: #1d4ed8;
```

### Tech Green
```css
--accent-primary: #10b981;
--accent-secondary: #34d399;
--accent-hover: #059669;
```

### Creative Purple
```css
--accent-primary: #8b5cf6;
--accent-secondary: #a78bfa;
--accent-hover: #7c3aed;
```

### Engineering Orange
```css
--accent-primary: #f59e0b;
--accent-secondary: #fbbf24;
--accent-hover: #d97706;
```

### Aerospace Teal
```css
--accent-primary: #14b8a6;
--accent-secondary: #2dd4bf;
--accent-hover: #0d9488;
```

### Modern Red
```css
--accent-primary: #ef4444;
--accent-secondary: #f87171;
--accent-hover: #dc2626;
```

---

## 📸 Adding Real Images

### Profile Photo (about.html)
Replace line ~41 with:
```html
<div class="profile-image reveal-on-scroll">
    <img src="assets/images/profile-photo.jpg" alt="Your Name profile photo" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
</div>
```

### Hero Image (index.html)
Replace line ~35 with:
```html
<div class="hero-image fade-in">
    <img src="assets/images/hero-workspace.jpg" alt="Engineering workspace" style="width: 100%; border-radius: 12px;">
</div>
```

### Project Thumbnail (projects.html)
Replace placeholder in each project card with:
```html
<div class="project-thumbnail">
    <img src="assets/images/project-drone.jpg" alt="Autonomous drone project" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

---

## 📝 Adding a New Project Card

Copy this code and add to `projects.html` in the `.projects-grid`:

```html
<article class="project-card" data-category="personal">
    <div class="project-thumbnail">
        <img src="assets/images/project-name.jpg" alt="Project description">
    </div>
    <div class="project-content">
        <span class="project-category">Personal</span>
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Brief 1-2 sentence description of what this project does and why it matters.</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
            <span class="tag">Tag3</span>
            <span class="tag">Tag4</span>
        </div>
        <a href="project-yourproject.html" class="project-link">View Project →</a>
    </div>
</article>
```

**Remember to:**
- Change `data-category` to: "personal", "university", or "other"
- Update image path and alt text
- Write compelling title and description
- Add relevant tags
- Create the linked project detail page

---

## 🎯 Adding Timeline Events

Add this to the `.timeline` section in `about.html`:

```html
<div class="timeline-item reveal-on-scroll">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-date">2024</span>
        <h3>Your Achievement or Event</h3>
        <p>Description of what happened, what you learned, or what you accomplished during this time.</p>
    </div>
</div>
```

---

## 🛠️ Adding New Skills

### Technical Skill Card (skills.html)
Add to `.skills-grid`:

```html
<div class="skill-card reveal-on-scroll">
    <div class="skill-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <!-- Add your icon path here or use a simple shape -->
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
    </div>
    <h3>Your Skill Area</h3>
    <p>Brief description of your capability in this area and what you can do with it.</p>
</div>
```

### Skill Chips
Add to any `.skill-chips` container:

```html
<span class="chip">New Tool</span>
<span class="chip">New Technology</span>
<span class="chip">New Software</span>
```

---

## 📄 Adding Documents

### New Document Card (resume.html)
Add to `.documents-grid`:

```html
<div class="document-card reveal-on-scroll">
    <div class="doc-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
    </div>
    <h3>Document Title</h3>
    <p>Brief description of what this document contains.</p>
    <a href="assets/pdfs/your-document.pdf" class="doc-link" download>Download Document</a>
</div>
```

---

## 🔗 Social Media Links

### Adding a New Social Link (contact.html)
Add to `.social-links-grid`:

```html
<a href="https://yourplatform.com/profile" target="_blank" rel="noopener noreferrer" class="social-link">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <!-- Add platform icon SVG path here -->
        <circle cx="12" cy="12" r="10"></circle>
    </svg>
    <span>Platform Name</span>
</a>
```

**Popular platforms:**
- LinkedIn (already included)
- GitHub (already included)
- Twitter/X
- Medium
- Personal website
- Stack Overflow
- YouTube (if you have tech videos)

---

## 📧 Contact Form Backend Setup

### Option 1: Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Get your form endpoint
4. In `contact.html`, update line ~138:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms

If deploying to Netlify, just add this attribute to your form tag:

```html
<form class="contact-form" name="contact" netlify>
```

---

## 🎨 Custom Sections

### Adding a Featured Project Section (index.html)
Add after the Quick Links section:

```html
<section class="featured-project">
    <div class="container">
        <h2 class="section-title">Featured Project</h2>
        <div class="featured-content">
            <div class="featured-image">
                <img src="assets/images/featured-project.jpg" alt="Featured project">
            </div>
            <div class="featured-text">
                <h3>Project Title</h3>
                <p>Detailed description of your best or most recent project. This is your chance to highlight something impressive.</p>
                <a href="project-yourproject.html" class="cta-button">Learn More</a>
            </div>
        </div>
    </div>
</section>
```

Then add this CSS to `styles.css`:

```css
.featured-project {
    padding: var(--spacing-2xl) 0;
    background-color: var(--color-bg-alt);
}

.featured-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
}

.featured-image img {
    width: 100%;
    border-radius: var(--radius-lg);
    box-shadow: 0 10px 30px var(--color-shadow);
}

@media (max-width: 768px) {
    .featured-content {
        grid-template-columns: 1fr;
    }
}
```

---

## 📊 Adding Statistics/Metrics

### Stats Section (any page)
Add this section:

```html
<section class="stats-section">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item reveal-on-scroll">
                <div class="stat-number">15+</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item reveal-on-scroll">
                <div class="stat-number">3.8</div>
                <div class="stat-label">GPA</div>
            </div>
            <div class="stat-item reveal-on-scroll">
                <div class="stat-number">5+</div>
                <div class="stat-label">Programming Languages</div>
            </div>
            <div class="stat-item reveal-on-scroll">
                <div class="stat-number">10+</div>
                <div class="stat-label">Tools & Technologies</div>
            </div>
        </div>
    </div>
</section>
```

Add this CSS:

```css
.stats-section {
    padding: var(--spacing-2xl) 0;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
}

.stat-item {
    text-align: center;
    padding: var(--spacing-lg);
}

.stat-number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
}

.stat-label {
    font-size: 1.125rem;
    opacity: 0.9;
}
```

---

## 🏆 Adding Certifications Display

### Certification Badge Style (skills.html)
Replace the existing certifications section with:

```html
<section class="skills-section bg-light">
    <div class="container">
        <h2 class="section-title reveal-on-scroll">Certifications</h2>
        <div class="cert-badges">
            <div class="cert-badge reveal-on-scroll">
                <div class="badge-icon">🏆</div>
                <h3>Certification Name</h3>
                <p>Issuing Organization</p>
                <span class="cert-date">2024</span>
            </div>
            <!-- Add more badges -->
        </div>
    </div>
</section>
```

Add this CSS:

```css
.cert-badges {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--spacing-md);
}

.cert-badge {
    padding: var(--spacing-lg);
    background: white;
    border-radius: var(--radius-lg);
    text-align: center;
    border: 2px solid var(--accent-primary);
    transition: transform var(--transition-base);
}

.cert-badge:hover {
    transform: translateY(-5px);
}

.badge-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-sm);
}

.cert-badge h3 {
    color: var(--accent-primary);
    margin-bottom: var(--spacing-xs);
}

.cert-date {
    display: inline-block;
    margin-top: var(--spacing-sm);
    padding: 0.25rem 0.75rem;
    background-color: var(--color-bg-alt);
    border-radius: 50px;
    font-size: 0.875rem;
    color: var(--color-text-light);
}
```

---

## 💡 Quick Tips for Customization

1. **Always test after changes** - Open the HTML file in your browser
2. **Make backups** - Copy files before major changes
3. **Use browser dev tools** - Right-click → Inspect to experiment with CSS
4. **Validate your HTML** - Use validator.w3.org to check for errors
5. **Keep it consistent** - Use the same style across all pages
6. **Less is more** - Don't overcrowd with too much information

---

## 🆘 Need More Help?

- Check README.md for detailed documentation
- Review FILE_STRUCTURE.md for understanding file organization
- Follow QUICK_START.md for step-by-step setup
- Look at existing code for patterns to follow

---

Happy customizing! 🚀

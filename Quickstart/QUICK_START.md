# Quick Start Guide - Engineering Portfolio

## ⚡ Get Your Portfolio Live in 30 Minutes

Follow these steps to customize and deploy your portfolio website.

---

## Step 1: Download and Extract (2 minutes)

1. Download the `engineering-portfolio` folder
2. Extract all files to your computer
3. Open the folder in your preferred code editor (VS Code, Sublime, etc.)

---

## Step 2: Replace Your Name (5 minutes)

**Find and Replace** "Your Name Here" with your actual name:

1. In your code editor, use Find & Replace (Ctrl+H or Cmd+H)
2. Find: `Your Name Here`
3. Replace with: `Your Actual Name`
4. Replace in **all files**

---

## Step 3: Update Contact Information (5 minutes)

### In `contact.html`:

**Email** (Line ~66):
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
```
Change to your real email.

**Phone** (Line ~80):
```html
<a href="tel:+1234567890">+1 (234) 567-8900</a>
```
Change to your real phone number.

**Location** (Line ~94):
```html
<p>City Name, State/Province</p>
<p>Country</p>
```
Change to your location.

**Social Links** (Lines ~110-140):
- Update LinkedIn URL
- Update GitHub URL
- Update any other social profiles

---

## Step 4: Customize Colors (3 minutes)

### In `css/styles.css` (Lines 1-10):

```css
:root {
    --accent-primary: #2563eb;    /* Change this to your preferred color */
    --accent-secondary: #3b82f6;  /* Lighter shade */
    --accent-hover: #1d4ed8;      /* Darker shade */
}
```

**Popular color schemes:**
- Blue (default): `#2563eb`
- Green: `#10b981`
- Purple: `#8b5cf6`
- Orange: `#f59e0b`
- Red: `#ef4444`
- Teal: `#14b8a6`

Use a color picker tool to find the perfect shade!

---

## Step 5: Add Your Resume (3 minutes)

1. Save your resume as a PDF
2. Name it: `YourName_Resume.pdf`
3. Place it in: `assets/pdfs/`
4. The download link in `resume.html` will work automatically

---

## Step 6: Add Your Profile Photo (3 minutes)

1. Prepare a professional headshot (square format works best)
2. Save as: `profile-photo.jpg`
3. Place in: `assets/images/`
4. In `about.html`, find line ~41 (the placeholder image div)
5. Replace it with:
```html
<img src="assets/images/profile-photo.jpg" alt="Your Name profile photo" class="placeholder-image-square">
```

---

## Step 7: Customize Timeline (5 minutes)

### In `about.html` (Timeline section):

Each timeline item looks like this:
```html
<div class="timeline-item reveal-on-scroll">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-date">2020</span>
        <h3>Started Systems Engineering Degree</h3>
        <p>Description here...</p>
    </div>
</div>
```

1. Update dates to your actual dates
2. Change titles to your milestones
3. Write real descriptions
4. Add or remove items as needed (just copy/paste the structure)

---

## Step 8: Add Real Projects (10 minutes for now)

### Quick Version - Update Existing Projects:

In `projects.html`, for each project card:

1. Change the title: `<h3 class="project-title">Your Project Name</h3>`
2. Change description: `<p class="project-description">Your description...</p>`
3. Update tags: `<span class="tag">Your Tag</span>`
4. Change category: `data-category="personal"` (or "university" or "other")

### Later - Add Project Details:

1. Copy `project-template.html`
2. Rename it (e.g., `project-autonomous-drone.html`)
3. Fill in all sections with your project details
4. Update the link in `projects.html` to point to your new page

---

## Step 9: Test Locally (2 minutes)

1. Open `index.html` in your web browser
2. Click through all pages
3. Test the hamburger menu on mobile (resize browser)
4. Test project filtering
5. Check all links work

**Common issues:**
- If CSS doesn't load: check file paths are correct
- If images don't show: check they're in `assets/images/`
- If links are broken: check file names match exactly

---

## Step 10: Deploy to GitHub Pages (5 minutes)

### Create Repository:

1. Go to github.com and sign in
2. Click "New Repository"
3. Name it: `yourusername.github.io` (or any name for project site)
4. Make it public
5. Don't initialize with README (we have our own)

### Upload Files:

**Option A - GitHub Desktop (Easier):**
1. Install GitHub Desktop
2. Clone your new repository
3. Copy all portfolio files into the cloned folder
4. Commit and push

**Option B - Command Line:**
```bash
cd path/to/engineering-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

### Enable GitHub Pages:

1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes for deployment

### Your site will be live at:
- User site: `https://yourusername.github.io`
- Project site: `https://yourusername.github.io/repository-name`

---

## ✅ Checklist Before Going Live

- [ ] All instances of "Your Name Here" replaced
- [ ] Real email, phone, location added
- [ ] Social media links updated
- [ ] Accent colors customized (if desired)
- [ ] Resume PDF uploaded and linked
- [ ] Profile photo added
- [ ] Timeline updated with real information
- [ ] At least 3-4 project cards updated
- [ ] Tested on desktop browser
- [ ] Tested mobile menu
- [ ] All links work
- [ ] No spelling errors

---

## 🎯 What to Do Next

After your site is live, continue improving:

1. **Add detailed project pages** - Copy `project-template.html` for each project
2. **Add project images** - Screenshots, diagrams, renders
3. **Update skills** - Add tools you've learned
4. **Write better descriptions** - Take time to craft compelling project stories
5. **Get feedback** - Share with friends, professors, mentors
6. **Keep it updated** - Add new projects, update resume regularly

---

## 🆘 Common Issues & Solutions

### Issue: CSS not loading
**Solution:** Check that `css/styles.css` path is correct. File names are case-sensitive!

### Issue: Images not showing
**Solution:** 
- Make sure images are in `assets/images/`
- Check file extension matches (`.jpg` vs `.jpeg` vs `.png`)
- Use lowercase for consistency

### Issue: GitHub Pages shows 404
**Solution:**
- Wait 5-10 minutes after enabling Pages
- Check repository is public
- Verify files are in root of repository

### Issue: Mobile menu not working
**Solution:**
- Check that `js/main.js` is linked correctly
- Open browser console (F12) to check for JavaScript errors

### Issue: Project filtering not working
**Solution:**
- Verify each project card has `data-category` attribute
- Check console for JavaScript errors
- Make sure `main.js` is loaded

---

## 💡 Pro Tips

1. **Start simple** - Get the basics right before adding complexity
2. **One page at a time** - Don't try to perfect everything at once
3. **Mobile first** - Test on mobile frequently
4. **Real content > Perfect design** - Focus on showcasing your work
5. **Get feedback early** - Share draft with trusted peers
6. **Update regularly** - Keep adding projects and refining content

---

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [W3C HTML Validator](https://validator.w3.org/)
- [Color Picker Tool](https://htmlcolorcodes.com/)
- [Placeholder Images](https://placeholder.com/) - While you work on real images
- [Formspree](https://formspree.io/) - Free contact form backend

---

## 🚀 You're Ready!

Follow these steps and you'll have a professional portfolio live in under an hour.

**Questions?** Check the detailed README.md or FILE_STRUCTURE.md for more information.

**Good luck with your job search!** 🎉

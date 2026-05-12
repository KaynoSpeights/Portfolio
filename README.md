# 🌿 Portfolio Website

A modern, fully-featured portfolio website built with HTML, CSS, and vanilla JavaScript. Designed for Computer Science students with beautiful animations, dark/light mode toggle, and responsiveness.

## ✨ Features

- **Modern Design** - Clean, professional layout with forest green accent color
- **Dark/Light Mode** - Toggle between dark and light themes with persistent storage
- **Smooth Animations** - Apple-style scroll animations and transitions throughout
- **Mobile Responsive** - Perfect display on all devices (mobile, tablet, desktop)
- **No Build Tools Required** - Pure HTML, CSS, and JavaScript (GitHub Pages ready)
- **7 Pages**:
  - Home (hero section with featured projects)
  - About (bio and personality)
  - Skills (categorized technical and soft skills)
  - Education (timeline of academic background)
  - Projects (3 major projects showcase)
  - Resume (upload and display your resume)
  - Contact (contact form and information)

## 📂 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About/Bio page
├── skills.html             # Skills showcase
├── education.html          # Education timeline
├── projects.html           # Projects showcase
├── resume.html             # Resume upload & display
├── contact.html            # Contact page
├── css/
│   └── styles.css          # All styles (includes dark mode CSS variables)
├── js/
│   └── script.js           # Animations, interactions, and utilities
└── assets/
    ├── images/             # Your project images
    └── documents/          # PDF resume or documents
```

## 🚀 Getting Started

### 1. Clone or Download
```bash
# Save this folder to your computer
# No dependencies needed!
```

### 2. Customize Content
Edit each HTML file and replace the placeholder text:
- Update your name in the logo and pages
- Add your contact information (email, phone, social links)
- Fill in your actual project descriptions
- Update your skills and education

### 3. Deploy to GitHub Pages

**Step 1:** Create a GitHub repository
```bash
# Create a new repository on GitHub named: username.github.io
# Or any repository and enable GitHub Pages in settings
```

**Step 2:** Push your code
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

**Step 3:** Access your portfolio
- Visit `https://username.github.io` (if repo is named `username.github.io`)
- Or visit your custom domain if configured

## 🎨 Customization

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --accent: #2d5016;           /* Forest Green - Main color */
  --accent-light: #3d6b1f;     /* Lighter shade */
  --accent-hover: #1f3610;     /* Darker shade for hovering */
}
```

### Add Your Projects
1. Open `projects.html`
2. Replace project titles and descriptions
3. Add project images to `assets/images/`
4. Update GitHub links
5. Repeat for each project

### Upload Resume
1. Open `resume.html`
2. Click the upload area or use the button
3. Select your resume (PDF, JPG, or PNG)
4. Your resume will be saved locally in the browser

### Update Contact Info
1. Open `contact.html`
2. Replace placeholder email, phone, and social links
3. The contact form saves messages to browser storage (requires backend for email)

## 📱 Responsive Breakpoints

- **Mobile:** 480px and below
- **Tablet:** 768px and below
- **Desktop:** 1200px and above

The site automatically adapts to all screen sizes!

## 🎯 Key Features Explained

### Dark/Light Mode
- Toggle button in navigation bar
- Preference saves to browser storage
- Smooth transitions between modes

### Scroll Animations
- Elements fade in as you scroll using Intersection Observer
- Staggered animations for lists
- Parallax effect where applicable

### Navigation
- Active link highlighting (shows which page you're on)
- Mobile hamburger menu for small screens
- Smooth scroll to page sections

### Forms
- Contact form with validation
- Messages saved to browser storage
- Resume upload with PDF preview support

## 🔧 Customization Tips

### Change Fonts
Edit the `--font-sans` variable in `css/styles.css`
```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

### Adjust Spacing
Modify spacing variables:
```css
--spacing-sm: 1rem;      /* Small */
--spacing-md: 1.5rem;    /* Medium */
--spacing-lg: 2rem;      /* Large */
```

### Add More Sections
1. Create a new HTML file
2. Copy the structure from an existing page
3. Update the navigation links on all pages to include the new page
4. Add content

## 📝 Content Guidelines

### Resume Section
- Upload a one-page resume (PDF recommended)
- Supported formats: PDF, JPG, PNG
- Maximum file size: 5MB

### Projects Section
- Use clear, descriptive titles
- Write 2-3 lines of description for each
- Include technology tags (Java, Python, etc.)
- Add links to GitHub repositories
- Consider adding screenshots or demo links

### Skills Section
- Organize skills by category
- List proficiency level (Beginner, Intermediate, Advanced)
- Include soft skills alongside technical skills

## 🌟 Best Practices

1. **Keep it Updated**
   - Regularly update projects as you complete them
   - Keep resume current
   - Update skills as you learn new technologies

2. **SEO Optimization** (Optional)
   - Add meta descriptions to each page
   - Use semantic HTML (already done!)
   - Include keywords in content

3. **Performance**
   - Compress images before uploading
   - Keep code clean and organized
   - Use lazy loading for images (already implemented)

4. **Accessibility**
   - High contrast text
   - Semantic HTML structure
   - Keyboard navigation support

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct
- File names should match exactly (case-sensitive)
- Place images in `assets/images/` folder

### Resume Not Uploading
- Check file size (max 5MB)
- Supported formats: PDF, JPG, PNG
- Try refreshing the page

### Dark Mode Not Working
- Check browser console for errors
- Ensure localStorage is enabled
- Try clearing cache

### Navigation Not Working
- Ensure all HTML files are in the root portfolio folder
- Check file names match navigation links

## 📞 Support & Next Steps

1. **Update Placeholder Content**
   - Search for "Replace this" or "Add your" throughout HTML files
   - Replace with your actual information

2. **Add Your Information**
   - Email: Update `your.email@example.com`
   - Phone: Update phone number
   - Social Links: Add actual GitHub, LinkedIn, etc. URLs

3. **Customize Colors**
   - Adjust forest green shade if desired
   - Test on dark mode for contrast

4. **Deploy**
   - Push to GitHub
   - Access via GitHub Pages
   - Optionally configure custom domain

## 🎓 Learning Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub Pages Guide](https://pages.github.com/)

## 📄 License

This portfolio template is open source and free to use. Customize it for your own portfolio!

## 🚀 Next Steps

1. ✅ Download/clone the portfolio
2. ✅ Customize all HTML content with your information
3. ✅ Add your project images
4. ✅ Upload your resume
5. ✅ Update social media links
6. ✅ Deploy to GitHub Pages
7. ✅ Share your portfolio with recruiters!

---

**Happy building! 🌿**

For questions or issues, refer to the troubleshooting section above or check the HTML comments in each file for guidance.

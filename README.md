# Iris Xie Portfolio Website 

A minimalist, one-page portfolio website designed for recruiters and professional networking.

## Quick Start

### File Structure
```
portfolio-site/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── README.md           # This file
└── [Add your PDFs and images here]
```

## Customization Guide

### 1. Add Your Headshot
Replace the placeholder in the About section:
- Take a professional headshot photo
- Save it as `headshot.jpg` in the portfolio-site folder
- In `index.html`, find `<div class="headshot-placeholder">` (around line 50)
- Replace it with: `<img src="headshot.jpg" alt="Iris Xie" style="width: 100%; border-radius: 2px;">`

### 2. Add Your Portfolio PDFs
To add your brand guidelines, pitch decks, etc.:

1. Save your PDF files in the portfolio-site folder (e.g., `brand-guidelines.pdf`, `pitch-deck.pdf`)
2. In `index.html`, find the portfolio section (around line 91)
3. Update each portfolio item's `data-pdf` attribute:
   ```html
   <div class="portfolio-item" data-pdf="your-file-name.pdf">
   ```
4. Update the title and description for each project

### 3. Add Preview Images (Optional)
To show actual previews instead of placeholders:
1. Create preview images (PNG or JPG) of your work
2. Replace `<div class="preview-placeholder">` with:
   ```html
   <img src="preview-image.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
   ```

### 4. Update LinkedIn URL
In `index.html`, find the LinkedIn button (around line 136) and update:
```html
<a href="https://linkedin.com/in/YOUR-USERNAME" class="glass-button">LinkedIn</a>
```

### 5. Customize Colors
In `styles.css`, update the color variables at the top:
```css
:root {
    --bg-light: #f7f7f5;           /* Background color */
    --text-dark: #1a1816;          /* Main text */
    --accent-green: #00a896;       /* Pthalo green */
    --accent-pink: #ffb5a7;        /* Pale pink */
}
```

### 6. Change Fonts
The site uses:
- **Inter** for body text (sans-serif)
- **Cormorant** for the hero title (elegant serif, Dream Avenue alternative)

To use different fonts, update the Google Fonts link in `index.html` (line 9) and the CSS font-family properties.

## Deployment Options

### Option 1: GitHub Pages (Free, Recommended)

1. **Create a GitHub account** (if you don't have one): github.com
2. **Create a new repository**:
   - Name it: `your-username.github.io` (or any name)
   - Make it public
3. **Upload your files**:
   - Click "Upload files"
   - Drag and drop all files from portfolio-site folder
   - Commit changes
4. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Click Save
5. **Connect your domain**:
   - In Settings → Pages → Custom domain
   - Enter: `eilixirs.cc`
   - In your domain registrar, add these DNS records:
     ```
     Type: A
     Host: @
     Value: 185.199.108.153

     Type: A
     Host: @
     Value: 185.199.109.153

     Type: CNAME
     Host: www
     Value: your-username.github.io
     ```

### Option 2: Netlify (Free, Easier)

1. Go to netlify.com and sign up
2. Drag and drop your portfolio-site folder
3. Your site is live instantly!
4. To connect your domain:
   - Go to Domain settings
   - Add custom domain: `eilixirs.cc`
   - Follow DNS instructions

### Option 3: Vercel (Free, Fast)

1. Go to vercel.com and sign up
2. Import your folder or GitHub repo
3. Deploy with one click
4. Connect your domain in settings

## Testing Locally

To view your site locally before deploying:

1. **Simple method**: Just double-click `index.html` - it will open in your browser
2. **Better method** (for PDF viewer to work properly):
   - Install VS Code
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## Tips for Success

- **Keep PDFs small**: Compress large files to under 5MB each
- **Use high-quality images**: For headshot and previews
- **Test on mobile**: Make sure everything looks good on phone
- **Update regularly**: Add new projects as you create them
- **Get feedback**: Share with friends before sending to recruiters

## Troubleshooting

**PDF viewer not working?**
- Make sure PDF files are in the same folder as index.html
- Check that the `data-pdf` attribute matches your file name exactly
- Test using Live Server (not just opening the HTML file)

**Images not showing?**
- Verify image files are in the same folder
- Check file names match exactly (case-sensitive!)
- Make sure image paths in HTML are correct

**Site looks different on mobile?**
- The design is responsive and will adapt
- Test on your actual phone, not just browser resize

## Next Steps

1. Add your headshot photo
2. Upload your portfolio PDFs
3. Customize colors and content
4. Test everything locally
5. Deploy to GitHub Pages/Netlify
6. Connect your domain
7. Share with recruiters!

---

Built with HTML, CSS, and JavaScript. No frameworks needed. Easy to customize, fast to deploy.

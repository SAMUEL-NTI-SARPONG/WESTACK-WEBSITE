# Westack Engineering Ltd. - Official Website

## 🌐 Website Overview

Professional website for Westack Engineering Ltd., a multi-disciplinary engineering consultancy and maintenance company specializing in civil, electrical, mechanical, gas, and instrumentation services.

## 📁 File Structure

```
westack-website/
├── index.html              # Homepage
├── about.html              # About Us page
├── services.html           # Services overview
├── civil-engineering.html  # Civil Engineering service details
├── mechanical-pipeline.html # Mechanical & Pipeline service details
├── gas-power-electrical.html # Gas, Power & Electrical service details
├── contact.html            # Contact page
├── projects.html           # Portfolio/Projects page
├── css/                    # Stylesheets
│   ├── bootstrap.min.css
│   └── style.css
├── js/                     # JavaScript files
│   ├── jquery-3.6.3.min.js
│   ├── bootstrap.bundle.min.js
│   ├── main.js
│   └── main2.js
├── lib/                    # Third-party libraries
│   ├── animate/
│   ├── counterup/
│   ├── easing/
│   ├── flaticon/
│   ├── isotope/
│   ├── lightbox/
│   ├── owlcarousel/
│   ├── slick/
│   ├── waypoints/
│   └── wow/
├── img/                    # Images folder
│   └── (Add your images here)
└── mail/                   # Contact form handlers
    ├── contact.js
    └── jqBootstrapValidation.min.js
```

## 🚀 How to Deploy

### Option 1: Traditional Web Hosting

1. Upload all files to your web hosting account via FTP/cPanel
2. Ensure `index.html` is in the root directory
3. Point your domain to the hosting directory

### Option 2: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Netlify/Vercel (Free)

1. Drag and drop the `westack-website` folder to Netlify or Vercel
2. Your site goes live instantly with HTTPS
3. Automatic deployments on updates

## 📸 Adding Your Images

### 1. Company Logo

**Location:** `img/logo.png` or `img/logo.jpg`

In all HTML files, find and uncomment/update:

```html
<img src="img/logo.png" alt="Westack Engineering Ltd." />
```

### 2. Homepage Carousel/Slider Images

**Location:** `img/carousel-1.jpg`, `img/carousel-2.jpg`, `img/carousel-3.jpg`

**Recommended size:** 1920x1080px or 1600x900px

- Replace these three images with your own
- Keep the same file names or update in `index.html`

### 3. Service Images

**Location:**

- `img/service-1.jpg` (Civil Engineering)
- `img/service-2.jpg` (Mechanical & Pipeline)
- `img/service-3.jpg` (Gas, Power & Electrical)

**Recommended size:** 800x600px

- Replace with relevant service photos

### 4. About Page Image

**Location:** `img/about.jpg`

**Recommended size:** 600x800px

- Company building, team photo, or relevant image

### 5. Project/Portfolio Images

**Location:** `img/portfolio-1.jpg` through `img/portfolio-18.jpg`

**Recommended size:** 800x600px or 1200x900px

**To add projects:**

1. Add project images to the `img/` folder
2. Edit `projects.html`
3. Find the portfolio section and update image sources:

```html
<div class="col-lg-4 col-md-6 col-sm-12 portfolio-item">
  <div class="portfolio-warp">
    <div class="portfolio-img">
      <img src="img/your-project-image.jpg" alt="Project Description" />
    </div>
  </div>
</div>
```

### 6. Service Detail Page Images

**Location:** `img/civil/` folder for civil engineering project photos

You can organize by creating subfolders:

- `img/civil/` - Civil engineering projects
- `img/mechanical/` - Mechanical projects
- `img/electrical/` - Electrical projects

### 7. Favicon (Browser Tab Icon)

**Location:** `img/favicon.ico` or `img/favicon.png`

**Size:** 32x32px or 64x64px

Update in HTML files:

```html
<link href="img/favicon.ico" rel="icon" />
```

## 📝 Updating Content

### Contact Information

All contact info is already updated to:

- **Email:** westackghana@gmail.com
- **Phone:** +233 208 907 208
- **Address:** P.O. Box TD 686, Takoradi, Ghana

### Adding New Projects

1. Open `projects.html`
2. Copy one of the existing project blocks
3. Update the image source and description
4. Save and refresh

### Updating Services

Service details can be edited in:

- `civil-engineering.html`
- `mechanical-pipeline.html`
- `gas-power-electrical.html`

## 📧 Contact Form Setup

The contact form requires a backend to send emails. Options:

### Option 1: FormSpree (Easiest)

1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update form action in `contact.html`

### Option 2: Email Service Provider

Use services like:

- SendGrid
- Mailgun
- Your hosting provider's email service

Update `mail/contact.js` with your configuration.

## 🎨 Customization

### Colors

Edit `css/style.css` to change:

- Primary color
- Secondary color
- Text colors
- Background colors

### Fonts

Current font: Poppins (Google Fonts)
Change in HTML head section and `css/style.css`

## 📱 Responsive Design

The website is fully responsive and works on:

- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (320px+)

## 🔧 Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling
- **Bootstrap 4** - Responsive framework
- **JavaScript/jQuery** - Interactivity
- **Font Awesome** - Icons
- **Animate.css** - Animations
- **Owl Carousel** - Sliders
- **Lightbox** - Image galleries

## 📞 Support

For technical issues with the website, contact your web developer.

## ⚡ Quick Start Checklist

- [ ] Add company logo (`img/logo.png`)
- [ ] Replace carousel images (3 images)
- [ ] Add service images (3 images)
- [ ] Upload project photos to portfolio
- [ ] Update favicon
- [ ] Test contact form
- [ ] Review all pages for accuracy
- [ ] Deploy to web hosting

---

**Website Built:** February 2026
**Company:** Westack Engineering Ltd.
**Location:** Takoradi, Ghana

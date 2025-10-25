# Petroplast Landing Page - Technical Documentation

## Project Overview
A professional landing page for Petroplast, an Argentine company specialized in plastics, tubing, and construction services. The goal is to create a modern, clean, and professional web presence that serves as a gateway for potential clients to contact the company.

## Tech Stack Recommendation

### Frontend Framework
- **HTML5 + CSS3 + Vanilla JavaScript**
  - **Rationale**: Simple, lightweight, and easy to maintain
  - **Benefits**: Fast loading, no build process, easy to host anywhere
  - **Perfect for**: Small business landing pages with minimal complexity

### Alternative Options (if more interactivity needed)
- **Next.js** (React-based) - For more dynamic content
- **Astro** - Static site generator with modern features
- **Hugo** - Go-based static site generator (matches your Go expertise)

### CSS Framework
- **Tailwind CSS** (CDN version)
  - **Rationale**: Utility-first, rapid development, professional results
  - **Alternative**: Custom CSS with CSS Grid/Flexbox

### Additional Libraries
- **AOS (Animate On Scroll)** - For smooth scroll animations
- **Swiper.js** - For image galleries/project showcases
- **Formspree** - For contact form handling (no backend required)

## Design System & Style Guide

### Color Palette
- **Primary**: Industrial Blue (#1e40af) - Trust, professionalism
- **Secondary**: Steel Gray (#64748b) - Industrial, modern
- **Accent**: Orange (#f97316) - Energy, construction
- **Neutral**: White (#ffffff), Light Gray (#f8fafc), Dark Gray (#334155)

### Typography
- **Headings**: Inter or Roboto (Google Fonts)
- **Body**: System fonts (San Francisco, Segoe UI, etc.)
- **Sizes**: Responsive typography with clamp() for fluid scaling

### Visual Style
- **Layout**: Clean, grid-based, lots of white space
- **Images**: High-quality, professional photography
- **Icons**: Heroicons or Lucide (consistent, minimal style)
- **Shadows**: Subtle, modern box-shadows
- **Borders**: Rounded corners (8px-12px radius)

## Recommended Page Sections

### 1. Hero Section
- Company name and tagline
- Brief value proposition
- Call-to-action button (Contact Us)
- Hero image/video of industrial work

### 2. About Section
- Company description and history
- Key values and mission
- Team photos (optional)

### 3. Services Section
- **Plastics Manufacturing**
- **Tubing Solutions**
- **Construction Services**
- **Custom Projects**
- Each service with icon, title, and brief description

### 4. Projects/Portfolio Section
- Image gallery of completed projects
- Before/after photos
- Project descriptions and client testimonials

### 5. Why Choose Us Section
- Key differentiators
- Years of experience
- Quality certifications
- Local expertise

### 6. Contact Section
- Contact form (name, email, phone, message)
- Company address and phone
- Business hours
- Google Maps integration

### 7. Footer
- Company information
- Social media links
- Copyright notice

## Technical Architecture

```
petroplast-landing/
├── index.html              # Main page
├── css/
│   ├── styles.css         # Main stylesheet
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js           # Main JavaScript
│   └── animations.js     # Scroll animations
├── images/
│   ├── hero/             # Hero section images
│   ├── projects/         # Project gallery
│   └── icons/           # Icon assets
├── fonts/               # Local fonts (if needed)
└── README.md           # Project documentation
```

## Performance Considerations

### Optimization Strategies
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: For images and non-critical content
- **Minification**: CSS and JS minification
- **CDN**: Use CDN for external libraries
- **Caching**: Proper cache headers for static assets

### Loading Performance
- **Target**: < 3 seconds initial load
- **Images**: Responsive images with srcset
- **Critical CSS**: Inline critical styles
- **Fonts**: Preload Google Fonts

## SEO Considerations

### Technical SEO
- Semantic HTML5 structure
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Schema.org markup for local business
- XML sitemap
- Robots.txt

### Content SEO
- Location-based keywords (Argentina, local cities)
- Industry-specific terms (plastics, tubing, construction)
- Service-based content
- Local business optimization

## Hosting Recommendations

### Static Hosting Options
1. **Netlify** - Easy deployment, form handling, CDN
2. **Vercel** - Fast, global CDN, easy Git integration
3. **GitHub Pages** - Free, simple, Git-based
4. **Firebase Hosting** - Google's platform, reliable

### Domain Configuration
- SSL certificate (Let's Encrypt)
- Custom domain setup
- DNS configuration
- Redirects (www to non-www)

## Maintenance Considerations

### Content Management
- **Static approach**: Edit HTML/CSS directly
- **CMS option**: Strapi or Sanity for non-technical updates
- **Version control**: Git for all changes
- **Backup strategy**: Regular backups of content and assets

### Updates and Changes
- **Content updates**: Direct file editing
- **Design changes**: CSS modifications
- **New features**: JavaScript enhancements
- **Performance monitoring**: Google Analytics, PageSpeed Insights

## Development Workflow

### Local Development
1. **Setup**: Simple HTTP server (Python, Node.js, or Live Server)
2. **Testing**: Cross-browser testing (Chrome, Firefox, Safari)
3. **Responsive**: Mobile-first design approach
4. **Performance**: Lighthouse audits

### Deployment Process
1. **Build**: Minify and optimize assets
2. **Test**: Final testing on staging
3. **Deploy**: Push to hosting platform
4. **Monitor**: Performance and analytics tracking

## Security Considerations

### Basic Security
- **HTTPS**: SSL certificate required
- **Form protection**: CSRF tokens, rate limiting
- **Input validation**: Client and server-side validation
- **Content Security Policy**: Prevent XSS attacks

### Contact Form Security
- **Formspree**: Handles spam protection
- **Honeypot fields**: Hidden fields to catch bots
- **Rate limiting**: Prevent form spam
- **Email validation**: Proper email format checking

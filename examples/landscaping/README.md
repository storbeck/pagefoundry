# Green Valley Landscaping - PageFoundry Example

A professional landscaping and lawn care landing page designed for small businesses in Ormond Beach and Volusia County, Florida.

## Design Features

- **Hero Section**: Full-bleed background image with green gradient overlay effect that mimics grass/foliage blur
- **Color Palette**: Earth-tone greens (#2d5016, #4a7c23, #7d8c3a) with accent gold (#a4b352)
- **Typography**: Inter for body text, Playfair Display for headings
- **Interactive Elements**: Feature cards that open informational modals
- **Local Focus**: Addresses, phone numbers, and services tailored to Florida landscaping needs

## Quick Customization

### 1. Brand & Contact Information
Replace "Green Valley Landscaping" with your business name in:
- `<title>` tag
- Logo in navigation
- Footer information
- All headings and text references

Update contact details:
- Phone: `+1-386-555-0123` → your phone number
- Email: `owner@example.com` → your email
- Address: `123 Granada Boulevard, Ormond Beach, FL 32174` → your address

### 2. Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2d5016;     /* Dark forest green */
    --primary-light: #4a7c23;    /* Medium green */
    --secondary-color: #7d8c3a;  /* Olive green */
    --accent-color: #a4b352;     /* Light sage green */
}
```

### 3. Services & Pricing
Update the services grid section with your specific offerings:
- Lawn Care & Maintenance
- Tree & Shrub Care  
- Landscape Design
- Irrigation Systems
- Hardscaping
- Seasonal Plantings

### 4. Images
Replace images in `/assets/` folder:
- `hero.jpg` - Main background image (house with landscaping)
- `landscape_entryway.jpg` - Project example
- `grass_and_mower_closeup.jpg` - Lawn maintenance example
- `gardening_tools.jpg` - Professional equipment

Recommended image sizes:
- Hero: 1920x1080px or larger
- Gallery items: 1200x800px
- Keep file sizes under 500KB for performance

### 5. Content Sections

**Hero Message**: Update the main headline and subtitle to reflect your unique value proposition.

**Services**: Customize the 6 service tiles with your specific offerings and descriptions.

**Testimonials**: Replace with real client testimonials (remove placeholders).

**Results**: Update statistics with your actual business metrics.

## SEO Optimization

### Meta Tags
Update the title and description in the `<head>`:
```html
<title>Your Business Name - Landscaping Services in Your City, FL</title>
<meta name="description" content="Your unique description with location and services">
```

### Local SEO Elements
- Update NAP (Name, Address, Phone) consistently throughout
- Add your actual service areas in content
- Include local keywords naturally in headings and copy

## Technical Notes

### Accessibility Features
- All images have descriptive alt text
- Modal dialogs are keyboard accessible
- Focus states visible on interactive elements
- High contrast and reduced motion support

### Performance
- Images optimized for web (use 85-90% JPEG quality)
- CSS variables for easy theme changes
- Minimal external dependencies
- Mobile-first responsive design

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Fallbacks for older browsers

## Modal Content

Three feature cards open informational modals:
1. **Residential Services** - Home landscaping offerings
2. **Maintenance Programs** - Seasonal care plans  
3. **Design & Installation** - Complete landscape transformation

Customize modal content in the HTML to match your service details.

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any web hosting service

No build step required - just upload the files.

## Content Guidelines

### Writing Style
- Keep sentences short and benefit-focused
- Use active voice ("We transform..." not "Landscapes are transformed...")
- Include local references (Ormond Beach, Volusia County, Florida)
- Focus on outcomes, not just features

### Call-to-Action Examples
- "Get Free Estimate"
- "Schedule Consultation" 
- "Request Quote"
- "Call for Service"

### Service Descriptions
Write service tiles as noun phrases describing what you do:
- "Weekly Lawn Maintenance"
- "Tree Pruning & Removal"
- "Custom Landscape Design"

Avoid directive language like "Get your lawn mowed" - instead use "Lawn Care & Maintenance".

## Local Business Integration

Perfect for these types of landscaping businesses:
- Residential lawn care services
- Commercial landscaping companies
- Tree service specialists
- Irrigation contractors
- Hardscaping/outdoor living designers
- Full-service landscape contractors
# Vermelho Sangue - Body Piercing Studio Website

A fully responsive website for a professional body piercing studio, inspired by BVLA's design aesthetic with a red color scheme.

## Features

- **18+ Age Verification Wall** - Required age verification before accessing content
- **Responsive Design** - Fully responsive across all devices
- **Modern React Architecture** - Built with React 18, Vite, and modern web technologies
- **Smooth Animations** - Framer Motion animations throughout
- **Professional Design** - Inspired by BVLA's elegant design system
- **Contact Integration** - WhatsApp and email booking links

## Pages

- **Homepage** - Hero section, featured services, about preview, and CTA
- **Piercings** - Comprehensive piercing services and types
- **About Us** - Studio story, values, and team information
- **Lobuloplasty** - Ear lobe repair and reconstruction services
- **Genital Piercing** - Professional intimate piercing services (18+)
- **Body Modification** - Advanced body modification procedures

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── AgeVerification.jsx    # 18+ age verification wall
│   ├── Header.jsx             # Navigation header
│   └── Footer.jsx             # Site footer
├── pages/
│   ├── Home.jsx               # Homepage
│   ├── Piercings.jsx          # Piercing services
│   ├── About.jsx              # About us page
│   ├── Lobuloplasty.jsx       # Lobuloplasty services
│   ├── GenitalPiercing.jsx    # Genital piercing services
│   └── BodyModification.jsx   # Body modification services
├── App.jsx                    # Main app component with routing
├── main.jsx                   # React entry point
└── index.css                  # Global styles
```

## Design System

The website uses a red color scheme inspired by BVLA's design:

- **Primary Red**: `#dc2626`
- **Dark Red**: `#b91c1c`
- **Typography**: Inter (body) + Playfair Display (headings)
- **Layout**: CSS Grid and Flexbox for responsive design
- **Animations**: Framer Motion for smooth transitions

## Features

### Age Verification
- Required 18+ verification before accessing content
- Persistent storage of verification status
- Redirects underage users away from the site

### Responsive Design
- Mobile-first approach
- Responsive navigation with hamburger menu
- Optimized layouts for all screen sizes

### Contact Integration
- WhatsApp booking links throughout the site
- Email contact links
- Phone number display in header

### Professional Content
- Comprehensive service descriptions
- Safety and privacy information
- Professional imagery placeholders
- Clear pricing and booking information

## Customization

### Colors
Update the color scheme by modifying the CSS variables in `src/index.css`:

```css
/* Primary colors */
--primary-red: #dc2626;
--dark-red: #b91c1c;
```

### Content
- Update contact information in `Header.jsx` and `Footer.jsx`
- Modify service descriptions in individual page components
- Replace placeholder images with actual studio photos

### Styling
- Customize fonts by updating the Google Fonts imports in `index.html`
- Modify animations by adjusting Framer Motion configurations
- Update spacing and layout in `index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For questions about this website, contact the studio directly through the provided contact information.

# Logo Placement Instructions

## Where to Add Your Logos

Place your logo files in the `/public` folder:

### Header Logo
- **File**: `logo.png` (or `logo.jpg`, `logo.svg`)
- **Location**: `/public/logo.png`
- **Size**: Recommended 200x50px or similar aspect ratio
- **Format**: PNG with transparent background preferred

### Footer Logo  
- **File**: `logo-white.png` (or `logo-white.jpg`, `logo-white.svg`)
- **Location**: `/public/logo-white.png`
- **Size**: Recommended 160x40px or similar aspect ratio
- **Format**: PNG with transparent background preferred

## Current Setup

The website is configured to:
1. **Try to load your logo first** - If the logo file exists, it will display
2. **Fallback to text** - If logo fails to load, it shows "VERMELHO SANGUE" text
3. **Responsive sizing** - Logos automatically scale for different screen sizes

## Logo Specifications

### Header Logo
- Height: 50px (auto width)
- Hover effect: Slight scale animation
- Alt text: "Vermelho Sangue Body Jewelry"

### Footer Logo
- Height: 40px (auto width)  
- White filter applied (makes any color logo appear white)
- Alt text: "Vermelho Sangue Body Jewelry"

## Testing

After adding your logos:
1. Refresh the browser at `http://localhost:3000`
2. Check both header and footer display correctly
3. Test on mobile/tablet sizes
4. Verify hover effects work

## File Naming

You can use any of these formats:
- `logo.png` / `logo-white.png`
- `logo.jpg` / `logo-white.jpg`  
- `logo.svg` / `logo-white.svg`

The website will automatically detect and use whichever format you provide.

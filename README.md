# Free Fire Frenzy - College Fest Tournament Website

A modern, responsive tournament registration website built with React, TypeScript, and Tailwind CSS. Features a dark gaming aesthetic with neon green and pink accents.

## Features

- **Hero Section** - Bold tournament branding with registration CTA
- **Tournament Details** - Date, venue, prize pool, and contact information
- **6 Tournament Categories** - Each with direct Google Form registration links:
  - Full Map - Squad
  - Full Map - Duo
  - Clash Squad (4v4, 3v3, 2v2, 1v1)
- **Comprehensive Rules** - Separate rule sections for Clash Squad and Full Map modes
- **WhatsApp Help Desk** - Floating widget for instant support
- **Fully Responsive** - Mobile-first design that works on all devices
- **Gaming UI** - Dark theme with neon glows, glassmorphism, and smooth animations

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool
- **Lucide React** - Beautiful icons

## Running Locally

### Prerequisites
- Node.js 16+ installed

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Deployment

### Deploying to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

Your site will be live in minutes with automatic SSL!

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

Your site will be live with automatic SSL and global CDN!

## Google Forms Integration

### Viewing Responses in Google Sheets

Each registration form can automatically save responses to Google Sheets:

1. Open your Google Form
2. Click the "Responses" tab
3. Click the green Google Sheets icon (Create Spreadsheet)
4. Choose "Create a new spreadsheet"
5. Click "Create"

Now every form submission will automatically appear in the linked Google Sheet in real-time!

### Tournament Categories & Form Links

The website includes 6 registration categories:

1. **Full Map - Squad**: Full squad battle royale mode
2. **Full Map - Duo**: Two-player battle royale mode
3. **Clash Squad 4v4**: 4-player team clash
4. **Clash Squad 3v3**: 3-player team clash
5. **Clash Squad 2v2**: 2-player team clash
6. **Clash Squad 1v1**: Solo player clash

Each category button opens the corresponding Google Form in a new tab.

## Customization

### Updating Tournament Details

Edit the following components to update information:

- **Date/Venue/Prize**: `src/components/Info.tsx`
- **Contact Numbers**: `src/components/Info.tsx` and `src/components/Footer.tsx`
- **WhatsApp Number**: `src/components/WhatsAppWidget.tsx`
- **Form Links**: `src/components/Categories.tsx`

### Changing Colors

The site uses a green and pink neon theme. To change colors, update the Tailwind classes in the components:

- Green: `text-green-400`, `bg-green-500`, `border-green-500`
- Pink: `text-pink-400`, `bg-pink-500`, `border-pink-500`

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Hero section with title and main CTA
│   ├── Info.tsx           # Tournament details cards
│   ├── Categories.tsx     # 6 tournament mode cards
│   ├── Rules.tsx          # Clash Squad & Full Map rules
│   ├── Footer.tsx         # Footer with CTA and links
│   └── WhatsAppWidget.tsx # Floating WhatsApp button
├── App.tsx                # Main app component
├── main.tsx              # App entry point
└── index.css             # Tailwind imports
```

## Rules Summary

### Clash Squad Rules (Strict)
- No Gloo Wall breaking, character skills, loadouts, drops, or wall-jump
- Player level must be > 20
- No gun skins or PC players
- Payment after every match
- Late entry NOT accepted
- Violations = immediate kick

### Full Map Rules
- No character skills or gun skins
- Player level must be > 20
- No loadouts or PC players
- Payment after every match
- No late entry
- Strict guidelines apply

## Contact & Support

- **Phone**: 8885628836 / 8374210765
- **WhatsApp**: Click the floating green icon on the website
- **Date**: 29-12-2025
- **Prize Pool**: Up to ₹1300/- per match

## License

This project is built for the Free Fire Frenzy college fest tournament.

---

**Built with passion for gaming communities**

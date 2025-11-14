# Supratmos Landing Page

A modern, responsive landing page for Supratmos - a Telegram bot that simplifies blockchain interactions on Supra L1.

## Features

- 🎨 Black and neon purple theme (#8B5CF6)
- ✨ Minimal, modern aesthetics with enhanced visual effects
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Custom animations and gradient effects
- 🔮 Interactive UI components with glow effects

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd supratmos-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── Logo.tsx         # Custom logo component
│   ├── FeatureCard.tsx  # Feature card component
│   └── ui/              # shadcn/ui components
├── styles/
│   └── globals.css      # Global styles and custom animations
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Theme Colors

The main purple theme color (#8B5CF6) is defined in `/styles/globals.css`. You can modify it by changing the color values in the CSS variables:

```css
--neon-purple: #8B5CF6;
--neon-purple-glow: rgba(139, 92, 246, 0.6);
```

### Content

Edit `/app/page.tsx` to modify:
- Features list
- Technical challenges section
- Hero section content
- Call-to-action buttons

### Logo

The custom SVG logo is in `/components/Logo.tsx` and can be customized to match your brand.

## Build for Production

```bash
npm run build
npm run start
```

This will create an optimized production build and start the server.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

## License

© 2025 Supratmos. All rights reserved.

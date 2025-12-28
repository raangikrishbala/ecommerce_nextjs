# Next.js E-commerce Project Structure

This project follows a well-organized component architecture for maintainability and reusability.

## 📁 Folder Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
│
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Banner.tsx       # Banner/slider component
│   │   ├── FilterDropdown.tsx
│   │   ├── SectionTitle.tsx
│   │   └── index.ts         # Barrel exports
│   │
│   ├── cards/               # Card components for different content types
│   │   ├── EventCard.tsx
│   │   ├── AutomotiveCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── index.ts
│   │
│   ├── sections/            # Page section components
│   │   ├── ProductSection.tsx
│   │   ├── EventSection.tsx
│   │   ├── AutomotiveSection.tsx
│   │   ├── ServiceSection.tsx
│   │   └── index.ts
│   │
│   ├── Header.tsx           # Main navigation header
│   ├── Footer.tsx           # Site footer
│   ├── ProductCard.tsx      # Product card component
│   ├── ScriptsLoader.tsx    # External scripts loader
│   └── Layout.tsx           # Layout wrapper
│
├── data/                    # Data files and mock data
│   └── homeData.ts          # Homepage data (products, events, etc.)
│
└── public/                  # Static assets
    └── assets/              # Images, CSS, JS files
```

## 🎯 Component Organization

### UI Components (`components/ui/`)
Small, reusable components that can be used throughout the app:
- **Banner**: Image carousel/slider
- **FilterDropdown**: Filter select dropdown
- **SectionTitle**: Styled section headings

### Card Components (`components/cards/`)
Specialized cards for displaying different content types:
- **EventCard**: Event listings with date badge
- **AutomotiveCard**: Vehicle listings
- **ServiceCard**: Service offerings

### Section Components (`components/sections/`)
Full-width sections that compose multiple cards:
- **ProductSection**: Product listing with optional filter
- **EventSection**: Event listings slider
- **AutomotiveSection**: Automotive listings slider
- **ServiceSection**: Service listings slider

## 🔄 Usage Example

```tsx
import { ProductSection } from '@/components/sections';
import { topSellingProducts } from '@/data/homeData';

<ProductSection 
  title="Top Selling" 
  products={topSellingProducts} 
  showFilter={true}
/>
```

## 📦 Key Features

- **Type Safety**: Full TypeScript support
- **Component Reusability**: Modular component design
- **Clean Imports**: Barrel exports for cleaner imports
- **Data Separation**: Mock data in separate files
- **Image Optimization**: Next.js Image component
- **Responsive**: Mobile-first design
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Adding New Sections

1. Create component in appropriate folder (`ui/`, `cards/`, or `sections/`)
2. Add TypeScript interfaces for props
3. Export from index.ts
4. Import and use in pages

Example:
```tsx
// components/cards/NewCard.tsx
export default function NewCard({ title }: { title: string }) {
  return <div>{title}</div>;
}

// components/cards/index.ts
export { default as NewCard } from './NewCard';

// Usage
import { NewCard } from '@/components/cards';
```

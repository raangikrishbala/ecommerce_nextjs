# 🛍️ Next.js E-commerce Application

A modern e-commerce application built with Next.js 16, TypeScript, and a component-based architecture.

## ✨ Features

- 🎨 **Modular Components**: Reusable UI, card, and section components
- 📱 **Responsive Design**: Mobile-first approach with responsive layouts
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- ⚡ **Performance**: Next.js Image optimization and static generation
- 🎯 **Type-Safe**: Full TypeScript support throughout
- 📂 **Organized**: Clean folder structure with barrel exports
- 📚 **Well Documented**: Comprehensive documentation included

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn (or npm)

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Reusable UI components
│   ├── cards/             # Content card components
│   ├── sections/          # Page section components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProductCard.tsx    # Product card
├── data/                  # Mock data
└── types/                 # TypeScript types
```

## 🎯 Key Components

### UI Components
- **Banner** - Image slider/carousel
- **FilterDropdown** - Filter select component
- **SectionTitle** - Section headings

### Card Components
- **ProductCard** - Product display cards
- **EventCard** - Event listing cards
- **AutomotiveCard** - Vehicle listing cards
- **ServiceCard** - Service offering cards

### Section Components
- **ProductSection** - Product listings with optional filters
- **EventSection** - Event carousel section
- **AutomotiveSection** - Automotive listings
- **ServiceSection** - Services carousel

## 📚 Documentation

- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- [STRUCTURE.md](./STRUCTURE.md) - Detailed folder structure
- [COMPONENT_TREE.md](./COMPONENT_TREE.md) - Component hierarchy
- [CONVERSION_COMPLETE.md](./CONVERSION_COMPLETE.md) - Conversion details
- [src/types/component-props.ts](./src/types/component-props.ts) - Props reference

## 🎨 Usage Example

```tsx
import { ProductSection, EventSection } from '@/components/sections';
import { products, events } from '@/data/homeData';

export default function Page() {
  return (
    <main>
      <ProductSection 
        title="Top Selling" 
        products={products} 
        showFilter={true}
      />
      <EventSection title="Events" events={events} />
    </main>
  );
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS (Bootstrap + Custom)
- **UI**: React Components
- **Icons**: Font Awesome
- **Carousel**: Owl Carousel

## 📦 Build Status

✅ Build successful - No errors or warnings

## 🎯 Next Steps

1. Add API integration
2. Implement cart functionality
3. Add user authentication
4. Create detail pages (product, event, etc.)
5. Add search functionality
6. Implement filters

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please read the documentation before submitting PRs.

---

**Built with ❤️ using Next.js**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

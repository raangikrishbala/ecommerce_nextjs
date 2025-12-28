# 🎯 Quick Start Guide

## Project Overview
This Next.js e-commerce application is built with a modular component architecture for maximum reusability and maintainability.

## 📁 Key Directories

```
src/
├── app/              → Next.js pages
├── components/       → React components
│   ├── ui/          → Basic UI elements
│   ├── cards/       → Content cards
│   └── sections/    → Page sections
├── data/            → Mock data
└── types/           → TypeScript types
```

## 🚀 Running the Project

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

Visit: http://localhost:3000

## 📝 Creating New Pages

1. Create file in `src/app/[page-name]/page.tsx`
2. Import and use existing sections
3. Add route to navigation in Header.tsx

Example:
```tsx
// src/app/marketplace/page.tsx
import { ProductSection } from '@/components/sections';
import { products } from '@/data/marketplaceData';

export default function Marketplace() {
  return (
    <main className="main">
      <ProductSection title="Marketplace" products={products} />
    </main>
  );
}
```

## 🎨 Using Components

### Basic Pattern
```tsx
import { ComponentName } from '@/components/[folder]';

<ComponentName prop1="value" prop2={data} />
```

### Common Imports
```tsx
// UI Components
import { Banner, SectionTitle, FilterDropdown } from '@/components/ui';

// Card Components
import { EventCard, ServiceCard, AutomotiveCard } from '@/components/cards';

// Section Components
import { ProductSection, EventSection } from '@/components/sections';

// Core Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
```

## 📊 Data Management

Current: Mock data in `src/data/homeData.ts`

For real API:
```tsx
// Create API service
// src/services/api.ts
export async function getProducts() {
  const res = await fetch('/api/products');
  return res.json();
}

// Use in page
import { getProducts } from '@/services/api';

export default async function Page() {
  const products = await getProducts();
  return <ProductSection products={products} />;
}
```

## 🎯 Component Checklist

When creating new components:
- [ ] Use TypeScript interfaces for props
- [ ] Add 'use client' if using hooks/interactivity
- [ ] Use Next.js Image for images
- [ ] Use Next.js Link for navigation
- [ ] Export from index.ts
- [ ] Document props in types/component-props.ts

## 🔧 Customization

### Styling
- Global styles: `src/app/globals.css`
- Template CSS: `public/assets/css/mega_style.css`
- Bootstrap: `public/assets/css/bootstrap.min.css`

### Images
Place images in: `public/assets/images/`
Reference as: `/assets/images/your-image.jpg`

### Scripts
External scripts loaded in: `src/components/ScriptsLoader.tsx`

## 📖 Documentation

- [STRUCTURE.md](./STRUCTURE.md) - Detailed folder structure
- [CONVERSION_COMPLETE.md](./CONVERSION_COMPLETE.md) - Conversion details
- [src/types/component-props.ts](./src/types/component-props.ts) - Component props reference

## ⚡ Pro Tips

1. **Reuse sections**: Use existing sections for new pages
2. **Centralize data**: Keep all data in `src/data/`
3. **Type everything**: Use TypeScript interfaces
4. **Component composition**: Combine small components into larger ones
5. **Clean imports**: Use barrel exports (index.ts files)

## 🐛 Troubleshooting

**Build errors?**
- Check TypeScript types match
- Ensure all imports are correct
- Verify image paths exist

**Styles not working?**
- Check CSS files are in public/assets/
- Verify links in layout.tsx

**Components not rendering?**
- Add 'use client' if using useState/useEffect
- Check props are passed correctly

## 📞 Need Help?

1. Check component props in `src/types/component-props.ts`
2. Review examples in data files
3. Look at existing page implementations
4. Read Next.js documentation: https://nextjs.org/docs

---

**Happy coding!** 🚀

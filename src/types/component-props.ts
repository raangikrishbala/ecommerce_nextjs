// Component Props Reference Guide
// Use this as a quick reference when working with components

// ============================================
// UI COMPONENTS
// ============================================

// Banner Component
interface BannerProps {
  images: string[];  // Array of image paths
}

// FilterDropdown Component
interface FilterDropdownProps {
  options: Array<{ value: string; label: string }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

// SectionTitle Component
interface SectionTitleProps {
  title: string;
  className?: string;
}

// ============================================
// CARD COMPONENTS
// ============================================

// EventCard Component
interface EventCardProps {
  id?: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: string;
  date: {
    day: string;
    month: string;
  };
}

// AutomotiveCard Component
interface AutomotiveCardProps {
  id?: string;
  title: string;
  location: string;
  price: string;
  year: string;
  kilometers: string;
  image: string;
  postedDate: string;
  onAddToWishlist?: () => void;
}

// ServiceCard Component
interface ServiceCardProps {
  id?: string;
  title: string;
  image: string;
  image2?: string;
  oldPrice?: string;
  price: string;
  rating?: number;  // 0-100 percentage
}

// ProductCard Component (existing)
interface ProductCardProps {
  id?: string;
  title: string;
  category: string;
  brand: string;
  brandLogo?: string;
  image: string;
  image2?: string;
  oldPrice?: string;
  price: string;
  rating?: number;  // 0-100 percentage
  labels?: Array<{ text: string; type: 'hot' | 'sale' | 'new' }>;
  distance?: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

// ============================================
// SECTION COMPONENTS
// ============================================

// ProductSection Component
interface ProductSectionProps {
  title: string;
  products: ProductCardProps[];  // Array of ProductCardProps
  showFilter?: boolean;
}

// EventSection Component
interface EventSectionProps {
  title: string;
  events: EventCardProps[];  // Array of EventCardProps
}

// AutomotiveSection Component
interface AutomotiveSectionProps {
  title: string;
  items: AutomotiveCardProps[];  // Array of AutomotiveCardProps
}

// ServiceSection Component
interface ServiceSectionProps {
  title: string;
  services: ServiceCardProps[];  // Array of ServiceCardProps
}

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// Example 1: Using Banner
import { Banner } from '@/components/ui';

<Banner images={['/img1.jpg', '/img2.jpg']} />


// Example 2: Using ProductSection with Filter
import { ProductSection } from '@/components/sections';

<ProductSection 
  title="Top Selling" 
  products={productsArray} 
  showFilter={true}
/>


// Example 3: Using EventSection
import { EventSection } from '@/components/sections';

const events = [
  {
    id: '1',
    title: 'Concert Night',
    category: 'Music',
    description: 'Amazing concert',
    image: '/event.jpg',
    price: '$50',
    date: { day: '25', month: 'Dec' }
  }
];

<EventSection title="Events" events={events} />


// Example 4: Using Individual Cards
import { EventCard, ServiceCard } from '@/components/cards';

<EventCard
  title="Music Festival"
  category="Concerts"
  description="3-day festival"
  image="/event.jpg"
  price="$99"
  date={{ day: '15', month: 'Jan' }}
/>

<ServiceCard
  title="Home Cleaning"
  image="/service.jpg"
  price="$49"
  rating={85}
/>
*/

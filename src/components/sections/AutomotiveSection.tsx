'use client';

import AutomotiveCard from '../cards/AutomotiveCard';
import SectionTitle from '../ui/SectionTitle';

interface AutomotiveItem {
  id?: string;
  title: string;
  location: string;
  price: string;
  year: string;
  kilometers: string;
  image: string;
  postedDate: string;
}

interface AutomotiveSectionProps {
  title: string;
  items: AutomotiveItem[];
}

export default function AutomotiveSection({ title, items }: AutomotiveSectionProps) {
  return (
    <section className="featured-products-section">
      <div className="container">
        <SectionTitle title={title} />

        <div
          className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center"
          data-owl-options='{"dots": false, "nav": true}'
        >
          {items.map((item, index) => (
            <AutomotiveCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

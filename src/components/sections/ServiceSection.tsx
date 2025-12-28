'use client';

import ServiceCard from '../cards/ServiceCard';
import SectionTitle from '../ui/SectionTitle';

interface Service {
  id?: string;
  title: string;
  image: string;
  image2?: string;
  oldPrice?: string;
  price: string;
  rating?: number;
}

interface ServiceSectionProps {
  title: string;
  services: Service[];
}

export default function ServiceSection({ title, services }: ServiceSectionProps) {
  return (
    <section className="featured-products-section mb-3">
      <div className="container">
        <SectionTitle title={title} />

        <div
          className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center"
          data-owl-options='{"dots": false, "nav": true}'
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

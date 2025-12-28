'use client';

import EventCard from '../cards/EventCard';
import SectionTitle from '../ui/SectionTitle';

interface Event {
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

interface EventSectionProps {
  title: string;
  events: Event[];
}

export default function EventSection({ title, events }: EventSectionProps) {
  return (
    <section className="featured-products-section">
      <div className="container">
        <SectionTitle title={title} />

        <div
          className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center"
          data-owl-options='{"dots": false, "nav": true}'
        >
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

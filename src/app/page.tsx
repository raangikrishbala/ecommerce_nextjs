import Banner from '@/components/ui/Banner';
import ProductSection from '@/components/sections/ProductSection';
import EventSection from '@/components/sections/EventSection';
import AutomotiveSection from '@/components/sections/AutomotiveSection';
import ServiceSection from '@/components/sections/ServiceSection';
import {
  bannerImages,
  topSellingProducts,
  events,
  automotiveItems,
  services,
} from '@/data/homeData';

export default function Home() {
  return (
    <div className="page-wrapper">
      <main className="main">
        {/* Banner Section */}
        <Banner images={bannerImages} />

        {/* Top Selling Section */}
        <ProductSection 
          title="Top Selling" 
          products={topSellingProducts} 
          showFilter={true}
        />

        {/* Top Deals Section */}
        <ProductSection 
          title="Top Deals" 
          products={topSellingProducts}
        />

        {/* New Products Section */}
        <ProductSection 
          title="New Products" 
          products={topSellingProducts}
        />

        {/* Events Section */}
        <EventSection title="Events" events={events} />

        {/* Automotive Section */}
        <AutomotiveSection title="Automotive" items={automotiveItems} />

        {/* Services Section */}
        <ServiceSection title="Services" services={services} />
      </main>
    </div>
  );
}

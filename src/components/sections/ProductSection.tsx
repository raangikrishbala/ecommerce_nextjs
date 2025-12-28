'use client';

import ProductCard from '../ProductCard';
import SectionTitle from '../ui/SectionTitle';
import FilterDropdown from '../ui/FilterDropdown';

interface Product {
  id?: string;
  title: string;
  category: string;
  brand: string;
  brandLogo?: string;
  image: string;
  image2?: string;
  oldPrice?: string;
  price: string;
  rating?: number;
  labels?: Array<{ text: string; type: 'hot' | 'sale' | 'new' }>;
  distance?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  showFilter?: boolean;
}

export default function ProductSection({ 
  title, 
  products, 
  showFilter = false 
}: ProductSectionProps) {
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'new', label: 'New' },
    { value: 'used', label: 'Used' },
  ];

  return (
    <section className="featured-products-section">
      <div className="container">
        {showFilter && (
          <div className="row">
            <div className="col-sm-12">
              <FilterDropdown options={filterOptions} defaultValue="all" />
            </div>
          </div>
        )}

        <SectionTitle title={title} />

        <div
          className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center"
          data-owl-options='{"dots": false, "nav": true}'
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

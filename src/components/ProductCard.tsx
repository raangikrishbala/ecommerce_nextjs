import Image from 'next/image';
import Link from 'next/link';

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
  rating?: number;
  labels?: Array<{ text: string; type: 'hot' | 'sale' | 'new' }>;
  distance?: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

export default function ProductCard({
  id = '1',
  title,
  category,
  brand,
  brandLogo = '/assets/images/nike_logo.png',
  image,
  image2,
  oldPrice,
  price,
  rating = 80,
  labels = [],
  distance = '13.42 Miles Away',
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  return (
    <div className="product-default appear-animate" data-animation-name="fadeInRightShorter">
      <figure>
        <Link href={`/product/${id}`}>
          <Image src={image} width={280} height={280} alt={title} />
          {image2 && <Image src={image2} width={280} height={280} alt={title} />}
        </Link>
        {labels.length > 0 && (
          <div className="label-group">
            {labels.map((label, index) => (
              <div key={index} className={`product-label label-${label.type}`}>
                {label.text}
              </div>
            ))}
          </div>
        )}
      </figure>
      <div className="product-details">
        <div className="category-list">
          <a href="#" className="product-category">{category}</a>
        </div>
        <h3 className="product-title">
          <Link href={`/product/${id}`}>{title}</Link>
        </h3>

        <div className="product_brand_detail">
          <span className="product-category m-0 p-0">{brand}</span>
          <span>
            <Link href="/business-details">
              <Image
                src={brandLogo}
                className="img-fluid product_brand_logo"
                alt={brand}
                width={50}
                height={30}
              />
            </Link>
          </span>
        </div>

        <div className="ratings-container">
          <div className="product-ratings">
            <span className="ratings" style={{ width: `${rating}%` }}></span>
            <span className="tooltiptext tooltip-top"></span>
          </div>
        </div>

        <div className="price-box">
          {oldPrice && <del className="old-price">{oldPrice}</del>}
          <span className="product-price">{price}</span>
        </div>

        <div className="product-action mb-1">
          <a
            href="#"
            className="btn-icon-wish"
            title="wishlist"
            onClick={(e) => {
              e.preventDefault();
              onAddToWishlist?.();
            }}
          >
            <i className="icon-heart"></i>
          </a>
          <a
            href="#"
            className="btn-icon btn-add-cart"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart?.();
            }}
          >
            <i className="icon-shopping-cart"></i>
            <span>ADD TO CART</span>
          </a>
          <Link href={`/product/${id}`} className="btn-quickview" title="Quick View">
            <i className="fas fa-external-link-alt"></i>
          </Link>
        </div>

        <div className="miles_store2">
          <div className="text-dark fs-6 mb-1">{distance}</div>
        </div>
      </div>
    </div>
  );
}

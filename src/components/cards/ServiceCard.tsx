import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  id?: string;
  title: string;
  image: string;
  image2?: string;
  oldPrice?: string;
  price: string;
  rating?: number;
}

export default function ServiceCard({
  id = '1',
  title,
  image,
  image2,
  oldPrice,
  price,
  rating = 80,
}: ServiceCardProps) {
  return (
    <div className="product-default appear-animate" data-animation-name="fadeInRightShorter">
      <figure>
        <Link href={`/service/${id}`}>
          <Image src={image} width={280} height={280} alt={title} />
          {image2 && <Image src={image2} width={280} height={280} alt={title} />}
        </Link>
      </figure>
      
      <div className="product-details align-items-start">
        <h3 className="product-title">
          <Link href={`/service/${id}`}>{title}</Link>
        </h3>
        
        <div className="ratings-container">
          <div className="product-ratings">
            <span className="ratings" style={{ width: `${rating}%` }}></span>
            <span className="tooltiptext tooltip-top"></span>
          </div>
        </div>
        
        <div className="price-box mb-2">
          {oldPrice && <del className="old-price">{oldPrice}</del>}
          <span className="product-price">{price}</span>
        </div>
      </div>
    </div>
  );
}

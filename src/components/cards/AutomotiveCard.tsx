import Image from 'next/image';
import Link from 'next/link';

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

export default function AutomotiveCard({
  id = '1',
  title,
  location,
  price,
  year,
  kilometers,
  image,
  postedDate,
  onAddToWishlist,
}: AutomotiveCardProps) {
  return (
    <div className="product-default appear-animate" data-animation-name="fadeInRightShorter">
      <article className="post">
        <div className="post-media">
          <Link href={`/automotive/${id}`}>
            <Image src={image} alt={title} width={225} height={280} />
          </Link>
          <div className="post-date">
            <a
              href="#"
              className="btn-icon-wish new-btn-icon-wish"
              title="wishlist"
              onClick={(e) => {
                e.preventDefault();
                onAddToWishlist?.();
              }}
            >
              <i className="icon-heart"></i>
            </a>
          </div>
        </div>

        <div className="post-body">
          <h2 className="post-title">
            <Link href={`/automotive/${id}`}>{price}</Link>
          </h2>
          <div className="post-content">
            <p>{year} - {kilometers} km</p>
          </div>
          <div className="price-box d-flex justify-content-between">
            <div>
              <p><b>{title}</b></p>
              <p>{location}</p>
            </div>
            <p>{postedDate}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

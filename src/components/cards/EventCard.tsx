import Image from 'next/image';
import Link from 'next/link';

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

export default function EventCard({
  id = '1',
  title,
  category,
  description,
  image,
  price,
  date,
}: EventCardProps) {
  return (
    <div className="product-default appear-animate" data-animation-name="fadeInRightShorter">
      <article className="post">
        <div className="post-media">
          <Link href={`/event/${id}`}>
            <Image src={image} alt={title} width={225} height={280} />
          </Link>
          <div className="post-date">
            <span className="day">{date.day}</span>
            <span className="month">{date.month}</span>
          </div>
        </div>

        <div className="post-body">
          <h2 className="post-title">
            <Link href={`/event/${id}`}>{title}</Link>
          </h2>
          <div className="post-content">
            <p>{description}</p>
          </div>
          <div>
            <a href="#" className="product-category text-left">
              {category}
            </a>
          </div>
          <div className="price-box mt-1">
            <span className="product-category">{price}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

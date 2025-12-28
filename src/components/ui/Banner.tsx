'use client';

import Image from 'next/image';

interface BannerProps {
  images: string[];
}

export default function Banner({ images }: BannerProps) {
  return (
    <div className="home-slider slide-animate owl-carousel owl-theme show-nav-hover nav-big mb-2 text-uppercase">
      {images.map((image, index) => (
        <div key={index} className="home-slide banner">
          <Image
            className="slide-bg"
            src={image}
            width={1903}
            height={250}
            alt={`Banner ${index + 1}`}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}

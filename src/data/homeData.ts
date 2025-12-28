// Mock data for the homepage

export const bannerImages = [
  '/assets/images/banners/banner-1.png',
  '/assets/images/banners/banner-2.png',
];

export const sampleProduct = {
  id: '1',
  title: 'Ultimate 3D Bluetooth Speaker',
  category: 'Category',
  brand: 'Nike',
  brandLogo: '/assets/images/nike_logo.png',
  image: '/assets/images/products/product-1.jpg',
  image2: '/assets/images/products/product-1-2.jpg',
  oldPrice: '$59.00',
  price: '$49.00',
  rating: 80,
  labels: [
    { text: 'HOT', type: 'hot' as const },
    { text: '-20%', type: 'sale' as const },
  ],
  distance: '13.42 Miles Away',
};

export const topSellingProducts = [
  {
    ...sampleProduct,
    id: '1',
  },
  {
    ...sampleProduct,
    id: '2',
    title: 'Brown Women Casual HandBag',
    image: '/assets/images/products/product-2.jpg',
    image2: '/assets/images/products/product-2-2.jpg',
    labels: [
      { text: 'HOT', type: 'hot' as const },
      { text: '-30%', type: 'sale' as const },
    ],
  },
  {
    ...sampleProduct,
    id: '3',
    title: 'Circled Ultimate 3D Speaker',
    image: '/assets/images/products/product-3.jpg',
    image2: '/assets/images/products/product-3-2.jpg',
    labels: [],
  },
  {
    ...sampleProduct,
    id: '4',
    title: 'Blue Backpack for the Young - S',
    image: '/assets/images/products/product-4.jpg',
    image2: '/assets/images/products/product-4-2.jpg',
    labels: [
      { text: 'HOT', type: 'hot' as const },
      { text: '-40%', type: 'sale' as const },
    ],
  },
  {
    ...sampleProduct,
    id: '5',
    title: 'Casual Spring Blue Shoes',
    image: '/assets/images/products/product-5.jpg',
    image2: '/assets/images/products/product-5-2.jpg',
    labels: [
      { text: 'HOT', type: 'hot' as const },
      { text: '-15%', type: 'sale' as const },
    ],
  },
];

export const events = Array(6).fill(null).map((_, i) => ({
  id: `${i + 1}`,
  title: 'Top New Collection',
  category: 'Concerts',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '/assets/images/event.jpg',
  price: '₹ 799 onwards',
  date: { day: '26', month: 'Feb' },
}));

export const automotiveItems = Array(6).fill(null).map((_, i) => ({
  id: `${i + 1}`,
  title: 'Volkswagen Taigun',
  location: 'Royapettah',
  price: '₹ 18,50,000',
  year: '2025',
  kilometers: '12,000',
  image: '/assets/images/cars.jpg',
  postedDate: 'Dec 01',
}));

export const services = Array(6).fill(null).map((_, i) => ({
  id: `${i + 1}`,
  title: 'Intense Bathroom Cleaning',
  image: '/assets/images/services.jpg',
  image2: '/assets/images/services.jpg',
  oldPrice: '$59.00',
  price: '$49.00',
  rating: 80,
}));

import { Product, Seller, Category, PromotionalBanner, CarouselSlide, CategoryCard, GuideCard } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: '2 Lens kit',
    brand: 'Canon',
    rating: 4.8,
    price: 1799,
    image: '/pixel/3.webp',
    countdown: '17h 31m',
    category: 'lenses',
  },
  {
    id: '2',
    name: 'EOS R5',
    brand: 'Canon',
    rating: 4.3,
    price: 3699,
    image: '/pixel/camera.webp',
    countdown: '4h 31m',
    features: [
      '45MP Full - Frame CMOS Sensor',
      'Sensor - Shift Image Stabilization',
      'DIGIC X Image Processor',
      '8K30 Raw Video',
    ],
    category: 'cameras',
  },
  {
    id: '3',
    name: 'Mavic 3',
    brand: 'DJI',
    rating: 4.7,
    price: 1599,
    image: '/pixel/4.webp',
    countdown: '2h 27m',
    features: [
      '20MP 4/3" CMOS Hasselblad',
      '4K Slow Motion at 120 fps',
      'f/2.8 to f/11 Adjustable Aperture',
      'DJI RC Remote Included',
    ],
    category: 'cameras',
  },
  {
    id: '4',
    name: 'Carbon Fiber Tripod',
    brand: 'Benro',
    rating: 4.2,
    price: 319,
    image: '/pixel/5.webp',
    countdown: '3h 45m',
    features: [
      'Load Capacity: 26.4 lb',
      'Max Height: 64.2"',
      'Min Height: 16.1"',
      'Folded Length: 16.1"',
    ],
    category: 'accessories',
  },
  {
    id: '5',
    name: 'HERO 11 Black Mini',
    brand: 'GoPro',
    rating: 4.4,
    price: 289,
    image: '/pixel/6.webp',
    countdown: '7h 38m',
    features: [
      '24.7MP Improved Performance',
      'Smooth 5.0 Image Stabilization',
      '8x Slow-Motion Video',
      '5.3K60/2.7K240 Video',
    ],
    category: 'cameras',
  },
];

export const sellers: Seller[] = [
  {
    id: '1',
    name: 'Tom Smith',
    title: 'Handmade Accessories',
    description: 'PIXEL Verified',
    specialties: ['Camera Bags', 'Grips & Rigs', 'Professional Straps'],
    verified: true,
  },
  {
    id: '2',
    name: 'Emily Wong',
    title: 'Optics Enthusiast',
    description: 'PIXEL Verified',
    specialties: [
      'Unique Lenses',
      'ND & UV Filters',
      'Special Effect Filters',
      'Lens Accessories',
    ],
    verified: true,
  },
  {
    id: '3',
    name: 'George Duke',
    title: 'Vintage Collector',
    description: 'PIXEL Verified',
    specialties: ['60s & 70s Film Cameras', 'Old Prints', 'Disposables'],
    verified: true,
  },
];

export const categories: Category[] = [
  {
    id: 'digital',
    name: 'Digital',
    subcategories: ['DSLR', 'Mirrorless', 'Compact', 'Medium Format'],
  },
  {
    id: 'film',
    name: 'Film',
    subcategories: ['35mm', 'Medium Format', 'Large Format', 'Instant', 'Disposable'],
  },
  {
    id: 'video',
    name: 'Video',
    subcategories: ['Camcorder', 'Pro-Consumer', 'Super Chip'],
  },
];

export const promotionalBanners: PromotionalBanner[] = [
  {
    id: '1',
    title: 'MAKE BELIEVE',
    subtitle: 'Sales on selected SONY products',
  },
  {
    id: '2',
    title: 'PICTURE PERFECT DEALS',
    subtitle: 'Browse our second-hand gear market',
  },
  {
    id: '3',
    title: 'NEW ARRIVALS',
    subtitle: 'The newest and latest advances in technology',
  },
];

export const carouselSlides: CarouselSlide[] = [
  {
    id: '1',
    image: '/pixel/camera.webp',
    title: 'MAKE BELIEVE',
    subtitle: 'Sales on selected SONY products',
  },
  {
    id: '2',
    image: '/pixel/camera%202.webp',
    title: 'PICTURE PERFECT DEALS',
    subtitle: 'Browse our second-hand gear market',
  },
  {
    id: '3',
    image: '/pixel/7.webp',
    title: 'NEW ARRIVALS',
    subtitle: 'The newest and latest advances in technology',
  },
];

export const categoryCards: CategoryCard[] = [
  {
    id: '1',
    title: 'Cameras',
    description: 'Browse through our selection of cameras',
    image: '/pixel/8.webp',
  },
  {
    id: '2',
    title: 'Lenses',
    description: 'Find the sharpest lens for your photoshoot',
    image: '/pixel/9.webp',
  },
  {
    id: '3',
    title: 'Accessories',
    description: 'Highest quality accessories to fit your gear',
    image: '/pixel/10.webp',
  },
];

export const guideCards: GuideCard[] = [
  {
    id: '1',
    title: 'Image Editing',
    description: 'Learn the basics of Adobe Lightroom and elevate your photos to a new standard.',
    image: '/pixel/11.webp',
  },
  {
    id: '2',
    title: 'Image Editing',
    description: 'Learn the basics of Adobe Lightroom and elevate your photos to a new standard.',
    image: '/pixel/12.webp',
  },
];

export const navigationItems = [
  'BRANDS',
  'CAMERAS',
  'LENSES',
  'ACCESSORIES',
  'STUDIO',
  'EXTREME',
  'USED',
];


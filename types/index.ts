export interface Product {
  id: string;
  name: string;
  brand: string;
  rating: number;
  price: number;
  originalPrice?: number;
  image: string;
  countdown?: string;
  features?: string[];
  category: string;
  options?: string[];
  selectedOption?: string;
  quantity?: number;
}

export interface Seller {
  id: string;
  name: string;
  title: string;
  description: string;
  specialties: string[];
  verified: boolean;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: string[];
  image?: string;
}

export interface PromotionalBanner {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  image?: string;
}

export interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  link?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface GuideCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}


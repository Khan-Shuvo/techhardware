import { LucideIcon } from "lucide-react";

export type Product = {
    id: string;
    name: string;
    image: string;
    category: string;
    brand: string;
    price: number;
    stock: number;
    rating: number;
    description: string;
    specs?: Record<string, string>;
    featured?: boolean;
}

export type Category = {
    id: string;
    name: string;
    slug: string;
    icon: LucideIcon;
    productCount: number;
}

export type ProductCardProps = {
  id: string
  brand: string
  name: string
  image: string
  price: number
  rating: number
  reviews?: number
  featured?: boolean
  onAddToCart?: () => void
}
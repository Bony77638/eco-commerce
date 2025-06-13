
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 128,
    inStock: true
  },
  {
    id: 2,
    name: "Classic Cotton T-Shirt",
    price: 24.99,
    description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Leather Wallet",
    price: 45.99,
    description: "Genuine leather wallet with RFID blocking technology and multiple card slots.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 5,
    reviews: 67,
    inStock: true
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch with fitness tracking, GPS, and heart rate monitor.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 234,
    inStock: true
  },
  {
    id: 5,
    name: "Designer Jeans",
    price: 79.99,
    description: "Premium denim jeans with perfect fit and contemporary styling.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4,
    reviews: 156,
    inStock: true
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 93,
    inStock: true
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 149.99,
    description: "UV protection sunglasses with polarized lenses and stylish frame.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 5,
    reviews: 78,
    inStock: true
  },
  {
    id: 8,
    name: "Coffee Maker",
    price: 129.99,
    description: "Programmable coffee maker with thermal carafe and auto-shutoff feature.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 112,
    inStock: true
  },
  {
    id: 9,
    name: "Running Shoes",
    price: 119.99,
    description: "Lightweight running shoes with superior cushioning and breathable mesh upper.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 5,
    reviews: 203,
    inStock: true
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 59.99,
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 145,
    inStock: true
  },
  {
    id: 11,
    name: "Backpack",
    price: 69.99,
    description: "Durable laptop backpack with multiple compartments and USB charging port.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4,
    reviews: 87,
    inStock: true
  },
  {
    id: 12,
    name: "Table Lamp",
    price: 39.99,
    description: "Modern LED table lamp with adjustable brightness and touch control.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 64,
    inStock: true
  }
];


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
  },
  {
    id: 13,
    name: "Gaming PC RTX 4080",
    price: 2299.99,
    description: "High-performance gaming PC with RTX 4080, 32GB RAM, and 1TB NVMe SSD for ultimate gaming experience.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 89,
    inStock: true
  },
  {
    id: 14,
    name: "iPhone 15 Pro Max",
    price: 1199.99,
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system with 5x optical zoom.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 324,
    inStock: true
  },
  {
    id: 15,
    name: "Samsung Galaxy S24 Ultra",
    price: 1099.99,
    description: "Premium Android smartphone with S Pen, 200MP camera, and AI-powered features.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 256,
    inStock: true
  },
  {
    id: 16,
    name: "Gaming Laptop ROG Strix",
    price: 1799.99,
    description: "ASUS ROG gaming laptop with RTX 4070, 16GB RAM, and 144Hz display for portable gaming.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 167,
    inStock: true
  },
  {
    id: 17,
    name: "Google Pixel 8 Pro",
    price: 899.99,
    description: "Advanced Android phone with AI camera features, pure Android experience, and 7 years of updates.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 198,
    inStock: true
  },
  {
    id: 18,
    name: "Custom Gaming PC Builder",
    price: 1599.99,
    description: "Mid-range gaming PC with RTX 4060 Ti, AMD Ryzen 7, 16GB RAM, perfect for 1440p gaming.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 134,
    inStock: true
  },
  {
    id: 19,
    name: "OnePlus 12",
    price: 749.99,
    description: "Flagship killer smartphone with Snapdragon 8 Gen 3, fast charging, and premium build quality.",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 143,
    inStock: true
  },
  {
    id: 20,
    name: "Alienware Aurora R15",
    price: 3299.99,
    description: "Ultimate gaming desktop with RTX 4090, Intel i9, liquid cooling, and customizable RGB lighting.",
    image: "https://images.unsplash.com/photo-1614029951470-ef9eb9952be0?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 76,
    inStock: true
  }
];

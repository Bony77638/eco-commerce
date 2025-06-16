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
  },
  {
    id: 21,
    name: "MacBook Pro M3",
    price: 2399.99,
    description: "Latest MacBook Pro with M3 chip, 14-inch Liquid Retina XDR display, and all-day battery life.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 289,
    inStock: true
  },
  {
    id: 22,
    name: "iPad Air 5th Gen",
    price: 749.99,
    description: "Powerful iPad Air with M1 chip, 10.9-inch Liquid Retina display, and Apple Pencil support.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 412,
    inStock: true
  },
  {
    id: 23,
    name: "Nike Air Max 270",
    price: 149.99,
    description: "Iconic Nike sneakers with Max Air unit and comfortable fit for everyday wear.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4,
    reviews: 327,
    inStock: true
  },
  {
    id: 24,
    name: "Adidas Ultraboost 22",
    price: 179.99,
    description: "Premium running shoes with Boost midsole technology and Primeknit upper.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 5,
    reviews: 198,
    inStock: true
  },
  {
    id: 25,
    name: "Vintage Denim Jacket",
    price: 89.99,
    description: "Classic denim jacket with distressed finish and comfortable fit.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4,
    reviews: 156,
    inStock: true
  },
  {
    id: 26,
    name: "Hoodie Pullover",
    price: 54.99,
    description: "Comfortable cotton blend hoodie with kangaroo pocket and drawstring hood.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4,
    reviews: 223,
    inStock: true
  },
  {
    id: 27,
    name: "Chino Pants",
    price: 49.99,
    description: "Versatile chino pants in multiple colors, perfect for casual and business casual wear.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4,
    reviews: 187,
    inStock: true
  },
  {
    id: 28,
    name: "Cashmere Scarf",
    price: 79.99,
    description: "Luxurious 100% cashmere scarf, soft and warm for cold weather.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 5,
    reviews: 94,
    inStock: true
  },
  {
    id: 29,
    name: "Leather Belt",
    price: 39.99,
    description: "Genuine leather belt with metal buckle, available in black and brown.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4,
    reviews: 145,
    inStock: true
  },
  {
    id: 30,
    name: "Baseball Cap",
    price: 24.99,
    description: "Classic cotton baseball cap with adjustable strap and embroidered logo.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4,
    reviews: 278,
    inStock: true
  },
  {
    id: 31,
    name: "Crossbody Bag",
    price: 69.99,
    description: "Stylish crossbody bag with multiple compartments and adjustable strap.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4,
    reviews: 167,
    inStock: true
  },
  {
    id: 32,
    name: "Wristwatch",
    price: 199.99,
    description: "Elegant analog wristwatch with stainless steel case and leather strap.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 5,
    reviews: 124,
    inStock: true
  },
  {
    id: 33,
    name: "Air Fryer",
    price: 89.99,
    description: "Digital air fryer with 6-quart capacity and multiple cooking presets.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 345,
    inStock: true
  },
  {
    id: 34,
    name: "Stand Mixer",
    price: 299.99,
    description: "Professional stand mixer with multiple attachments and 5-quart bowl.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop",
    category: "home",
    rating: 5,
    reviews: 189,
    inStock: true
  },
  {
    id: 35,
    name: "Vacuum Cleaner",
    price: 179.99,
    description: "Cordless stick vacuum with powerful suction and HEPA filtration.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 267,
    inStock: true
  },
  {
    id: 36,
    name: "Blender",
    price: 79.99,
    description: "High-speed blender with 64oz pitcher and preset programs for smoothies.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 298,
    inStock: true
  },
  {
    id: 37,
    name: "Rice Cooker",
    price: 49.99,
    description: "Automatic rice cooker with steamer basket and keep-warm function.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 156,
    inStock: true
  },
  {
    id: 38,
    name: "Throw Pillow Set",
    price: 34.99,
    description: "Set of 4 decorative throw pillows with removable covers in various patterns.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 123,
    inStock: true
  },
  {
    id: 39,
    name: "Area Rug",
    price: 149.99,
    description: "Modern geometric area rug, 5x7 feet, machine washable and stain resistant.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 89,
    inStock: true
  },
  {
    id: 40,
    name: "Wall Art Canvas",
    price: 59.99,
    description: "Abstract canvas wall art, ready to hang, perfect for modern home decor.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop",
    category: "home",
    rating: 5,
    reviews: 67,
    inStock: true
  },
  {
    id: 41,
    name: "Mechanical Keyboard",
    price: 159.99,
    description: "RGB mechanical gaming keyboard with Cherry MX switches and programmable keys.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 5,
    reviews: 234,
    inStock: true
  },
  {
    id: 42,
    name: "Webcam HD",
    price: 89.99,
    description: "1080p HD webcam with auto-focus and built-in microphone for video calls.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 178,
    inStock: true
  },
  {
    id: 43,
    name: "Power Bank",
    price: 39.99,
    description: "20000mAh portable power bank with fast charging and multiple USB ports.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 445,
    inStock: true
  },
  {
    id: 44,
    name: "USB-C Hub",
    price: 49.99,
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging.",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 156,
    inStock: true
  },
  {
    id: 45,
    name: "Desk Organizer",
    price: 29.99,
    description: "Bamboo desk organizer with multiple compartments for office supplies.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home",
    rating: 4,
    reviews: 98,
    inStock: true
  },
  {
    id: 46,
    name: "Yoga Mat",
    price: 34.99,
    description: "Non-slip yoga mat with carrying strap, perfect for home workouts.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4,
    reviews: 267,
    inStock: true
  },
  {
    id: 47,
    name: "Water Bottle",
    price: 19.99,
    description: "Insulated stainless steel water bottle, 32oz capacity, keeps drinks cold for 24 hours.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 5,
    reviews: 189,
    inStock: true
  },
  {
    id: 48,
    name: "Phone Case",
    price: 24.99,
    description: "Protective phone case with wireless charging compatibility and screen protection.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
    category: "accessories",
    rating: 4,
    reviews: 334,
    inStock: true
  },
  {
    id: 49,
    name: "Car Charger",
    price: 14.99,
    description: "Dual USB car charger with fast charging technology and LED indicator.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    category: "electronics",
    rating: 4,
    reviews: 156,
    inStock: true
  },
  {
    id: 50,
    name: "Polo Shirt",
    price: 39.99,
    description: "Classic cotton polo shirt with collar and button placket, available in multiple colors.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "clothing",
    rating: 4,
    reviews: 145,
    inStock: true
  }
];

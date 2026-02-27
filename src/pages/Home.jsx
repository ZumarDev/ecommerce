import Best from "../components/Home/Best";
import Fashion from "../components/Home/Fashion";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import SelectedProducts from "../components/Home/SelectedProducts";

export default function Home() {
  const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    description: "Apple A17 Pro chip, 128GB, Titanium корпус.",
    price: 1399,
    discountPrice: 1299,
    currency: "USD",
    brand: "Apple",
    category: "smartphones",
    stock: 12,
    rating: 4.8,
    reviewsCount: 245,
    images: '',
    isFeatured: true,
    createdAt: "2026-02-01"
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    slug: "samsung-galaxy-s24",
    description: "Snapdragon 8 Gen 3, 256GB, 120Hz AMOLED.",
    price: 1099,
    discountPrice: 999,
    currency: "USD",
    brand: "Samsung",
    category: "smartphones",
    stock: 8,
    rating: 4.6,
    reviewsCount: 180,
    images: [
      "/images/galaxy-s24-1.jpg",
      "/images/galaxy-s24-2.jpg",
    ],
    isFeatured: false,
    createdAt: "2026-01-20"
  },
  {
    id: 3,
    title: "MacBook Air M3",
    slug: "macbook-air-m3",
    description: "13-inch, 16GB RAM, 512GB SSD.",
    price: 1799,
    discountPrice: null,
    currency: "USD",
    brand: "Apple",
    category: "laptops",
    stock: 5,
    rating: 4.9,
    reviewsCount: 98,
    images: [
      "/images/macbook-m3-1.jpg",
      "/images/macbook-m3-2.jpg",
    ],
    isFeatured: true,
    createdAt: "2026-01-15"
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    slug: "sony-wh1000xm5",
    description: "Noise Cancelling, 30h battery.",
    price: 399,
    discountPrice: 349,
    currency: "USD",
    brand: "Sony",
    category: "headphones",
    stock: 20,
    rating: 4.7,
    reviewsCount: 320,
    images: [
      "/images/sony-xm5-1.jpg",
      "/images/sony-xm5-2.jpg",
    ],
    isFeatured: false,
    createdAt: "2026-02-10"
  }
];
  return (
    <main>
      <Hero/>
      <Features/>
      <Best data={products}/>
      <Fashion />
      <SelectedProducts data={products}/>
    </main>
  )
}

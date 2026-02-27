import { useParams } from "react-router"
import Products from "../components/Products";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiShare2, } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
export default function ProductDetail() {
    const param = useParams();

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

    const filteredProduct = products.filter((e) => +e.id === +param.productId);

    console.log(filteredProduct);
    const {title, reviewsCount, price, discountPrice, rating, stock} = filteredProduct[0];
    console.log(title, reviewsCount, price, discountPrice, rating, stock )
    return (
        <section>
            <div className="container">
                <div className="flex gap-1 items-center">
                    <span>Ecommerce</span>
                    <MdKeyboardArrowRight />
                    <span>
                        {
                            filteredProduct[0].title
                        }
                    </span>
                </div>

                <div className="flex gap-2 mt-4 mb-44">
                    <div className="border grow">Image</div>
                    <div className="grow-2 bg-lime-400">
                        <div className="flex items-center justify-between grow">
                            <h3 className="text-2xl font-bold text-gray-900">{title}</h3> <CiShare2 size={26} className="text-gray-900" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <FaStar className="text-gray-900" />
                                <p>{rating}</p>
                                <p>-</p>
                                <p>{reviewsCount}Review</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* suggestion */}
                <div className="flex items-center justify-between gap-5">
                    {
                        products.map((e, i) => <Products key={i} item={e} />)
                    }
                </div>
            </div>
        </section>
    )
}

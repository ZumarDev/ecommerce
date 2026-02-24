import Button from "../../UI/Button";

export default function Hero() {
    return (
        <section className="bg-white-100 py-34">
            <div className="container">
                    <h1 className="text-gray-800 font-semibold tracking-3 text-[32px]">Fresh Arrivals Online</h1>

                    <p className="text-sm leading-175 text-gray-600 mt-3 mb-12">
                        Discover Our Newest Collection Today.
                    </p>

                    <Button arrow={true}>View Collection</Button>
            </div>
        </section>
    )
}

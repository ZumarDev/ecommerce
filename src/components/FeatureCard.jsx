
export default function FeatureCard({children, props}) {
    const {title, desc} = props;
    return (
        <div className="basis-82">
            <div className="bg-white-100 rounded-full w-12 h-12 flex items-center justify-center">
                {children}
            </div>

            <h3 className="font-semibold text-gray-800 mt-6 mb-3">{title}</h3>
            <p className="text-gray-500 leading-175 text-sm">{desc}</p>
        </div>
    )
}

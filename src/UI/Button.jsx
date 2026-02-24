import { LuArrowRight } from "react-icons/lu";

export default function Button({children, arrow=false}) {
    return (
        <button 
        className="bg-gray-900 rounded-sm flex items-center gap-3 text-white font-medium text-sm py-2.5 px-6 cursor-pointer group">
            {children}
            {
                arrow && <LuArrowRight className="text-white text-xl group-hover:translate-x-0.5" />
            }
        </button>
    )
}

import { useState } from "react";

export default function SelectedColor() {
    const colors = ['blue', 'yellow', 'green'];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleSelectedColor = (color) => {
        setSelectedColor(() => color);
    }
    return (
        <div className="mt-8">
            <h4 className="uppercase font-medium text-[12px] leading-6 mb-2.5">Available colors</h4>
            <div className="flex items-center gap-2.5">
                {
                    colors?.map((color, i) => {
                        return (
                            <div key={i} onClick={() => handleSelectedColor(color)} className={`${color === selectedColor ? 'border' : ''} rounded-full w-8 h-8 p-1`}>
                                <div className={`rounded-full bg-${color}-300 w-full h-full`}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

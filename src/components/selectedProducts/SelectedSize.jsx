import { useState } from "react";

export default function SelectedSize() {
    const sizes = ['s', 'm', 'x', 'xl', 'xxl'];

    const [selectSize, setSelectSize] = useState(sizes[0]);

    function handleSelectSize(size){
        setSelectSize(()=>size)
    }
    
    return (
        <div className="mt-4">
            <h4 className="leading-6 uppercase font-medium text-[12px]">select size</h4>

            <div className="flex items-center gap-2 pt-2.5">
                {
                    sizes?.map((size, i) => (<SizeBtn key={i} size={size} handleSelectSize={handleSelectSize} selectSize={selectSize}/>))
                }
            </div>
        </div>
    )
}

function SizeBtn({ size, handleSelectSize, selectSize }) {
    return (
        <button 
        onClick={()=>handleSelectSize(size)}
        className={`${size === selectSize && 'border-red-500 border-2'} uppercase w-10 h-10 border outline-none rounded-sm text-[12px] leading-6 font-medium`}>{size}</button>
    )
}

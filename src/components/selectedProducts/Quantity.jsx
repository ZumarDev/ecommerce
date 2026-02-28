import { useState } from "react"

export default function Quantity({stock}) {
    const [count, setCount] = useState(0)
    const inc = ()=>{
        setCount((prev)=>prev + 1);
        // if(count > stock){

        // }
    }

    const dec = ()=> setCount(prev=>prev - 1)

    return (
        <div className="mt-8">
            <h4 className="uppercase leading-6 font-medium text-[12px]">Quantity</h4>
            <div className="border mt-2.5 rounded-sm py-3 px-4 flex items-center gap-2 justify-between max-w-41">
                <button onClick={dec} className="text-3xl">-</button>
                <button className="text-3xl">{count}</button>
                <button onClick={inc} className="text-3xl">+</button>
            </div>
        </div>
    )
}

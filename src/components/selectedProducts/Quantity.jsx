import { useState } from "react"

export default function Quantity({stock}) {
    const [count, setCount] = useState(0);

    const inc = ()=>{
        if(count < stock){
            setCount((prev)=>prev + 1);
        }
    }

    const dec = ()=> {
        if(count > 0){
            setCount(prev=>prev - 1);
        }
    }

    return (
        <div className="mt-8">
            <h4 className="uppercase leading-6 font-medium text-[12px]">Quantity</h4>
            <div className="border mt-2.5 rounded-sm py-3 px-4 flex items-center gap-2 justify-between max-w-41">
                <button disabled={count <= 0} onClick={dec} className="text-3xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">-</button>
                <button className="text-3xl">{count}</button>
                <button disabled={count >= stock} onClick={inc} className="text-3xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">+</button>
            </div>
        </div>
    )
}

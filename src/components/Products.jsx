import { Link } from 'react-router'
import Shirt1 from '../assets/cover.png'

export default function Products({item}) {
  
  return (
    <Link to={`products/${item.id}`}>
        <img src={Shirt1} alt={'title'} className="bg-white-100 max-w-full max-h-full"/>
        <div>
            <p>{item?.title}</p>
            <div className='flex items-center gap-4 py-3'>
                <p className='py-0.5 px-4 border border-[#E6E7E8] rounded-[100px] text-[12px]'>{item?.stock > 0 ? 'in stock' : 'out of stock'}</p>
                <p className='text-gray-600'>${item?.price}</p>
            </div>
        </div>
    </Link>
  )
}

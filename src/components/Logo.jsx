import { Link } from 'react-router';

export default function Logo({children}) {
    return (
        <Link to={'/'} className='flex items-center gap-2'>
            {children}
            <span className='font-extrabold text-xl tracking-[-5%]'>Ecommerce</span>
        </Link>
    )
}

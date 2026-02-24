import { NavLink } from 'react-router'

export default function Links() {
    return (
        <>
            <ul className="flex items-center gap-10">
                <li>
                    <NavLink to={'/'} className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                        }`
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                        }`
                    }>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} className={({ isActive }) =>
                        `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                        }`
                    }>Contact</NavLink>
                </li>
            </ul>
        </>
    )
}

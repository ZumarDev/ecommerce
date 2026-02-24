import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
 
    <div className="border border-gray-300 rounded-md flex items-center gap-2 py-2.5 px-3.5">
        <CiSearch size={24} className="text-gray-500"/>
        <input type="text" placeholder="Search products" className="grow outline-none"/>
    </div>

  )
}

import { Link } from "react-router";

export default function Topbar() {
  return (
    <div className="bg-black py-2">
      <div className="container flex items-center justify-center gap-2 text-white">
        <p className="text-sm">Get 25% OFF on your first order.</p>
        <Link to={'/orders'} className="text-sm font-medium">Order now</Link>
      </div>
    </div>
  )
}

import { Link, useNavigate } from "react-router";


export default function NotFound() {
    const navigate = useNavigate();
    const handleBack = ()=> navigate(-1);
    return (
        <div className="container">
            <h1>404</h1>
            <h2>Page not found</h2>

            <div className="flex items-center gap-10">
                <Link className="bg-blue-400 py-3 px-5 text-white" to={'/'}>Back to home</Link>

                <button className="bg-blue-400 py-3 px-5 text-white" onClick={handleBack}>go back</button>
            </div>
        </div>
    )
}

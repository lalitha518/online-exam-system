import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="bg-gray-800 w-full h-12 flex items-center px-4 fixed top-0 left-0" >

                <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">OES</Link>
                <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Faqs</Link>
                <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Help!</Link>

                <div className="ml-auto flex space-x-4">
                    <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Login
                    </Link>
                    <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
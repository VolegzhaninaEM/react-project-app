import React from 'react';
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex items-center justify-between px-5 bg-gray-500 text-white">
            <span className="font-bold">React 2023</span>

            <span>
                <Link className="mr-2" to="/">Products</Link>
                <Link className="mr-2" to="/about">About</Link>
                <Link className="mr-2" to="/counter">Counter</Link>
                <Link to="/redux_counter">Redux counter</Link>
            </span>
        </nav>
    );
}

export default Navigation;
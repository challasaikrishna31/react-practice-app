import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-slate-300 p-2 m-2 rounded-lg w-48 h-screen">
            <ul className="flex flex-col">
                <li className="mb-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                    <Link to="/stopwatch">Stop Watch</Link>
                </li>
                <li className="mb-2">
                    <Link to="/employeeform">Employee Form</Link>
                </li>
                <li className="mb-2">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

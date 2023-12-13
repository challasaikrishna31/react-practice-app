import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Stop Watch', path: '/stopwatch' },
        { label: 'Employee Form', path: '/employeeform' },
        { label: 'Prop Drilling', path: '/propdrilling' },
        { label: 'Contact Error Page', path: '/contact' },
    ];
    return (
        <div className="  w-64 flex flex-col m-2 rounded-lg bg-slate-50">
            <div className="flex items-center justify-center h-14 border-b">
                <Link to="/"><span className="text-xl font-bold">Sai App</span></Link>
            </div>
            <div className="flex flex-col p-4">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="py-2 px-4 my-1 rounded-md hover:bg-slate-200"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;

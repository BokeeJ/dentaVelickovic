import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function MenuHide() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 20);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full flex justify-center text-white p-4 transition-transform duration-1000 ease-in-out z-50 ${isVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            {/* Društvene mreže */}

            {/* Mini meni */}
            <div className='flex justify-center items-center '>
                <ul className='flex lg:gap-5 gap-2 p-3 font-roboto'>
                    <NavLink to="/" className="relative group">
                        <span className="text-black">POČETNA</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to="/tim" className="relative group">
                        <span className="text-black">NAŠ TIM</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to="/usluge" className="relative group">
                        <span className="text-black">USLUGE</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to="/galerija" className="relative group">
                        <span className="text-black">GALERIJA</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to="/kontakt" className="relative group">
                        <span className="text-black">KONTAKT</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default MenuHide;

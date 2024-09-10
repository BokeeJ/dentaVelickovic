import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function MenuHide() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {

        setIsVisible(window.scrollY > 170);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={` fixed top-0 left-0 w-full flex justify-center right-0 top-0 bg-gray-200 text-white p-4 transition-transform duration-1000 ease-in-out z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div>
                <ul className=' flex lg:gap-5  gap-2 p-3  font-roboto '>
                    <NavLink to={'/'} className="relative group">
                        <a href="/pocetna" className="text-black">POČETNA</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/tim'} className="relative group">
                        <a href="/tim" className="text-black">NAŠ TIM</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/usluge'} className="relative group">
                        <a href="/usluge" className="text-black">USLUGE</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/galerija'} className="relative group">
                        <a href="/galerija" className="text-black">GALERIJA</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/kontakt'} className="relative group">
                        <a href="/kontakt" className="text-black">KONTAKT</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default MenuHide;

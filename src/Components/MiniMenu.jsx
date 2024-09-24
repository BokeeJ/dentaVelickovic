import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function MiniMenu() {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${showMenu ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50`}>
            <ul className='flex gap-5 font-roboto justify-center'>
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
    );
}

export default MiniMenu;

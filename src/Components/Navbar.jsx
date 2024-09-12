import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Dodato stanje za vidljivost

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleScroll = () => {
        setIsVisible(window.scrollY < 180); // Ažurirano da kontroliše vidljivost menija na osnovu skrola
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`flex justify-around items-center lg:flex-row flex-col transition-transform duration-300 ${isVisible ? '' : 'translate-y-[-100px]'}`}>
            <div className='m-4'>
                <img src="/4.png" alt="logo" className='w-[250px] h-[250px] rounded-full shadow-2xl shadow-white' />
            </div>
            <div className='m-6 lg:block hidden'>
                <ul className='flex gap-5 font-roboto'>
                    <NavLink to={'/'} className="relative group">
                        <span className="text-black">POČETNA</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/tim'} className="relative group">
                        <span className="text-black">NAŠ TIM</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/usluge'} className="relative group">
                        <span className="text-black">USLUGE</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/galerija'} className="relative group">
                        <span className="text-black">GALERIJA</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/kontakt'} className="relative group">
                        <span className="text-black">KONTAKT</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </ul>
            </div>
            <IoMenu size={45} color='black' className='lg:hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 active:scale-95 hover:bg-gray-200 p-2 rounded-md' onClick={handleToggle} />

            {/* Mobilni meni */}
            <div className={`fixed top-0 p-5 right-0 bg-gray-100 h-full transition-transform duration-300 lg:hidden ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='flex flex-col gap-5 font-roboto p-4'>
                    <NavLink to={'/'} className="relative group" onClick={handleToggle}>
                        <span className="text-black">POČETNA</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/tim'} className="relative group" onClick={handleToggle}>
                        <span className="text-black">NAŠ TIM</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/usluge'} className="relative group" onClick={handleToggle}>
                        <span className="text-black">USLUGE</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/galerija'} className="relative group" onClick={handleToggle}>
                        <span className="text-black">GALERIJA</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/kontakt'} className="relative group" onClick={handleToggle}>
                        <span className="text-black">KONTAKT</span>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
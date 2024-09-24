import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = (event) => {
        event.stopPropagation(); // Zaustavi propagaciju klika
        setToggle(!toggle); // Prebaci stanje menija
    };

    // useEffect koji prati promene u 'toggle' i loguje novu vrednost
    useEffect(() => {
        console.log('Toggle state:', toggle);

        // Zatvori meni kad se klikne bilo gde van menija
        const handleOutsideClick = () => {
            if (toggle) {
                setToggle(false);

            }
        };

        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [toggle]);

    return (
        <div className={`flex justify-around items-center lg:flex-row flex-col transition-transform duration-300`}>
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

            {/* Burger meni ikona, vidljiva samo kada je meni zatvoren */}
            {!toggle && (
                <IoMenu size={45} color='black' className='lg:hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 active:scale-95 hover:bg-gray-200 p-2 rounded-md' onClick={handleToggle} />
            )}

            {/* Mobilni meni */}
            <div className={`fixed top-0 right-0 p-5 bg-gray-300 h-full transition-transform duration-300 lg:hidden ${toggle ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
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

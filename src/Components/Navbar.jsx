import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-around items-center'>
            <div className='m-5'>
                <h1 className='text-white text-2xl font-roboto font-bold'>ORDINACIJA SVETLANA VELIČKOVIĆ</h1>
            </div>
            <div className='m-6' >
                <ul className='text-white flex gap-5 font-roboto '>
                    <NavLink to={'/'} className="relative group">
                        <a href="/pocetna" className="text-white">POČETNA</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/tim'} className="relative group">
                        <a href="/tim" className="text-white">NAŠ TIM</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/usluge'} className="relative group">
                        <a href="/usluge" className="text-white">USLUGE</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/galerija'} className="relative group">
                        <a href="/galerija" className="text-white">GALERIJA</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <NavLink to={'/kontakt'} className="relative group">
                        <a href="/kontakt" className="text-white">KONTAKT</a>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                </ul>
            </div>

        </div >
    )
}

export default Navbar
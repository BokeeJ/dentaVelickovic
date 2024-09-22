import React from 'react'
import { Link } from 'react-router-dom'
import Kontakt from '../Pages/Kontakt'

function ButtonKontakt() {
    return (
        <Link className='mt-5' to={'/kontakt'}>
            <button className='bg-gray-200 w-[100px] h-[50px] rounded-2xl text-l cursor-pointer font-roboto font-bold hover:bg-gray-800 hover:text-white transition-all duration-500 ease-in border border-gray-800 shadow-lg shadow-gray-600'>KONTAKT</button>
        </Link>
    )
}

export default ButtonKontakt
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//icons 
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function MenuHide() {
    const phone = '+3818121558'
    const email = 'urošvelicković4@gmail.com'


    return (
        <div className='flex justify-between bg-gray-100'>

            <div className='flex m-5 gap-3 lg:block lg:flex md:flex justify-center items-center hidden'>
                <a href="https://www.facebook.com/p/Stomatoloska-Ordinacija-DrLjiljana-Velickovic-100054528097498/?locale=sr_RS"
                    target='_blank' ><SiFacebook size={25} /></a>

                <a href="https://www.instagram.com/dental_ljiljana/?igsh=NGJ6cmJtaG0weGRn"
                    target='_blank'><SiInstagram size={25} /></a>

            </div>
            <div className='flex m-5 gap-3'>
                <a href={`tel:${phone}`}
                    target='_blank'
                    className='text-[15px] font-bold font-roboto flex gap-1'><LuPhone size={25} />065/812-15-58</a>
                <a href="https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=rs&sa=X&geocode=KUPdVe1Y_1lHMYMMXcmfDfFY&daddr=Branka+Radi%C4%8Devi%C4%87a+22a,+Lazarevac+11550&hl=sr"
                    className='text-[15px] font-bold font-roboto flex gap-1'
                    target='_blank'><CiLocationOn size={25} />Branka Radičevića 22a, Lazarevac 11550</a>

            </div>
        </div >
    );
}

export default MenuHide;

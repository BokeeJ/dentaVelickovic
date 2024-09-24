import React from 'react'
// react icons 
import { FaPhoneSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { Link } from 'react-router-dom';
function Footer() {
    const tel = '+381658121558'
    const mail = 'urosvelickovic4@gmail.com'
    return (
        <div className='flex justify-between p-5 items-center lg:flex-row md:flex-row flex-col bg-gray-50'>
            {/* logo */}
            <div>
                <Link to={'/'}>
                    <img src="/4.png" alt="logo" className='w-[250px] h-[250px] rounded-full shadow-2xl shadow-white' /></Link>
            </div>
            {/* kontakt */}
            <div className='flex flex-col gap-5 justify-center items-center'>
                <div className='gap-5 flex flex-col'>
                    <h4 className='font-roboto text-xl font-bold m-5'>KONTAKTIRAJTE NAS:</h4>
                    <a href={`tel:${tel}`} className='flex font-bold'><FaPhoneSquare size={25} />065/812-15-58</a>
                    <a href={`mailto:${mail}`} className='flex font-bold font-roboto'> <IoMail size={25} />urošveličković4@gmail.com</a>

                    <a className='flex font-bold font-roboto' href="https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=rs&sa=X&geocode=KUPdVe1Y_1lHMYMMXcmfDfFY&daddr=Branka+Radi%C4%8Devi%C4%87a+22a,+Lazarevac+11550&hl=sr" target='_blank'><FaLocationDot size={25} />Branka Radicevica 22a</a>
                </div>


                <hr className='border border-black w-[80%] m-5 lg:hidden md:hidden' />
            </div>

            {/* drustvene mreze */}
            <div className='flex flex-col gap-3 '>
                <div className='mb-10'>
                    <h4 className='font-roboto font-bold m-5 text-xl'>OSTANIMO POVEZANI:</h4>
                    <a href="https://www.facebook.com/p/Stomatoloska-Ordinacija-DrLjiljana-Velickovic-100054528097498/?locale=sr_RS"
                        target='_blank'
                        className='flex font-bold font-roboto mt-10 gap-1'><SiFacebook size={25} />Facebook</a>
                    <a href="https://www.instagram.com/dental_ljiljana/?igsh=NGJ6cmJtaG0weGRn"
                        target='_blank'
                        className='flex font-bold font-roboto mt-5 gap-1'><SiInstagram size={25} />Instagram</a>
                </div>

            </div>
        </div>
    )
}

export default Footer
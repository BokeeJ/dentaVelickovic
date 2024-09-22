import React from 'react'
import { FaPhoneSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
function Kontakt() {
    const tel = '+381658121558'
    const mail = 'urosvelickovic4@gmail.com'
    return (
        <div>
            <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>KONTAKT</h1>
            {/* Kontakt */}
            <div className='flex flex-col gap-2 m-5'>
                <a href="https://www.facebook.com/p/Stomatoloska-Ordinacija-DrLjiljana-Velickovic-100054528097498/?locale=sr_RS"
                    target='_blank'
                    className='flex font-bold font-roboto gap-1'><SiFacebook size={25} />Facebook</a>
                <a href="https://www.instagram.com/dental_ljiljana/?igsh=NGJ6cmJtaG0weGRn"
                    target='_blank'
                    className='flex font-bold font-roboto  gap-1'><SiInstagram size={25} />Instagram</a>
                <a href={`tel:${tel}`} className='flex font-bold'><FaPhoneSquare size={25} />065/812-15-58</a>
                <a href={`mailto:${mail}`} className='flex font-bold font-roboto'> <IoMail size={25} />urošveličković4@gmail.com</a>
                <a className='flex font-bold font-roboto' href="https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=rs&sa=X&geocode=KUPdVe1Y_1lHMYMMXcmfDfFY&daddr=Branka+Radi%C4%8Devi%C4%87a+22a,+Lazarevac+11550&hl=sr" target='_blank'><FaLocationDot size={25} />Branka Radicevica 22a</a>
            </div>
            {/* navigacija */}
            <div className='flex justify-center p-5 shadow-lg shadow-gray-200'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d91252.90787934202!2d20.179617546229935!3d44.37870788056938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4759ff58ed55dd43%3A0x58f10d9fc95d0c83!2sBranka%20Radi%C4%8Devi%C4%87a%2022a%2C%20Lazarevac%2011550!3m2!1d44.3787479!2d20.2620081!5e0!3m2!1ssr!2srs!4v1727002228837!5m2!1ssr!2srs" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Kontakt
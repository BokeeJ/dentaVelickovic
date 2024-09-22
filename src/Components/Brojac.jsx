import React, { useEffect, useState } from 'react'

///icons 
import { FaRegSmileBeam } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
function Brojac() {

    const [broj, setBroj] = useState(0);
    const [broj1, setBroj1] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setBroj(prevBroj => {
                if (prevBroj === 20) {
                    clearInterval(timer);
                    return prevBroj;
                }
                return prevBroj + 1;
            });
        }, 250);


        const timer2 = setInterval(() => {
            setBroj1(prevBroj => {
                if (prevBroj === 10000) {
                    clearInterval(timer2);
                    return prevBroj;
                }
                return prevBroj + 80;
            });
        }, 58);


        return () => {
            clearInterval(timer);
            clearInterval(timer2);
        };
    }, []);





    return (
        <div className='bg-[url(/brojac.webp)] bg-cover bg-center h-[300px] relative  items-center' >
            <div className='w-full h-full absolute bg-gray-200 opacity-80'></div>
            <div className='relative flex justify-around '>
                {/* zadovoljnih ljudi */}
                <div className='w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] border-4 border-black rounded-full  flex flex-col justify-center items-center  mt-10 '>
                    <FaRegSmileBeam size={35} />
                    <h5 className='font-bold font-roboto ml-8 lg:ml-11'>NASMEJANIH PACIJENATA</h5>
                    <h4 className='text-3xl font-bold mt-3'>{broj1}+</h4>
                </div>
                {/* godine iskustva */}
                <div className='w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] border-4 border-black rounded-full  flex flex-col justify-center items-center mt-10' >
                    <MdEditCalendar size={25} />
                    <h5 className='font-bold'>GODINA ISKUSTVA</h5>
                    <p className='text-3xl font-bold mt-5'>{broj}+</p>

                </div>
            </div>
        </div>
    )
}

export default Brojac
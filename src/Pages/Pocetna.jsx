import React from 'react'

function Home() {
    return (
        <div className='bg-cover relative bg-center h-screen  bg-[url(/pocetna.webp)] flex justify-center items-center opacity-'>
            <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent rounded-md'></div>
            <div className='absolute p-2 grid grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center mt-10 opacity-80'>
                <div className='bg-white lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black rounded-l-xl  hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px]'>
                    <img src="/zub1.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]' />
                    <h3 className='lg:text-xl  font-bold font-roboto'>IZBELJIVANJE</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto lg:block hidden'>ORDINACIJSKO I KUĆNO</h5>
                </div>
                <div className='bg-white  lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px] lg:rounded-none rounded-r-xl'>
                    <img src="/zub2.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]' />
                    <h3 className='lg:text-xl font-bold font-roboto'>PREVENTIVA</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto  lg:block hidden'>BESPLATAN PREGLED I SAVET</h5>
                </div>
                <div className='bg-white lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black lg:rounded-none rounded-l-xl hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px]'>
                    <img src="/zub3.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]' />
                    <h3 className='lg:text-xl font-bold font-roboto'>LEČENJE ZUBA</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto  lg:block hidden'>LEČENJE, POPRAVKA, VAĐENJE</h5>
                </div>
                <div className='bg-white lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black rounded-r-xl hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px]'>
                    <img src="/zub4.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]' />
                    <h3 className='lg:text-xl font-bold font-roboto'>PROTETIKA</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto  lg:block hidden'>ZUBNA PROTETIKA</h5>
                </div>


            </div>
        </div>
    )
}

export default Home
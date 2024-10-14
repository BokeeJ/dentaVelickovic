import React from 'react';
import Brojac from '../Components/Brojac';
import { motion } from 'framer-motion'
import Izbeljivanje from './Izbeljivanje';
import { Link } from 'react-router-dom';
function Home() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100

        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 5
            }
        }
    }
    return (
        <div className='bg-cover relative bg-center min-h-screen bg-[url(/pocetna.webp)] flex justify-center items-center flex-col'>
            <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent rounded-md'></div>

            <div className='flex lg:flex-row flex-col mt-10 gap-5'>
                {/* PRVA KARTICA */}
                <div className='relative  bg-white p-1 flex justify-center flex-col items-center shadow-xl shadow-black rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 transition-transform duration-500 ease-in-out w-[230px] h-[130px] md:w-[200px] md:h-[250px]'>
                    <Link to={'/izbeljivanje'} className="relative z-10">
                        <img src="/zub1.svg" alt="zub" className='w-[80px] h-[80px] md:w-[100px] md:h-[150px] transition-transform duration-500 ease-in-out hover:scale-110' />
                    </Link>
                    <h3 className='text-xl font-bold font-roboto relative z-10'>IZBELJIVANJE</h3>
                    <hr className='w-[80%] border-black border m-2 relative z-10' />
                    <h5 className='font-bold font-roboto md:block hidden relative z-10'>ORDINACIJSKO I KUĆNO</h5>
                </div>

                {/* DRUGA KARTICA */}
                <div className='relative bg-white p-1 flex justify-center flex-col rounded-2xl items-center shadow-xl shadow-black hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 transition-transform duration-500 ease-in-out w-[230px] h-[130px] md:w-[200px] md:h-[250px]'>
                    <Link to={'/preventiva'} className="relative z-10">
                        <img src="/zub2.svg" alt="zub" className='w-[80px] h-[80px] md:w-[100px] md:h-[150px] transition-transform duration-500 ease-in-out hover:scale-110' />
                    </Link>
                    <h3 className='text-xl font-bold font-roboto relative z-10'>PREVENTIVA</h3>
                    <hr className='w-[80%] border-black border m-2 relative z-10' />
                    <h5 className='font-bold font-roboto md:block hidden relative z-10'>PREGLED I SAVET</h5>
                </div>

                {/* TREĆA KARTICA */}
                <div className='relative bg-white p-1 flex justify-center flex-col rounded-2xl items-center shadow-xl shadow-black hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 transition-transform duration-500 ease-in-out w-[230px] h-[130px] md:w-[200px] md:h-[250px]'>
                    <Link to={'/lecenje'} className="relative z-10">
                        <img src="/zub3.svg" alt="zub" className='w-[80px] h-[80px] md:w-[100px] md:h-[150px] transition-transform duration-500 ease-in-out hover:scale-110' />
                    </Link>
                    <h3 className='text-xl font-bold font-roboto relative z-10'>LEČENJE ZUBA</h3>
                    <hr className='w-[80%] border-black border m-2 relative z-10' />
                    <h5 className='font-bold font-roboto md:block hidden relative z-10'>LEČENJE, POPRAVKA</h5>
                </div>

                {/* ČETVRTA KARTICA */}
                <div className='relative rounded-2xl bg-white p-1 flex justify-center flex-col items-center shadow-xl shadow-black hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 transition-transform duration-500 ease-in-out w-[230px] h-[130px] md:w-[200px] md:h-[250px]'>
                    <Link to={'/protetika'} className="relative z-10">
                        <img src="/zub4.svg" alt="zub" className='w-[80px] h-[80px] md:w-[100px] md:h-[150px] transition-transform duration-500 ease-in-out hover:scale-110' />
                    </Link>
                    <h3 className='text-xl font-bold font-roboto relative z-10'>PROTETIKA</h3>
                    <hr className='w-[80%] border-black border m-2 relative z-10' />
                    <h5 className='font-bold font-roboto md:block hidden relative z-10'>ZUBNA PROTETIKA</h5>
                </div>

                {/* PETA KARTICA */}
                <div className='relative bg-white p-1 flex justify-center flex-col items-center shadow-xl shadow-black rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 transition-transform duration-500 ease-in-out w-[230px] h-[130px] md:w-[200px] md:h-[250px]'>
                    <Link to={'/hirurgija'} className="relative z-10">
                        <img src="/hirurg.webp" alt="zub" className='w-[80px] h-[60px] md:w-[100px] md:h-[120px] relative transition-transform duration-500 ease-in-out hover:scale-110' />
                    </Link>
                    <h3 className='text-xl font-bold font-roboto relative z-10 lg:mt-7 mt-6'>ORALNA HIRURGIJA</h3>
                    <hr className='w-[80%] border-black border m-2 relative z-10' />
                    <h5 className='font-bold font-roboto md:block hidden relative z-10'>VAĐENJE ZUBA</h5>
                </div>
            </div>

            {/* nas tim */}
            <div className='mt-10'>
                <div >

                </div>
                <div className='flex justify-center'>
                    <img src="/veli.svg" className='lg:w-[50%] w-[80%] rounded-2xl opacity-80 hover:border-2 hover:border-black transition-all hover:shadow-lg hover:shadow-black' alt="zubar" />
                </div>

            </div>
            {/* brojac */}
            <div className='w-full m-5'>
                <Brojac />
            </div>
            {/* strucni tim */}
            <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }}
                className='flex justify-center items-center flex-col bg-white w-full h-full opacity-80'>
                <h1 className=' text-2xl m-5 font-roboto font-bold'>O NAMA</h1>
                <hr className='border border-black w-[190px]' />
                {/* slika1 */}
                <div className='flex justify-center lg:flex-row flex-col items-center m-5 relative'>
                    <img src="/Slika1.webp" alt="Velickovic" className='lg:w-[490px] lg:h-[410px] w-[250px] h-[280px] rounded shadow-xl shadow-black' />
                    <p className='text-center font-roboto font-bold lg:text-xl p-5'>
                        Naš stručni tim čine doktori stomatologije Uroš Veličković i Ljiljana Veličković, posvećeni pružanju vrhunske dentalne nege. Sa bogatim iskustvom i kontinuiranom edukacijom u najnovijim tehnikama, naši stomatolozi kombinuju stručnost i pažljiv pristup kako bi svakom pacijentu osigurali visok kvalitet usluga. Bilo da je u pitanju preventivna, estetska ili rekonstruktivna stomatologija, naš tim posvećuje vreme i pažnju individualnim potrebama svakog pacijenta, stvarajući prijatno iskustvo i dugotrajne rezultate
                    </p>
                </div>
                <hr className='border border-black w-[80%] lg:hidden' />
                <div className='flex lg:flex-row flex-col justify-center items-center m-5 relative'>
                    <p className='text-center font-roboto font-bold lg:text-xl p-5'>
                        Sa više od 20 godina iskustva, Uroš i Ljiljana Veličković posvećeni su poboljšanju zdravlja i izgleda osmeha svojih pacijenata. Kroz dugogodišnji rad, koriste najsavremenije tehnike i individualni pristup kako bi svakome pružili kvalitetne usluge. Njihova strast prema stomatologiji i neprestano usavršavanje čine ih pravim izborom za one koji žele lepši i zdraviji osmeh.
                    </p>
                    <img src="/slika2.webp" alt="Timski rad" className=' rounded lg:w-[490px] lg:h-[410px] w-[250px] h-[280px] shadow-xl shadow-black' />
                </div>
            </motion.div>
        </div>
    )
}

export default Home;

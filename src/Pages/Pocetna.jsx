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

            <div className='relative p-2 grid grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center mt-10 opacity-80'>
                <div className='bg-white lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black rounded-l-xl  hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px]'>
                    <Link to={'/izbeljivanje'}>
                        <img src="/zub1.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]' /></Link>
                    <h3 className='lg:text-xl  font-bold font-roboto'>IZBELJIVANJE</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto lg:block hidden'>ORDINACIJSKO I KUĆNO</h5>
                </div>
                <div className='bg-white  lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px] lg:rounded-none rounded-r-xl'>
                    <Link to={'/preventiva'}>
                        <img src="/zub2.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]' /></Link>
                    <h3 className='lg:text-xl font-bold font-roboto'>PREVENTIVA</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto  lg:block hidden'>BESPLATAN PREGLED I SAVET</h5>
                </div>
                <div className='bg-white lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black lg:rounded-none rounded-l-xl hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px]'>
                    <Link to={'/lecenje'}>
                        <img src="/zub3.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px]' /></Link>
                    <h3 className='lg:text-xl font-bold font-roboto'>LEČENJE ZUBA</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto  lg:block hidden'>LEČENJE, POPRAVKA, VAĐENJE</h5>
                </div>
                <div className='bg-white lg:p-5 p-1 flex justify-center flex-col items-center shadow-xl shadow-black rounded-r-xl hover:m-1 transition-all duration-700 lg:w-[250px] lg:h-[250px] w-[130px] h-[130px]'>
                    <Link to={'/protetika'}>
                        <img src="/zub4.svg" alt="zub" className='lg:w-[150px] lg:h-[150px] w-[80px] h-[80px] relative' /></Link>
                    <h3 className='lg:text-xl font-bold font-roboto'>PROTETIKA</h3>
                    <hr className='w-[80%] border-black border m-2' />
                    <h5 className='font-bold font-roboto  lg:block hidden'>ZUBNA PROTETIKA</h5>
                </div>
            </div>
            {/* nas tim */}
            <div className='mt-10'>
                <div >

                </div>
                <div className='flex justify-center'>
                    <img src="/veli.svg" className='lg:w-[50%] w-[80%] rounded-2xl opacity-80' alt="zubar" />
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

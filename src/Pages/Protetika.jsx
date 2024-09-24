import React from 'react'
import ButtonKontakt from '../Components/ButtonKontakt'
import { motion } from 'framer-motion'

function Protetika() {
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
                duration: 3
            }
        }
    }
    return (
        <motion.div
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}>
            <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>PROTETIKA</h1>
            <div className='flex justfy-center items-center bg-gray-200 lg:flex-row flex-col'>
                <img src="/dental1.webp" alt="izbeljivanje" className='lg:w-[50%] lg:h-[50%] p-5 ' />

                <div className=' lg:text-l p-5 flex flex-col items-center w-full lg:w-1/2 max-w-md mx-auto'>
                    <div className="p-5 ">
                        <h2 className="text-2xl font-bold font-roboto mb-4">IZRADA:</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="font-medium">Keramičke krunice (bezmetalne i metalokeramičke)</li>
                            <li className="font-medium">Totalne i parcijalne proteze</li>
                            <li className="font-medium">Silikonske i vizil proteze</li>
                        </ul>
                    </div>
                    <p className='text-center font-roboto font-semibold '>Stomatološka protetika je grana stomatologije koja se bavi nadoknadom izgubljenih tkiva usne duplje, odnosno estetskom i funkcionalnom rehabilitacijom usne duplje pacijenta koristeći krunice, mostove i proteze. Temelji se na čvrstim biološkim osnovama, a izrada svake zubne nadoknade je medicinski zahvat. Izrada protetske nadoknade ima terapijski smisao samo ako se njom postiže obnavljanje funkcija kod pacijenta. Najčešće funkcionalne smetnje odnose se na nedostatak jednog ili više zuba (tegobe u viličnim zglobovima, povećana pokretljivost zuba, promena položaja preostalih zuba kao posledica parodontopatije).

                        <span className='lg:block hidden'>Kod gubitka većeg broja zuba dolazi do drastičnog smanjenja efikasnosti žvakanja, smanjenja vertikalne dimenzije lica, promena u međuviličnim odnosima i sl. Rešenje ovakve situacije je protetsko zbrinjavanje. Poslednjih godina podjednaka pažnja je usmerena kako na funkcionalnu rehabilitaciju tako i na estetsku rehabilitaciju. Da bismo ostvarili ove ciljeve u našoj ordinaciji koristimo najsavremenije metode i materijale u izradi protetskih nadoknada (bezmetalna keramika-zirconia, alumina, empress, itd).</span></p>
                    <ButtonKontakt />
                </div>
            </div>
        </motion.div>
    )
}

export default Protetika
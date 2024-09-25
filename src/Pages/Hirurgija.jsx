import React from 'react'
import { motion } from 'framer-motion'
import ButtonKontakt from '../Components/ButtonKontakt'
function Hirurgija() {
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

            }
            }>
            <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>ORALNA HIRURGIJA</h1>
            <div className='flex justfy-center items-center bg-gray-200 lg:flex-row flex-col'>
                <img src="/dental3.webp" alt="izbeljivanje" className='lg:w-[50%] lg:h-[50%] p-5' />
                <div className='w-full lg:text-l p-5 flex flex-col items-center'>
                    <p className='text-center font-roboto font-semibold '>
                        Oralna hirurgija je specijalistička stomatološka oblast koja se bavi dijagnostikom i terapijom mnogih oboljenja i stanja u usnoj duplji.

                        <br /><br />
                        Vađenje zuba

                        je jedna od najčešćih procedura u oralnoj hirurgiji je vađenje zuba, koje se obavlja kada zub više nije funkcionalan ili predstavlja zdravstveni rizik za pacijenta. Postoji nekoliko razloga zbog kojih može biti potrebno izvaditi zub,zakažite pregled ispod.</p>
                    <ButtonKontakt />
                </div>

            </div>

        </motion.div>
    )
}


export default Hirurgija
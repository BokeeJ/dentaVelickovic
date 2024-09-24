import React from 'react'
import { motion } from 'framer-motion'

function Tim() {
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
    const fadeInAnimationVariant = {
        initial: {
            opacity: 0,
            y: -100

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
        <div>
            <div className='flex justify-center items-center w-full flex-col' >
                <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>NAŠ TIM</h1>

            </div>

            <div className='flex lg:flex-row flex-col'>
                {/* ljiljana velickovic */}
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='lg:w-[50%] flex flex-col lg:flex-row p-5 shadow-xl shadow-gray-500'>
                    <img src="/slika2.webp" className='h-[500px] lg:p-0 p-2' alt="Tim" />
                    <div className='flex justify-center flex-col items-center bg-gray-100 p-2'>
                        <h5 className='text-2xl m-5 font-bold font-roboto'> Dr. Ljiljana Veličković</h5>
                        <p className='text-center font-roboto font-semibold'>Ljiljana Veličković je specijalista stomatološke protetike sa više od 30 godina iskustva u svom polju.Tokom svoje karijere pohađalaje broje edukacije i kongrese gde je usavršavala svoje znanjei presmeravalau svoju praksu kako bi pruzala što bolji tretman svojim pacijentima.</p></div>

                </motion.div>
                {/* uros velickovic */}
                <motion.div
                    variants={fadeInAnimationVariant}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className='lg:w-[50%] flex flex-col lg:flex-row p-5 shadow-xl shadow-gray-500'>
                    <img src="/Slika1.webp" className='h-[500px] lg:p-0 p-2' alt="Tim" />
                    <div className='flex justify-center flex-col items-center bg-gray-100 p-2'>
                        <h5 className='text-2xl m-5 font-bold font-roboto'> Dr. Uroš Veličković</h5>
                        <p className='text-center font-roboto font-semibold'>Uroš Veličković je stomatolog sa više od 10 godina iskustva, poznat po svojoj posvećenosti pacijentima i visokim standardima u pružanju stomatološke zaštite. Njegova stručnost obuhvata širok spektar stomatoloških tretmana, od preventivnih mera do složenih procedura, uvek sa ciljem da pruži najbolju moguću negu.</p>
                    </div>
                </motion.div>
            </div>

        </div >
    )
}

export default Tim
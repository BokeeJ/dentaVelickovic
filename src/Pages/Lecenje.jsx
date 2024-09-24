import React from 'react'
import ButtonKontakt from '../Components/ButtonKontakt'
import { motion } from 'framer-motion'

function Lecenje() {
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
            <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>LEČENJE ZUBA</h1>
            <div className='flex justfy-center items-center bg-gray-200 lg:flex-row flex-col'>
                <img src="/plombe.webp" alt="izbeljivanje" className='lg:w-[50%] lg:h-[50%] p-5' />
                <div className='w-full lg:text-l p-5 flex flex-col items-center'>
                    <p className='text-center font-roboto font-semibold '>Lečenje zuba je ključni deo stomatološke nege, usmereno na očuvanje zuba i zdravlja usne šupljine. Kada zub oboli usled karijesa, traume ili infekcije, pravovremena intervencija može sprečiti dalja oštećenja i eventualni gubitak zuba. Najčešći tretmani uključuju plombiranje, lečenje kanala korena, kao i tretman bolesti desni.

                        <span className='lg:block hidden'>Plombiranje zuba koristi se za popravku oštećenih delova zuba koje je zahvatio karijes, dok je lečenje kanala korena (endodoncija) neophodno kada infekcija zahvati unutrašnjost zuba i njegov nerv. Ovaj tretman omogućava uklanjanje infekcije i očuvanje prirodnog zuba.

                            U zavisnosti od težine problema, tretmani lečenja zuba mogu varirati, ali su svi usmereni na vraćanje funkcionalnosti zuba i očuvanje oralnog zdravlja. Redovni stomatološki pregledi su ključni kako bi se problemi na vreme otkrili i tretirali, osiguravajući dugovečnost i zdravlje zuba.</span>  </p>
                    <ButtonKontakt />
                </div>

            </div>

        </motion.div>
    )
}

export default Lecenje
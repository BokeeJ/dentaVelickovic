import React from 'react'
import ButtonKontakt from '../Components/ButtonKontakt'

function Protetika() {
    return (
        <div>
            <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>PROTETIKA</h1>
            <div className='flex justfy-center items-center bg-gray-200 lg:flex-row flex-col'>
                <img src="/dental1.webp" alt="izbeljivanje" className='lg:w-[50%] lg:h-[50%] p-5 ' />

                <div className='w-[50%] lg:text-l p-5 flex flex-col items-center'>
                    <p className='text-center font-roboto font-semibold '>Stomatološka protetika je grana stomatologije koja se bavi nadoknadom izgubljenih tkiva usne duplje, odnosno estetskom i funkcionalnom rehabilitacijom usne duplje pacijenta koristeći krunice, mostove i proteze. Temelji se na čvrstim biološkim osnovama, a izrada svake zubne nadoknade je medicinski zahvat. Izrada protetske nadoknade ima terapijski smisao samo ako se njom postiže obnavljanje funkcija kod pacijenta. Najčešće funkcionalne smetnje odnose se na nedostatak jednog ili više zuba (tegobe u viličnim zglobovima, povećana pokretljivost zuba, promena položaja preostalih zuba kao posledica parodontopatije)

                        <span className='lg:block hidden'>Kod gubitka većeg broja zuba dolazi do drastičnog smanjenja efikasnosti žvakanja, smanjenja vertikalne dimenzije lica, promena u međuviličnim odnosima i sl. Rešenje ovakve situacije je protetsko zbrinjavanje. Poslednjih godina podjednaka pažnja je usmerena kako na funkcionalnu rehabilitaciju tako i na estetsku rehabilitaciju. Da bismo ostvarili ove ciljeve u našoj ordinaciji koristimo najsavremenije metode i materijale u izradi protetskih nadoknada (bezmetalna keramika-zirconia, alumina, empress, itd)</span> .</p>
                    <ButtonKontakt />
                </div>
            </div>
        </div>
    )
}

export default Protetika
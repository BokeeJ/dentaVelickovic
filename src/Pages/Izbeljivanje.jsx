import React from 'react'
import ButtonKontakt from '../Components/ButtonKontakt'

function Izbeljivanje() {
    return (
        <div>
            <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>IZBELJIVANJE</h1>
            <div className='flex justfy-center items-center bg-gray-200 lg:flex-row flex-col'>
                <img src="/dental2.webp" alt="izbeljivanje" className='lg:w-[50%] lg:h-[50%] p-5 ' />

                <div className=' w-[50%] lg:text-l p-5 flex flex-col items-center'>
                    <p className='text-center font-roboto font-semibold'>Izbeljivanje zuba je jedan od najpopularnijih estetskih stomatoloških tretmana koji ima za cilj da osveži i posvetli prirodnu boju zuba, uklanjajući fleke i promene boje nastale usled konzumiranja hrane, pića ili starenja. Ovaj bezbedan i brz postupak omogućava pacijentima da dobiju sjajniji i belji osmeh bez oštećenja zubne gleđi.

                        <span className='lg:block hidden'>Postoji nekoliko tehnika izbeljivanja, uključujući profesionalno izbeljivanje u ordinaciji i kućne tretmane sa individualno prilagođenim udlagama. Profesionalni tretmani obično daju brže i trajnije rezultate zahvaljujući korišćenju snažnijih sredstava i kontrolisanom postupku.

                            Rezultati izbeljivanja mogu trajati mesecima, zavisno od oralne higijene i životnih navika, kao što su konzumiranje kafe, vina ili pušenje. Izbeljivanje je jednostavan način da osvežite izgled svog osmeha i povećate samopouzdanje.</span> </p>
                    <ButtonKontakt />
                </div>
            </div>

        </div>
    )
}

export default Izbeljivanje
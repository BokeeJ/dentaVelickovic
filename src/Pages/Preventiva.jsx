import React from 'react'
import ButtonKontakt from '../Components/ButtonKontakt'
function Preventiva() {
    return (
        <div>
            <h1 className='bg-gray-100 w-full flex justify-center items-center h-[200px] text-3xl font-bold font-roboto'>PREVENTIVA</h1>
            <div className='flex justfy-center items-center bg-gray-200 lg:flex-row flex-col'>
                <img src="/dental4.webp" alt="izbeljivanje" className='lg:w-[50%] lg:h-[600px] h-[400px] p-5' />
                <div className='w-[50%] lg:text-l p-5 flex flex-col items-center'>
                    <p className='text-center font-roboto font-semibold'>Preventiva u stomatologiji igra ključnu ulogu u održavanju zdravih zuba i desni, pomažući da se izbegnu ozbiljniji problemi u budućnosti. Redovne posete stomatologu, najmanje dva puta godišnje, omogućavaju rano otkrivanje karijesa, bolesti desni i drugih oralnih problema, pre nego što postanu ozbiljni.

                        <span className='lg:block hidden'>Pored profesionalnih pregleda, pravilna svakodnevna higijena, uključujući temeljno pranje zuba i upotrebu zubnog konca, je od suštinskog značaja. Ove navike pomažu u sprečavanju nakupljanja plaka, koji je glavni uzrok karijesa i bolesti desni. Takođe, preporučuje se smanjenje unosa šećera i gaziranih pića, kao i redovno korišćenje pasti sa fluoridom, koji jača zubnu gleđ.

                            Preventivna nega ne samo da čuva zdravlje zuba, već doprinosi i boljem opštem zdravlju, jer je poznato da loša oralna higijena može biti povezana sa brojnim sistemskim bolestima.</span> </p>
                    <ButtonKontakt />
                </div>

            </div>

        </div>
    )
}

export default Preventiva
import React from 'react'
import Lecenje from '../Pages/Lecenje'
import Izbeljivanje from '../Pages/Izbeljivanje'
import Protetika from '../Pages/Protetika'
import Preventiva from '../Pages/Preventiva'
import Hirurgija from '../Pages/Hirurgija'

function Usluge() {
    return (
        <div>
            <Lecenje />
            <Izbeljivanje />
            <Protetika />
            <Preventiva />
            <Hirurgija />
        </div>
    )
}

export default Usluge
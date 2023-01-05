import React from 'react'
import {ClimaContext} from '../context/ClimaContext'
import {useContext} from 'react'


const Clima = () => {

    const { results, load } = useContext(ClimaContext)

    //grados Kelvin:
    const gradosKelvin = 273.15

    return (
        <div className='container-clima'>
            <h2>Clima de {results.name}</h2>
            <p>La temperatura actual es: {parseInt(results.main.temp - gradosKelvin)}<span>&#x2103;</span></p>
        </div>
    )
}

export default Clima
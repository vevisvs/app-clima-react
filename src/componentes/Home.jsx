import React from 'react'
import Formulario from './Formulario'
import Clima from './Clima'
import {ClimaContext} from '../context/ClimaContext'
import { useContext } from 'react'
import Spinner from './Spinner'

const Home = () => {

  const { results, error, load } = useContext(ClimaContext)

  return (
    <div>
        <main className='columns'>
            <Formulario />
            { load ? <Spinner /> : results?.name ? <Clima /> : error ? <p>{error}</p> : <p>texto</p>} 
            <Clima />
        </main>
    </div>
  )
}

export default Home
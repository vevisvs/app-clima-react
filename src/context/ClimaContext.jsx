import {useState, createContext} from 'react'
import axios from 'axios'

export const ClimaContext = createContext() //creo el contexto

export const ClimaProvider = ({children}) => {
    //console.log(import.meta.env.VITE_API_KEY) esto muestra en consola la api-key

    const [search, setSearch] = useState({ //data inicial o por defecto (inputs vacios)
        ciudad: '',
        pais: '',
    })

    const [results, setResults] = useState({})
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    //esta función toma los datos de la búsqueda
    const dataSearch = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    }

    //esta es la funcion de consulta que se conectará con la api del clima:
    const consulta = async datos => {
        setLoad(true)
        try {
            //se realizan 2 consultas a la api
            const { ciudad, pais } = datos
            const idAplication = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${idAplication}`
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            const clima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${idAplication}`
            const { data: climaApp } = await axios(clima)
            setResults(climaApp)
        } catch (error){
            setError('Ingrese un nombre de ciudad válido')
        }
        setLoad(false)
    }

    return(
        <ClimaContext.Provider value={{search, dataSearch, consulta, results, error, load}}>
            {children}
        </ClimaContext.Provider>
    )
}


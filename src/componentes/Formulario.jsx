import React from 'react'
import { useContext } from 'react'
import ClimaContext from '../context/ClimaContext'
import {useState} from 'react'

const Formulario = () => {

    const {search, dataSearch, consulta} = useContext(ClimaContext)
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setMessage('Todos los campos son obligatorios')
            return
        }
        consulta(search)
    }

    return (
        <div className='container'>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <input type='text' name='ciudad' onChange={dataSearch} value={search.ciudad}/>

                    <label htmlFor='pais'>Pais</label>
                    <select id='pais' name='pais' onChange={dataSearch} value={search.pais}>
                        <option value=""></option>
                        <option value="AR">Argentina</option>
                        <option value="BO">Bolivia</option>
                        <option value="BR">Brasil</option>
                        <option value="CO">Colombia</option>
                        <option value="CL">Chile</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CU">Cuba</option>
                        <option value="EC">Ecuador</option>
                        <option value="SV">El Salvador</option>
                        <option value="ES">España</option>
                        <option value="GT">Guatemala</option>
                        <option value="HN">Honduras</option>
                        <option value="MX">Mexico</option>
                        <option value="NI">Nicaragua</option>
                        <option value="PA">Panamá</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Perú</option>
                        <option value="DO">República Dominicana</option>
                        <option value="UY">Uruguay</option>
                        <option value="VE">Venezuela</option>
                    </select>
                </div>
                <input type='submit' value='Consultar'></input>
            </form>
        </div>
    )
}

export default Formulario
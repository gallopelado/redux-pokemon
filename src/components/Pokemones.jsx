import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { obtenerPokemonesAccion } from '../redux/pokeDucks'

export const Pokemones = () => {

    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)
    
    return (
        <div>
            <h2>Lista de pokemones</h2>
            <button onClick={ ()=> dispatch(obtenerPokemonesAccion()) }>Get Pokemones</button>
            <ul>
                {
                    pokemones.map((item,i) => (
                        <li key={i}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

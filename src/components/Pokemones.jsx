import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { obtenerPokemonesAccion, siguientePokemonesAccion, anteriorPokemonesAccion } from '../redux/pokeDucks'

export const Pokemones = () => {

    const dispatch = useDispatch()
    const { results, next, previous } = useSelector(store => store.pokemones)

    
    return (
        <div>
            <h2>Lista de pokemones</h2>
            
            {
                results.length===0 ? <button onClick={ () => dispatch(obtenerPokemonesAccion()) }>Get Pokemones</button> : ''
            }

            {
                previous ? <button onClick={ () => dispatch(anteriorPokemonesAccion()) }>Previous results</button> : ''
            }
        
            {
                next ? <button onClick={ () => dispatch(siguientePokemonesAccion()) }>Next results</button> : ''
            }
            
            
            <ul>
                {
                    results.map((item,i) => (
                        <li key={i}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

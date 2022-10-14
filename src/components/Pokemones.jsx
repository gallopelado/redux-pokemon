import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { obtenerPokemonesAccion, siguientePokemonesAccion, anteriorPokemonesAccion, obtenerUnPokemon } from '../redux/pokeDucks'
import { Detalle } from './Detalle'

export const Pokemones = () => {

    const dispatch = useDispatch()
    const { results, next, previous } = useSelector(store => store.pokemones)

    useEffect(()=> {
        dispatch(obtenerPokemonesAccion())
    }, [dispatch])
    
    return (
        <div className='container mt-4'>
            <h2>Lista de pokemones</h2>
            <div className="row">
                <div className="col-4">
                    {
                    results.length===0 ? <button className='btn btn-primary' onClick={ () => dispatch(obtenerPokemonesAccion()) }>Get Pokemones</button> : ''
                    }

                    {
                        previous ? <button className='btn btn-primary' onClick={ () => dispatch(anteriorPokemonesAccion()) }>Previous results</button> : ''
                    }
                
                    {
                        next ? <button className='btn btn-primary ms-1' onClick={ () => dispatch(siguientePokemonesAccion()) }>Next results</button> : ''
                    }
                    
                    
                    <ul className='list-group mt-2'>
                        {
                            results.map((item,i) => (
                                <li className='list-group-item' key={i}>{item.name} <button type='button' className='btn btn-primary float-end' onClick={ () => dispatch(obtenerUnPokemon(item.url))}>Info</button></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-6 mt-5">
                    <Detalle />
                </div>
            </div>
            
        </div>
    )
}

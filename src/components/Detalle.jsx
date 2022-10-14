import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerUnPokemon } from '../redux/pokeDucks'

export const Detalle = () => {

    const dispatch = useDispatch()
    const pokemon = useSelector(store => store.pokemones.un_pokemon)

    useEffect(() => {
        const recibir = () => {
            dispatch(obtenerUnPokemon())
        }
        recibir()
    }, [dispatch])

    return pokemon ? (
        <div className='card text-center'>
            <div className="card-header text-uppercase">{ pokemon.name }</div>
            <img src={pokemon.sprites.front_default} alt="imagen_pokemon" />
            <div className="card-body">
            </div>
        </div>
    ) : ''
}

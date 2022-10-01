import axios from 'axios'

// constantes
const dataInicial = {
    array: []
    , offset: 0
}

// types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const LISTAR_POKEMONES_EXITO = 'LISTAR_POKEMONES_EXITO'

// reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type) {
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload}
        case LISTAR_POKEMONES_EXITO:
            return {...state, array: action.payload.results, offset: action.payload.offset}
        default:
            return state
    }
}

// acciones
export const obtenerPokemonesAccion = () => async(dispatch, getState) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        dispatch({
           type: OBTENER_POKEMONES_EXITO
           , payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const listarPokemonesAccion = (numero) => async(dispatch, getState) => {
    console.log(getState().pokemones.offset)
    const { offset } = getState().pokemones
    const valor = offset + numero
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${valor}&limit=20`)
        dispatch({
            type: LISTAR_POKEMONES_EXITO
            , payload: { results: res.data.results, offset: valor }
        })       
    } catch (error) {
        console.log(error)
    }
}
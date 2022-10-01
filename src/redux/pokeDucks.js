import axios from 'axios'

// constantes
const dataInicial = {
    // array: []
    // , offset: 0
    count: 0
    , next: ''
    , previous: ''
    , results: []
}

// types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const ANTERIOR_POKEMONES_EXITO = 'ANTERIOR_POKEMONES_EXITO'

// reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type) {
        case OBTENER_POKEMONES_EXITO:
            return { ...state, ...action.payload }
        case SIGUIENTE_POKEMONES_EXITO:
            return { ...state, ...action.payload }
        case ANTERIOR_POKEMONES_EXITO:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

// acciones
export const obtenerPokemonesAccion = () => async(dispatch, getState) => {
    if(localStorage.getItem('offset=0')){
        dispatch({
            type: OBTENER_POKEMONES_EXITO
            , payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        dispatch({
           type: OBTENER_POKEMONES_EXITO
           , payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonesAccion = () => async(dispatch, getState) => {
    const { next } = getState().pokemones
    if(localStorage.getItem(next)){
        dispatch({
            type: OBTENER_POKEMONES_EXITO
            , payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }
    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO
            , payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))       
    } catch (error) {
        console.log(error)
    }
}

export const anteriorPokemonesAccion = () => async(dispatch, getState) => {
    const { previous } = getState().pokemones
    if(localStorage.getItem(previous)){
        dispatch({
            type: OBTENER_POKEMONES_EXITO
            , payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }
    try {
        const res = await axios.get(previous)
        dispatch({
            type: ANTERIOR_POKEMONES_EXITO
            , payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}
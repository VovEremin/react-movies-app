import {SET_FILMS, SET_IS_LOADED} from "../types";

const initialState = {
    films: [],
    isLoaded: true
}

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.payload
            }
        case SET_IS_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}
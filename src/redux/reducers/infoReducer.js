import {SET_GENRE, SET_INPUT_VALUE, SET_RATING} from "../types";

const initialState = {
    inputValue: '',
    genre: [],
    rating: []
}

export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload
            }
        case SET_GENRE:
            let newGenre = [...state.genre]
            if(newGenre.includes(action.payload)) {
                newGenre = newGenre.filter(item => item !== action.payload)
            } else {
                newGenre.push(action.payload)
            }
            return {
                ...state,
                genre: [...newGenre]
            }
        case SET_RATING:
            let newRating = [...state.rating]
            if(newRating.includes(action.payload)) {
                newRating = newRating.filter(item => item !== action.payload)
            } else {
                newRating.push(action.payload)
            }
            return {
                ...state,
                rating: [...newRating]
            }
        default:
            return state
    }
}
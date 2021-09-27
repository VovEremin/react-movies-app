import {SET_FILMS, SET_IS_LOADED} from "../types";
import {filmsAPI} from "../../api/api";

export const setFilms = (array) => ({
    type: SET_FILMS,
    payload: array
})

export const setIsLoaded = (value) => ({
    type: SET_IS_LOADED,
    payload: value
})

export const fetchFilms = (inputValue, genre, rating) => {
    return (dispatch) => {
        dispatch(setIsLoaded(false))
        filmsAPI.getFilms(inputValue, genre, rating).then(data => {
            dispatch(setFilms(data))
            dispatch(setIsLoaded(true))
        })
    }
}
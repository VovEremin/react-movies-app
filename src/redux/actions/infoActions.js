import {SET_GENRE, SET_INPUT_VALUE, SET_RATING} from "../types";

export const setInputValue = (value) => ({
    type: SET_INPUT_VALUE,
    payload: value
})

export const setGenre = (genre) => ({
    type: SET_GENRE,
    payload: genre
})

export const setRating = (rating) => ({
    type: SET_RATING,
    payload: rating
})
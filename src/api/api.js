import axios from "axios";

export const filmsAPI = {
    getFilms(value, genre) {
        return axios.get(`/films?title_like=${value}${genre ? '&' + genre : ''}`).then(response => response.data)
    }
}
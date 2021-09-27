import axios from "axios";

export const filmsAPI = {
    getFilms(value, genre) {
        return axios.get(` http://localhost:3001/films?title_like=${value}${genre ? '&' + genre : ''}`).then(response => response.data)
    }
}
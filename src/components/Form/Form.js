import { Genre } from '../Genre/Genre'
import { Input } from '../Input/Input'
import { Rating } from '../Rating/Rating'
import styles from './Form.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getFilms} from "../../redux/selectors/filmsSelector";
import {useCallback, useEffect} from "react";
import {getInfo} from "../../redux/selectors/infoSelector";
import {fetchFilms} from "../../redux/actions/filmsActions";
import {debounce} from "../../helpers/debounce";

export const Form = () => {
    const {films, isLoaded} = useSelector(getFilms)
    const {inputValue, genre, rating} = useSelector(getInfo)
    const dispatch = useDispatch()

    let generatedGenre = genre.includes('any') || genre.length === 0 ? null : 'category=' + genre.join('&category=')

    //eslint-disable-next-line
    const loadFilms = useCallback(
        debounce((value, genre) => {
            dispatch(fetchFilms(value, genre))
        }, 500),
        []
    );

    useEffect(() => {
        if (inputValue.trim()) {
            loadFilms(inputValue, generatedGenre)
        }
        //eslint-disable-next-line
    }, [inputValue, generatedGenre, dispatch]);

    return (
        <div className={styles.wrapper}>
            <form>
                <Input
                    placeholder="Enter movie name"
                    dispatch={dispatch}
                    inputValue={inputValue}
                    films={films}
                    isLoaded={isLoaded}
                    rating={rating}
                />
                <div className={styles.filters}>
                    <Rating rating={rating} />
                    <Genre genre={genre} />
                </div>
            </form>
        </div>
    )
}
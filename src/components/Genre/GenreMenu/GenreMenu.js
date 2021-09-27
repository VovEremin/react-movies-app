import React from 'react'
import styles from './GenreMenu.module.scss'
import {useDispatch} from "react-redux";
import {setGenre} from "../../../redux/actions/infoActions";

const array = ['Action', 'Comedy', 'Drama', 'Thriller']

export const GenreMenu = React.memo(({genre}) => {

    const dispatch = useDispatch()

    const selectGenre = (genre) => {
        dispatch(setGenre(genre))
    }

    return (
        <div className={styles.menu}>
            <div className={styles.checkbox}>
                <input name='any' type="checkbox" id='any' onChange={() => selectGenre('any')} checked={genre.includes('any')} />
                <label htmlFor='any' className={styles.any}>Any genre</label>
            </div>
            {
                array.map((item, index) => {
                    return (
                        <div className={styles.checkbox} key={index}>
                            <input name={item} type="checkbox" id={item} checked={genre.includes(item)} onChange={() => selectGenre(item)} />
                            <label htmlFor={item} className={styles.genre}>{item}</label>
                        </div>
                    )
                })
            }
        </div>
    )
})
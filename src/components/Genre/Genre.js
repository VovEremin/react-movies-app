import styles from './Genre.module.scss'
import arrowIcon from '../../assets/img/chevron-down.svg'
import { GenreMenu } from './GenreMenu/GenreMenu'
import {useEffect, useRef, useState} from "react";


export const Genre = ({genre}) => {
    const [genreVisibility, setGenreVisibility] = useState(false)

    const ratingMenuRef = useRef(null)

    const handleClickOutside = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if(!path.includes(ratingMenuRef.current)) {
            setGenreVisibility(false)
        }
    }

    const toggleVisibleMenu = () => {
        setGenreVisibility(!genreVisibility)
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div
            className={styles.genre}
            ref={ratingMenuRef}
        >
            <div
                className={styles.topSide}
                onClick={toggleVisibleMenu}
            >
                <span className={styles.title}>Genre</span>
                <span className={styles.arrow}>
                    <img src={arrowIcon} alt='arrow' />
                </span>
            </div>
            { genreVisibility &&
                <div className={styles.bottomSide}>
                    <GenreMenu genre={genre} />
                </div>
            }
        </div>
    )
}
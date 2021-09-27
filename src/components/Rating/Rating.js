import styles from './Rating.module.scss'
import arrowIcon from '../../assets/img/chevron-down.svg'
import { RatingMenu } from './RatingMenu/RatingMenu'
import emptyStarIcon from '../../assets/img/emptyStar.png'
import fullStarIcon from '../../assets/img/fullStar.png'
import {useEffect, useRef, useState} from "react";

export const Rating = ({rating}) => {
    const [ratingVisibility, setRatingVisibility] = useState(false)

    const genreMenuRef = useRef(null)

    const handleClickOutside = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if(!path.includes(genreMenuRef.current)) {
            setRatingVisibility(false)
        }
    }

    const toggleVisibleMenu = () => {
        setRatingVisibility(!ratingVisibility)
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div
            className={styles.rating}
            ref={genreMenuRef}
        >
            <div
                className={styles.topSide}
                onClick={toggleVisibleMenu}
            >
                <span className={styles.title}>Rating</span>
                <span className={styles.arrow}>
                    <img src={arrowIcon} alt='arrow' />
                </span>
            </div>
                { ratingVisibility &&
                    <div className={styles.bottomSide}>
                        <RatingMenu
                            emptyStarIcon={emptyStarIcon}
                            fullStarIcon={fullStarIcon}
                            rating={rating}
                        />
                    </div>
                }
        </div>
    )
}
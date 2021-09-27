import React from 'react'
import styles from './RatingMenu.module.scss'
import {useDispatch} from "react-redux";
import {setRating} from "../../../redux/actions/infoActions";

const array = [1,2,3,4,5,6,7,8,9,10]

export const RatingMenu = React.memo(({emptyStarIcon, fullStarIcon, rating}) => {

    const dispatch = useDispatch()

    const selectRating = (rating) => {
        dispatch(setRating(rating))
    }

    return (
        <div className={styles.menu}>
            <div className={styles.checkbox}>
                <input name='any' type="checkbox" id='any' checked={rating.includes('any')} onChange={() => selectRating('any')} />
                <label htmlFor='any' className={styles.any}>Any rating</label>
            </div>
            {
                array.map((item, index) => {
                    return (
                        <div key={index} className={styles.checkbox}>
                            <input name={index} type="checkbox" id={index} checked={rating.includes(item)} onChange={() => selectRating(item)} />
                            <label htmlFor={index}>
                                {
                                    Array(index + 1).fill(null).map((_, index) => {
                                        return (
                                            <div className={styles.star} key={index} >
                                                <img src={fullStarIcon} alt='+' />
                                            </div>
                                        )
                                    })
                                }
                                {
                                    Array(10 - index - 1).fill(null).map((_, index) => {
                                        return (
                                            <div className={styles.star} key={index} >
                                                <img src={emptyStarIcon} alt='-' />
                                            </div>
                                        )
                                    })
                                }
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
})
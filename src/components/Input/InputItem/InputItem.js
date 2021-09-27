import styles from './InputItem.module.scss'
import emptyStarIcon from '../../../assets/img/emptyStar.png'
import fullStarIcon from '../../../assets/img/fullStar.png'
import halfStarIcon from '../../../assets/img/halfStar.png'

export const InputItem = ({title, rating, category}) => {
    let stars = []
    if(Number.isInteger(+rating)) {
        stars = stars.concat(Array(+rating).fill('+'), Array(10-(+rating)).fill('-'))
    } else {
        stars = stars.concat(Array(Math.trunc(+rating)).fill('+'), Array(1).fill('='), Array(9-(Math.trunc(+rating))).fill('-'))
    }

    return (
        <div className={styles.item}>
            <div className={styles.topSide}>
                <p className={styles.title}>{title}</p>
                <span className={styles.genre}>{category}</span>
            </div>
            <div className={styles.rating}>
                {
                    stars.map((item, index) => {
                        let star
                        if(item === '+') {
                            star = fullStarIcon
                        } else if (item === '-') {
                            star = emptyStarIcon
                        } else {
                            star = halfStarIcon
                        }
                        return (
                            <div className={styles.star} key={index}>
                                <img src={star} alt={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
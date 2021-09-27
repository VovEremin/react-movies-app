import styles from './Input.module.scss'
import { InputItem } from './InputItem/InputItem'
import {setInputValue} from "../../redux/actions/infoActions";

export const Input = ({placeholder, inputValue, dispatch, films, isLoaded, rating}) => {
    const changeInputValue = (e) => {
        dispatch(setInputValue(e.target.value))
    }

    // next two code blocks is required because json-server can't provide necessary functional for rating queries
    const filteredFilms = []
    films.forEach(item => {
        if(rating.length !== 0 && (rating.includes(Math.floor(item.rating)) || rating.includes(Math.floor(item.rating)))) {
            filteredFilms.push(item)
        }
    })

    let resultFilms
    if(rating.includes('any')) {
        resultFilms = films
    } else if(filteredFilms.length > 0 && rating.length > 0 && isLoaded) {
        resultFilms = filteredFilms
    } else if (rating.length === 0 && isLoaded) {
        resultFilms = films
    } else {
        resultFilms = []
    }

    return (
        <div className={styles.input}>
            <input
                placeholder={placeholder}
                value={inputValue}
                onChange={changeInputValue}
            />
            <div className={styles.list}>
                { isLoaded && resultFilms.length === 0 ?
                    <p className={styles.text}>No results...</p> :
                    !isLoaded ?
                        <p className={styles.text}>Loading...</p> :
                        resultFilms.map((item, index) => {
                            return (
                                <InputItem {...item} key={`${index}_${item.title}`} />
                            )
                        })
                }
            </div>
        </div>
    )
}
'use client'
import styles from './Item.module.scss'
import PropTypes from 'prop-types'
import ClassTime from '../ClassTime/ClassTime'
import { Link } from 'react-router-dom'

const Item = ({category , date, id}) => {
    
    return (
        <div className={styles.item}>
            
            <div className={styles.item__info}>
                <h2 >{category}</h2>
                <ClassTime date={date} ></ClassTime>
                <Link to={`/clase/${id}`} className={styles.item__info__button}>Ver más</Link>
            </div>
        </div>

    )
}


Item.propTypes = {
    Item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            category: PropTypes.string,
            price: PropTypes.number,
            image: PropTypes.string,
        })
    )
}
export default Item
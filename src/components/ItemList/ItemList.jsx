import styles from "./ItemList.module.scss"
import PropTypes from 'prop-types'
import Item from "../Item/Item"

const ItemList = ({ itemList }) => {
   
    return (
        <div className={styles.itemList}>
            {itemList.map(({_id, category, date}) => {
                console.log(_id)
                return <Item key={_id} id={_id} category={category} date={date} ></Item> 
            })}
        </div>
    )
}

ItemList.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            category: PropTypes.string,
            date: PropTypes.string,
            image: PropTypes.string,
        })
    )
}

export default ItemList
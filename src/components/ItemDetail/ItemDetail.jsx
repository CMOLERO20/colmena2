import styles from './ItemDetail.module.scss'
import ItemValue from '../ItemValue/ItemValue'

const ItemDetail = ({ item }) => {
  const { category, date, teacher, available_places } = item

  const onClick = (value) => {
    console.log(value)
    console.log('te anotaste en la clase')
  }

  return (
    <div className={styles.item}>
      
      <div className={styles.item__info}>
        <h2 className={styles.item__info__title}>{category}</h2>
        <p></p>
        <p className={styles.item__info__price}>Profesora {teacher[0].user.name}</p>
        <p className={styles.item__info__price}>Lugares disponibles {available_places}</p>
        <ItemValue onClick={onClick}></ItemValue>
      </div>
     
    </div>
  )
}

export default ItemDetail
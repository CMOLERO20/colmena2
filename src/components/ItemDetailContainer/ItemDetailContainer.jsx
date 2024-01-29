import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getClassByIdAsync } from '../../utils/MockData'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import styles from './ItemDetailContainer.module.scss'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState()
  const { claseId } = useParams()

  useEffect(() => {
    getClassByIdAsync(claseId).then((clase) => {
        console.log(clase.class)
      setItem(clase.class)
      setLoading(false)
    })
  }, [claseId])

  return loading ? <Spinner /> : <div className={styles.container}> <ItemDetail  item={item} /></div> 
}

export default ItemDetailContainer
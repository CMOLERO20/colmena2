import { useState , useEffect} from 'react'

import ItemList from '../Itemlist/Itemlist'
import styles from './ItemListContainer.module.scss'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = (props) => {
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(()=> {
        
        setItems(props.data)
        setLoading(false)
    },[])

    return loading ?(<Spinner></Spinner>) : (

        <div className={styles.container}> <ItemList itemList={items}/>
        </div>
    )
}

ItemListContainer.propTypes = {}

export default ItemListContainer
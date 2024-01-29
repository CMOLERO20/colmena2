import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import {mockPacks} from '../../utils/MockData'
function Packs() {
    return (
      
        <div>
            <div>Esto es Packs</div>
            <ItemListContainer data={mockPacks}> </ItemListContainer></div>
        
    )
}

export default Packs
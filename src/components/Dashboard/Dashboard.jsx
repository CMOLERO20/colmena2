import Navbar from "../Navbar/Navbar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

function Dashboard({children}) {
    
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    )
}

export default Dashboard
import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo'
import { Link  } from 'react-router-dom'

function Navbar() {

    return(
        <div className={styles.navbar}>
            <Link to='/'>
                <Logo></Logo>
            </Link>
            <div className={styles.links}>
                <Link to='/packs'>Packs</Link>
                <Link to='/clases'>Clases</Link>
                <Link to='/user-clases'>Mis Clases</Link>
            </div>
        </div>
    )
}

export default Navbar
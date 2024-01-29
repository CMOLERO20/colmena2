import logo from "../../assets/colmena.png";
import styles from "./Logo.module.scss";

const Logo = () => {
    return <img className={styles.logo} src={logo} alt="" />;
};

export default Logo;
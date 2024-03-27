import { Link } from "react-router-dom"
import logo from "../../../assets/images/logo.png"
import styles from "./Navigation.module.css"

const Navigation = () => {
    const brandStyle = {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "22px",
        display: "flex",
        alignItems: "center",
    }

    return (
        <nav className={`${styles.navbar} container`}>
            <Link to='/' style={brandStyle}>
                <img src={logo} alt="logo"/>
                <span className={styles.logoText}>Codershouse</span>
            </Link>
        </nav>
    )
}

export default Navigation
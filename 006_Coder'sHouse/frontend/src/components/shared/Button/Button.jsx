import arrow from "../../../assets/images/arrow-forward.png";
import styles from "./Button.module.css"

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{children}</span>
            <img src={arrow} alt="arrow" className={styles.arrow} />
        </button>
    )
}

export default Button
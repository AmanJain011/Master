import { Link } from "react-router-dom"
import logo from "../../../assets/images/logo.png"

const Navigation = () => {
    return (
        <nav>
            <Link to='/'>
                <img src={logo} alt="logo"/>
                <span>Codershouse</span>
            </Link>
        </nav>
    )
}

export default Navigation
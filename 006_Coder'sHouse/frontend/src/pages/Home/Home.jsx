import logo from "../../assets/images/logo.png";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const navigate = useNavigate()
  const signInLinkStyle = {
    color: '#0077ff',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '10px'
  }

  const startRegister = () => {
    navigate('/register')
  }

  return (
    <div className={styles.cardWrapper}>
      <Card icon={logo} title="Welcome to Codershouse!">
        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing touches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister}>Get your username</Button>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;

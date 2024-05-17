import { NavLink } from "react-router-dom";
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.homePage}>
      <h4>Testing Page:</h4>
      <div className={styles.link}><NavLink to="/post" >See post data</NavLink></div>
      <div className={styles.link}><NavLink to="/currency-convert" >Currency conversion</NavLink></div>
      <div className={styles.link}><NavLink to="/stopwatch" >Stopwatch</NavLink></div>
      <div className={styles.link}><NavLink to="/custom-style-page" >Custom style page</NavLink></div>
    </div>
  )
}

export default Home;
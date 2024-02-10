
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
       <nav className={styles.navbar}>
        <ul className={styles.itens}>
          <li className={styles.item}>
           <Link hrefLang='#'>Home</Link>
          </li>
          <li className={styles.item}>
           <Link hrefLang='#'>Home</Link>
          </li>
          <li className={styles.item}>
           <Link hrefLang='#'>Home</Link>
          </li>
          <li className={styles.item}>
           <Link hrefLang='#'>Home</Link>
          </li>
        </ul>
       </nav>
    )
}

export default Navbar;
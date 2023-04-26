import NavBar from '../common/NavBar/NavBar'
import styles from './Layout.module.css'
import Cart from '../common/cart/cart';

//import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  //const location = useLocation();

    return(
        <div className={ styles.container }>
            <div className={styles.wrapContent}>

                <NavBar />

                <Cart />

                { children }


            </div>
        </div>
    );
}
import NavBar from '../common/NavBar/NavBar'
import styles from './Layout.module.css'

//import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  //const location = useLocation();

    return(
        <div className={ styles.container }>
            <div className={styles.wrapContent}>

                <NavBar />

                { children }

            </div>
        </div>
    );
}
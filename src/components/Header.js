import react from 'react';
import styles from '../styles/Header.module.css'



function Header(){



    return(
        <header className={styles.header}>
            <div>
                <h2>Modern Furniture Set</h2>
                <p>Hand made high quality furniture with a unbelievable prices. you find this and more only in our wonderful store.</p>
            </div>
        </header>
    )
}

export default Header;
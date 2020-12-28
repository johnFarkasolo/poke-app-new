import React from 'react';
import styles from './Navbar.module.css'

const Navbar = ({active, setActive}) => {
    return (
        <nav>
            <div className={styles.burgerBtn} onClick={() => setActive(!active)}>
                <span className={styles.burgerIcon} />
            </div>
        </nav>
    );
};

export default Navbar;
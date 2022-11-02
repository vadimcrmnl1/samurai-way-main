import React from "react";
import styles from './Header.module.css';
import logo from './logo211.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <span><img src={logo} alt={"Logo"}/></span>
            <p className={styles.header_tx}>
                your favorite social network
            </p>

        </header>
    )
}


export default Header;
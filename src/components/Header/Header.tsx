import React from "react";
import styles from './Header.module.css';
import logo from './logo211.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <span><NavLink to="/" activeClassName={styles.activeLink}><img src={logo} alt={"Logo"}/></NavLink></span>

            <p className={styles.header_tx}>
                your favorite social network
            </p>

        </header>
    )
}


export default Header;
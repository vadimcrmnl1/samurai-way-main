import React from "react";
import styles from './Header.module.css';
import logo from './logo211.png'
import {NavLink} from "react-router-dom";
import {InitialStateOfAuthType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    auth: InitialStateOfAuthType

}

const Header = (props: HeaderPropsType) => {
    debugger
    return (
        <header className={styles.header}>
            <span><NavLink to="/" activeClassName={styles.activeLink}><img src={logo} alt={"Logo"}/></NavLink></span>
            <div className={styles.loginBlock}>

                {props.auth.isAuth
                    ? <NavLink to={'/login'}>{props.auth.data.login}</NavLink>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
            <p className={styles.header_tx}>
                your favorite social network
            </p>


        </header>
    )
}


export default Header;
import React from "react";
import styles from './Header.module.css';
import logo from './logo211.png'
import {NavLink} from "react-router-dom";
import {InitialStateOfAuthType} from "../../redux/auth-reducer";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

type HeaderPropsType = {
    auth: InitialStateOfAuthType
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {

    return (
        <header className={styles.header}>
            <span><NavLink to="/" activeClassName={styles.activeLink}><img src={logo} alt={"Logo"}/></NavLink></span>
            <div className={styles.loginBlock}>{props.auth.isAuth
                ? <div className={styles.logoutBlock}>
                    <span>{props.login}</span>
                    <span><ExitToAppIcon className={styles.logoutButton} onClick={props.logout}/></span>
                </div>
                : <NavLink className={styles.logoutButton} to={'/login'}>Sign in</NavLink>}

            </div>
            <p className={styles.header_tx}>
                your favorite social network
            </p>


        </header>

    )
}


export default Header;
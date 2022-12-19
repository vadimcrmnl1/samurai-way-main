import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {MapStateType} from "./NavbarContainer";


const Navbar = (props: MapStateType) => {

    const SidebarElements = props.dialogs.map(el => (<div className={styles.people}>
        <img src={el.avatar} alt={'User Photo'}/>
        <NavLink className={styles.sidebarActive} to={'/dialogs/' + el.id}
                 activeClassName={styles.activeSidebar}>{el.name}</NavLink>
    </div>))

    return (
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to="/profile/26934" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}><NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}><NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink></div>
            <div className={styles.item}><NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink></div>
            <div className={styles.item}><NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink></div>
            <div className={styles.item}><NavLink to="/photo" activeClassName={styles.activeLink}>Photo</NavLink></div>

            <div className={styles.sidebar}>
                <div>{SidebarElements[0]}{SidebarElements[1]}{SidebarElements[4]}</div>

            </div>
        </nav>
    )
}


export default Navbar;
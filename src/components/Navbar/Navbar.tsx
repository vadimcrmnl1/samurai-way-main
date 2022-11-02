import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {DialogsType, SidebarDataType, SidebarType} from "../../redux/state";

type SidebarPropsType = {
    state: Array<SidebarDataType>
}

const Navbar = (props: SidebarPropsType) => {
    let SidebarElements = props.state.map(el => (<div className={styles.people}>
        <img src={el.avatar}/>
        <NavLink className={styles.sidebarActive} to={'/dialogs/' + el.id} activeClassName={styles.activeSidebar}>{el.name}</NavLink>
    </div>))

    return (
        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink></div>
            <div className={styles.item}><NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink></div>
            <div className={styles.item}><NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink></div>
            <div className={styles.item}><NavLink to="/photo" activeClassName={styles.activeLink}>Photo</NavLink></div>
            <div className={styles.sidebar}>
                <div>{SidebarElements}</div>
            </div>
        </nav>
    )
}


export default Navbar;
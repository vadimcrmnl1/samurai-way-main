import React from "react";
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogNameProps = {
    name: string
    id: string
    avatar: string | undefined
}

const DialogItem = (props: DialogNameProps) => {
    return (
        <div className={styles.Dialog}>
            <NavLink className={styles.dialogName} to={'/dialogs/' + props.id} activeClassName={styles.DialogActive}>{props.name}</NavLink>
            <img src={props.avatar} alt='ava'></img>
        </div>
    )
}

export default DialogItem
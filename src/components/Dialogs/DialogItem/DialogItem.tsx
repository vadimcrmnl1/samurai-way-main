import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogNameProps = {
    name: string
    id: string
    avatar: string | undefined
}

const DialogItem = (props: DialogNameProps) => {
    return (
        <div className={s.dialogUsers}>
            <NavLink className={s.dialogName} to={'/dialogs/' + props.id} activeClassName={s.activeDialogName}>{props.name}</NavLink>
            <img src={props.avatar} alt='ava'></img>
        </div>
    )
}

export default DialogItem
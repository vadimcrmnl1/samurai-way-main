import React from "react";
import s from './Login.module.css'

export const Login = () => {
    return (
        <div className={s.content}>
            <div className={s.inputButtonContainer}>
                <input className={s.input} placeholder={'type your login'}/>
                <input className={s.input} placeholder={'type your password'}/>
                <button className={s.button}>Log in</button>
            </div>
            <div>

            </div>
        </div>

    )
}
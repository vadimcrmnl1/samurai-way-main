import React from "react";
import s from './Login.module.css'
import {LoginReduxForm} from "./LoginForm";

export const Login = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div className={s.content}>
            <div className={s.title}>LOGIN</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}
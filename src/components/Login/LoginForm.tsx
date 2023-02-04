import React from 'react'
import s from './LoginForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}



export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputButtonContainer}>
                <div className={s.input}>
                    <label htmlFor="email">Email</label>
                    <Field style={{margin: '5px'}} name="email" component="input" type="text"/>
                </div>
                <div className={s.input}>
                    <label htmlFor="password">Password</label>
                    <Field style={{margin: '5px'}} name="password" component="input" type="password"/>
                </div>
                <div className={s.input}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field style={{margin: '5px'}}  name="rememberMe" component="input" type="checkbox" />
                </div>
                <div>
                    <button className={s.button}>Log in</button>
                </div>
            </div>

        </form>
    )
}

export const LoginReduxForm  = reduxForm<FormDataType>({form: 'login'})(LoginForm)

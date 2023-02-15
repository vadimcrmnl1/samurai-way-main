import React from 'react'
import s from './LoginForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";



export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
    url: string
}

const minLengthLoginForm = minLengthCreator(7)
const maxLengthLoginForm = maxLengthCreator(40)


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.inputButtonContainer}>
                <div className={s.input}>
                    <label htmlFor="email">Email</label>
                    <Field style={{margin: '5px'}}
                           name="email"
                           component={Input}
                           type="email"
                           validate={[required, minLengthLoginForm, maxLengthLoginForm]}/>
                </div>
                <div className={s.input}>
                    <label htmlFor="password">Password</label>
                    <Field style={{margin: '5px'}}
                           name="password"
                           component={Input}
                           type="password"
                           validate={[required, minLengthLoginForm, maxLengthLoginForm]}/>
                </div>
                <div className={s.input}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field style={{margin: '5px'}}
                           name="rememberMe"
                           component="input"
                           type="checkbox"/>
                </div>
                {props.error && <div className={s.errorBlock}>
                    {props.error}
                </div>}
                <div>
                    <button className={s.button}>Log in</button>
                </div>
                {props.error === 'Incorrect anti-bot symbols' &&
                    <div>
                    <img src={''} alt={'Captcha'}/>
                    <Field style={{margin: '5px'}}
                           name={'captcha'}
                           placeholder={'Captcha'}
                           component={'input'}
                           type='text'/>
                </div>}
            </div>

        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


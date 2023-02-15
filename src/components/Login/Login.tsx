import React from "react";
import s from './Login.module.css'
import {FormDataType, LoginReduxForm,} from "./LoginForm";
import {connect} from "react-redux";
import {captchaTC, login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";

export const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
      props.login(formData.email, formData.password, formData.rememberMe)
        props.captchaTC()
    }

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`}/>
    }

    return (
        <div className={s.content}>
            <div className={s.title}>LOGIN</div>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>

    )
}
type MapStateToPropsType = {
    isAuth: boolean
    userId: number | null
    captcha?: boolean | null
    url: string | null

}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.data.id,
        captcha: state.auth.captcha,
        url: state.auth.url
    }
}

export const LoginContainer = connect(mapStateToProps, {login, captchaTC})(Login)

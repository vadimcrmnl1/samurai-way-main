import React from "react";
import s from './Login.module.css'
import {FormDataType, LoginReduxForm,} from "./LoginForm";
import {connect} from "react-redux";
import {captchaTC, login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";
import {getUserAuth, getUserId} from "../../redux/selectors/authentifical-selectors";

export const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`}/>
    }

    return (
        <div className={s.content}>
            <div className={s.title}>LOGIN</div>
            <div className={s.logos}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'} alt={'JS'}/>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'} alt={'TS'}/>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} alt={'React'}/>
                <img src={'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png'} alt={'Rest API'}/>
            </div>
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
        isAuth: getUserAuth(state),
        userId: getUserId(state),
        captcha: state.auth.captcha,
        url: state.auth.url
    }
}

export const LoginContainer = connect(mapStateToProps, {login, captchaTC})(Login)

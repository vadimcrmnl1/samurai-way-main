import {Redirect} from "react-router-dom";
import React, {Component, ComponentType} from "react";
import {AppStateType} from "../redux/reduxStore";
import {connect} from "react-redux";


const mapStateToRedirectProps = (state: AppStateType) => {
    return {
        auth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: ReturnType<typeof mapStateToRedirectProps>) => {
        const {auth, ...restProps} = props
        if (!auth) {
            return <Redirect to={'/login'}/>
        }

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToRedirectProps)(RedirectComponent)
}
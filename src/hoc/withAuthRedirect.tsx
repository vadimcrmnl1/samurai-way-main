import {Redirect} from "react-router-dom";
import React, {Component, ComponentType} from "react";
import {AppStateType} from "../redux/reduxStore";
import {connect} from "react-redux";


// export const withAuthRedirect = (Component: ComponentType<T>) => {
//     class RedirectComponent extends React.Component<typeof Component, typeof Redirect> {
//         render() {
//             if (!this.props.auth.isAuth) return <Redirect to={'/login'}/>
//             return <Component {...this.props} />
//         }
//     }
//     return RedirectComponent
// }
const mapStateToRedirectProps = (state: AppStateType) => {
    return {
        auth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: ReturnType<typeof mapStateToRedirectProps>) => {
        const {auth, ...restProps} = props
        if (!auth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToRedirectProps)(RedirectComponent)
}
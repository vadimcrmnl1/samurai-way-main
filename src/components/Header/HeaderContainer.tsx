import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import Header from "./Header";
import {InitialStateOfAuthType, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {compose} from "redux";

type MapStateToPropsType = {
    auth: InitialStateOfAuthType
    login: string | null

}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void

    logout: () => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps

class HeaderContainerComponent extends React.Component<AuthPropsType> {

    render() {
        return <Header auth={this.props.auth} login={this.props.login} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        auth: state.auth,
        login: state.auth.data.login
    }
}

export const HeaderContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    logout
}), withRouter)(HeaderContainerComponent)
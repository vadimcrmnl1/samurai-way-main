import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import Header from "./Header";
import {getAuthUserData, InitialStateOfAuthType, setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";

type MapStateToPropsType = {
    auth: InitialStateOfAuthType
    login: string | null

}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
    getAuthUserData: () => void
}
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps

class HeaderContainerComponent extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()

    }


    render() {
        return <Header auth={this.props.auth} login={this.props.login}/>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        auth: state.auth,
        login: state.auth.data.login
    }
}

let WithUrlDataContainerComponent = withRouter(HeaderContainerComponent)
export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAC,
    getAuthUserData
})(WithUrlDataContainerComponent)
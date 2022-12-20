import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import Header from "./Header";
import {InitialStateOfAuthType, setAuthUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    auth: InitialStateOfAuthType


}
type MapDispatchToPropsType = typeof actions
type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps

class HeaderContainerComponent extends React.Component<AuthPropsType> {

    componentDidMount() {
        usersAPI.getUserInfoAPI().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                this.props.setAuthUserDataAC(id, email, login)
            }

        })
    }

    render() {
        return <Header auth={this.props.auth}/>
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        auth: state.auth,

    }
}
const actions = {
    setAuthUserDataAC
}
let WithUrlDataContainerComponent = withRouter(HeaderContainerComponent)
export const HeaderContainer = connect(mapStateToProps, actions)(WithUrlDataContainerComponent)
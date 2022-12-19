import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    userProfile: UserProfileType
}

type MapDispatchToPropsType = typeof actions
type PathParamsType = {
    userId: string
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <div className={s.content}>
                <Profile profile={this.props.userProfile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}
const actions = {
    setUserProfileAC
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export const ProfileListContainer = connect(mapStateToProps, actions)(WithUrlDataContainerComponent)



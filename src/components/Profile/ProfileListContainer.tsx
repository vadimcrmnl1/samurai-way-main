import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getStatus, getUserProfile, setUserProfileAC, updateStatus, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    userProfile: UserProfileType
    userStatus: string

}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (userStatus: string | undefined) => void
    setUserProfileAC: (userProfile: UserProfileType) => void
}
type PathParamsType = {
    userId: string | undefined
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.userProfile} userStatus={this.props.userStatus} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.userStatus

    }
}

export const ProfileListContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    setUserProfileAC,
    getUserProfile,
    getStatus,
    updateStatus
}),withRouter, withAuthRedirect)(ProfileContainer)



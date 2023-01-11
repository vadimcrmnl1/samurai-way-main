import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getUserProfile, setUserProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    userProfile: UserProfileType
    // auth: InitialStateOfAuthType
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string | undefined) => void
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
        userProfile: state.profilePage.userProfile,
        // auth: state.auth
    }
}

export const ProfileListContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    setUserProfileAC,
    getUserProfile
}),withRouter, withAuthRedirect)(ProfileContainer)



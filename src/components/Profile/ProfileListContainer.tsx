import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    getStatus,
    getUserProfile,
    setUserProfileAC,
    updatePhotoTC,
    updateStatus,
    UserProfileType
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserProfileInfo, getUserStatus} from "../../redux/selectors/profile-selectors";

type MapStateToPropsType = {
    userProfile: UserProfileType
    userStatus: string

}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (userStatus: string | undefined) => void
    setUserProfileAC: (userProfile: UserProfileType) => void
    updatePhotoTC: (file: {}) => void
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

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        let userId = this.props.match.params.userId
        if (userId !== prevProps.match.params.userId) {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)

        }
        if (this.props.userProfile) {

        }
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props}
                         owner={this.props.match.params.userId as string}
                         profile={this.props.userProfile}
                         userStatus={this.props.userStatus}
                         updateStatus={this.props.updateStatus}
                         changePhoto={this.props.updatePhotoTC}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: getUserProfileInfo(state),
        userStatus: getUserStatus(state)

    }
}

export const ProfileListContainer = compose<React.ComponentType>(connect(mapStateToProps, {
    setUserProfileAC,
    getUserProfile,
    getStatus,
    updateStatus,
    updatePhotoTC
}), withRouter, withAuthRedirect)(ProfileContainer)



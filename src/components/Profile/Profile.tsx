import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./common/ProfileInfo";
import {UserProfileType} from "../../redux/profile-reducer";
import {SimpleBackdrop} from "../common/Backdrop/Backdrop";

type ProfilePropsType = {
    profile: UserProfileType
    userStatus: string
    updateStatus: (userStatus: string) => void
    owner: string
    changePhoto: (file: {}) => void
}

const Profile = (props: ProfilePropsType) => {

        return (
        <div className={s.content}>
            <SimpleBackdrop/>
            <ProfileInfo profile={props.profile}
                         userStatus={props.userStatus}
                         updateStatus={props.updateStatus}
                         owner={props.owner}
                         changePhoto={props.changePhoto}
            />


            {/*<MyPostsContainer/>*/}
        </div>
    )
}


export default Profile;
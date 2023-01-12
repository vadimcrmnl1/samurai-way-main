import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: UserProfileType
    userStatus: string
    updateStatus: (userStatus: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateStatus={props.updateStatus}/>

            <MyPostsContainer/>
        </div>
    )
}


export default Profile;
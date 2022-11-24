import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}


const Profile = (props: PostsPropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo name='VADZIM' city='BBR' age={29}/>
            <MyPosts name='VDM KRPNK'
                     posts={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}


export default Profile;
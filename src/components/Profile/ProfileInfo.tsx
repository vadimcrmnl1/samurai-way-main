import React from "react";
import s from './Profile.module.css'
import {UserProfileType} from "../../redux/profile-reducer";
import ava from "../../assets/avatar.png";

type ProfileInfoPropsType = {
    profile: UserProfileType
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div>
            <div className={s.profileImg}>
                <img
                    src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000'
                    alt='Picture'/>
            </div>
            <div className={s.profileInfoContainer}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : ava} alt={'avatar'}/>

                <div className={s.profileInfo}>
                    <span className={s.fullName}>{props.profile.fullName}</span>
                    <span className={s.aboutMe}>{props.profile.aboutMe}</span>
                    <span className={s.userId}>ID: {props.profile.userId}</span>
                </div>
                <div className={s.profileContacts}>
                    <span><b>CONTACTS</b></span>
                    <span><a href={props.profile.contacts.facebook}>Facebook</a></span>
                    <span><a href={props.profile.contacts.github}>GitHub</a></span>
                    <span><a href={props.profile.contacts.vk}>VK</a></span>
                    <span><a href={props.profile.contacts.twitter}>Twitter</a></span>
                    <span><a href={props.profile.contacts.mainLink}>MainLink</a></span>
                    <span><a href={props.profile.contacts.instagram}>Instagram</a></span>
                    <span><a href={props.profile.contacts.website}>Website</a></span>
                    <span><a href={props.profile.contacts.youtube}>Youtube</a></span>
                </div>
                <div className={s.workContainer}>
                    <span>Need work: {props.profile.lookingForAJob ? '+' : '-'}</span>
                    <span>Search work: {props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
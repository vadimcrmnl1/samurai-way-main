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
                    <span>Facebook: {props.profile.contacts.facebook}</span>
                    <span>GitHub: {props.profile.contacts.github}</span>
                    <span>VK: {props.profile.contacts.vk}</span>
                    <span>Twitter: {props.profile.contacts.twitter}</span>
                    <span>MainLink: {props.profile.contacts.mainLink}</span>
                    <span>Instagram: {props.profile.contacts.instagram}</span>
                    <span>Website: {props.profile.contacts.website}</span>
                    <span>YouTube: {props.profile.contacts.youtube}</span>
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
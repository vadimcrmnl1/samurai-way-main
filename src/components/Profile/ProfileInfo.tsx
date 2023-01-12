import React from "react";
import s from './Profile.module.css'
import {UserProfileType} from "../../redux/profile-reducer";
import ava from "../../assets/avatar.png";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
    userStatus: string
    updateStatus: (userStatus: string) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div>

            <div className={s.profileInfoContainer}>

                <img src={props.profile.photos.large != null ? props.profile.photos.large : ava} alt={'avatar'}/>


                <div className={s.profileInfo}>
                    <span className={s.fullName}>{props.profile.fullName}</span>
                    <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus}/>
                    <span className={s.aboutMe}>About me: {props.profile.aboutMe}</span>
                    <span className={s.userId}>ID: {props.profile.userId}</span>
                    <span>Need work: {props.profile.lookingForAJob ? '+' : '-'}</span>
                    <span>Search work: {props.profile.lookingForAJobDescription}</span>
                </div>
                <div className={s.profileContacts}>
                    <span><b>CONTACTS</b></span>
                    <span><a href={props.profile.contacts.facebook} title={'Facebook'} target='_blank'>Facebook</a></span>
                    <span><a href={props.profile.contacts.github} title={'GitHub'} target='_blank'>GitHub</a></span>
                    <span><a href={props.profile.contacts.vk} title={'VK'} target='_blank'>VK</a></span>
                    <span><a href={props.profile.contacts.twitter} title={'Twitter'} target='_blank'>Twitter</a></span>
                    <span><a href={props.profile.contacts.mainLink} title={'MainLink'} target='_blank'>MainLink</a></span>
                    <span><a href={props.profile.contacts.instagram} title={'Instagram'} target='_blank'>Instagram</a></span>
                    <span><a href={props.profile.contacts.website} title={'Website'} target='_blank'>Website</a></span>
                    <span><a href={props.profile.contacts.youtube} title={'Youtube'} target='_blank'>Youtube</a></span>
                </div>
                {/*<div className={s.workContainer}>*/}
                {/*    <span>Need work: {props.profile.lookingForAJob ? '+' : '-'}</span>*/}
                {/*    <span>Search work: {props.profile.lookingForAJobDescription}</span>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default ProfileInfo
import s from "../Profile.module.css";
import {ProfileStatus} from "./ProfileStatus";
import React, {useEffect} from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileEditModal} from "./ProfileEditModal";

type ProfileDescriptionPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (userStatus: string) => void
}

export const ProfileDescription: React.FC<ProfileDescriptionPropsType> = ({profile, updateStatus, status}) => {
    useEffect(() => {

    }, [profile, status])
    return (
        <div className={s.profileInfo}>
            <div className={s.nameAndButtonBlock}>
                <span className={s.fullName}>{profile.fullName}</span>
                <ProfileEditModal profile={profile}/>
            </div>
            <ProfileStatus userStatus={status} updateStatus={updateStatus}/>
            <span className={s.aboutMe}>About me: {profile.aboutMe}</span>
            <span className={s.userId}>ID: {profile.userId}</span>
            <span>Need work: {profile.lookingForAJob ? 'yes' : 'no'}</span>
            <span>Search work: {profile.lookingForAJobDescription}</span>
        </div>
    )
}
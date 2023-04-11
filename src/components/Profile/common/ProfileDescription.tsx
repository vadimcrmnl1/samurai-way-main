import s from "../Profile.module.css";
import {ProfileStatus} from "./ProfileStatus";
import React from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileEditModal} from "./ProfileEditModal";

type ProfileDescriptionPropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (userStatus: string) => void
    userId: number | null
    owner: number
}

export const ProfileDescription: React.FC<ProfileDescriptionPropsType> = ({profile, updateStatus, status, userId, owner}) => {

    return (
        <div className={s.profileInfo}>
            <div className={s.nameAndButtonBlock}>
                <span className={s.fullName}>{profile.fullName}</span>
                {owner == userId &&<ProfileEditModal profile={profile}/>}
            </div>
            <ProfileStatus userId={userId} owner={owner} userStatus={status} updateStatus={updateStatus}/>
            <span className={s.aboutMe}>About me: {profile.aboutMe}</span>
            <span className={s.userId}>ID: {profile.userId}</span>
            <span>Need work: {profile.lookingForAJob ? 'yes' : 'no'}</span>
            <span>Search work: {profile.lookingForAJobDescription}</span>
        </div>
    )
}
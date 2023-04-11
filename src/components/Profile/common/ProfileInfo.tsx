import React from "react";
import s from '../Profile.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {useSelector} from "react-redux";
import {getUserId, selectAuthUserId} from "../../../redux/selectors/authentifical-selectors";
import {Contacts} from "./Contacts";
import {Avatar} from "./Avatar";
import {ProfileDescription} from "./ProfileDescription";

type ProfileInfoPropsType = {
    profile: UserProfileType
    userStatus: string
    updateStatus: (userStatus: string) => void
    owner: string
    changePhoto: (file: File) => void
}


const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, userStatus, updateStatus, owner, changePhoto}) => {
    const userId = useSelector(selectAuthUserId)
    const getUserIdSelector = useSelector(getUserId)
    const ownerStr = Number(owner)


    return (
        <div>

            <div className={s.profileInfoContainer}>
                <Avatar photo={profile.photos.large}
                        userId={userId}
                        ownerStr={ownerStr}
                        getUserIdSelector={getUserIdSelector}
                        changePhoto={changePhoto}
                />

                <ProfileDescription profile={profile}
                                    userId={userId}
                                    owner={ownerStr}
                                    status={userStatus}
                                    updateStatus={updateStatus}
                />

                <div className={s.profileContacts}>
                    <span><b>Contacts</b></span>
                    {Object.entries(profile.contacts).map(([title, value], index) => {
                        return <Contacts key={index} contactTitle={title} contactValue={value}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
import ava from "../../../assets/avatar.png";
import s from "../Profile.module.css";
import {IconButton} from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import React from "react";
import {useSelector} from "react-redux";
import {selectAvatar} from "../../../redux/selectors/profile-selectors";

type AvatarPropsType = {
    photo: string
    userId: number | null
    ownerStr: number
    getUserIdSelector: number | null
    changePhoto: (file: File) => void
}

export const Avatar: React.FC<AvatarPropsType> = ({photo, userId, ownerStr,
                                                      getUserIdSelector, changePhoto}) => {
    const avatar = useSelector(selectAvatar)
    const handleUpdatePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if (file) {
            changePhoto(file[0])
        }
    }

    return (
        <div>
            <img src={avatar || ava}
                 alt={'avatar'}/>
            {userId == ownerStr &&
                <label className={s.addPhotoInput}>
                    <input type={'file'} onChange={handleUpdatePhoto} style={{display: 'none'}}/>
                    <IconButton size={'medium'} component={'span'}>
                        <AddPhotoIcon/>
                    </IconButton>
                </label>
            }
        </div>

    )
}
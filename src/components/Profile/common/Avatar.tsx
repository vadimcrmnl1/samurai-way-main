import ava from "../../../assets/avatar.png";
import s from "../Profile.module.css";
import {IconButton} from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import React, {useEffect} from "react";

type AvatarPropsType = {
    photo: string
    userId: number | null
    ownerStr: number
    getUserIdSelector: number | null
    changePhoto: (file: File) => void
}

export const Avatar: React.FC<AvatarPropsType> = ({photo, userId, ownerStr, getUserIdSelector, changePhoto}) => {
    const handleUpdatePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if (file) {
            changePhoto(file[0])
        }
    }
    useEffect(() => {

    }, [photo])
    return (
        <div>
            <img src={photo || ava}
                 alt={'avatar'}/>
            {userId == ownerStr || ownerStr == getUserIdSelector &&
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
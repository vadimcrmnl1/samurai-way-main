import React from "react";
import s from './Profile.module.css'

type ProfileInfoTypeProps = {
    name: string
    city: string
    age: number
}


const ProfileInfo = (props: ProfileInfoTypeProps) => {
    return (
        <div>
            <div className={s.profileImg}>
                <img
                    src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000'
                    alt='Picture'/>
            </div>
            <div className={s.profileInfo}>
                {props.name + ' ' + props.city + ' ' + props.age}
            </div>
        </div>
    )
}

export default ProfileInfo
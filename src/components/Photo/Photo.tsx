import React from "react";
import styles from './Photo.module.css'

const Photo = () => {

    return(
            <div className={styles.photoContent}>
                <div className={styles.title}>Photo</div>
                <div>

                        <img src={'https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200&h=100&c=Z7MUsU4JGKM9%2F%2F%2FoR6WHdA%3D%3D'} alt={'captcha'}/>

                </div>
            </div>



    )
}

export default Photo
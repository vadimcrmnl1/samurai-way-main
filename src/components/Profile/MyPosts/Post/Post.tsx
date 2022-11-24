import React from "react";
import s from './Post.module.css';

type PostProps = {
    message: string
    likeCounts: number
}

const Post = (props: PostProps) => {
    return (
        <div className={s.item}>
            <img
                src='https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'
                alt='avatarka'/>
            <div className={s.postMessage}>{props.message}</div>
            <div>
                <span className={s.likeCounts}>{props.likeCounts} likes</span>
                <p></p>
            </div>
        </div>
    )
}


export default Post;
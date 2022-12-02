import React, {useState} from "react";
import s from './Post.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


type PostProps = {
    message: string
    likeCounts: number
    key: string
    // name: string
}

const Post = (props: PostProps) => {

    let [likes, setLikes] = useState<number>(props.likeCounts)

    const ChangeLikeCountsUp = () => {
        setLikes(++likes)
    }
    const ChangeLikeCountsDown = () => {
        setLikes(likes - 1)
    }

    return (
        <div className={s.item}>
            <div className={s.user}>
                <img
                    src='https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'
                    alt='avatarka'/>
                <div className={s.userName}>Vadzim Karpenka</div>
            </div>

            <div className={s.postMessage}>{props.message}</div>
            <div>
                <span className={s.likeCounts}>{likes} likes
                    <FavoriteIcon fontSize={'small'}
                                  className={s.favoriteIcon}
                                  onClick={ChangeLikeCountsUp}
                    />
                    <FavoriteBorderIcon fontSize={'small'}
                                        className={s.favoriteBorderIcon}
                                        onClick={ChangeLikeCountsDown}
                    />
                </span>
                <p></p>
            </div>
        </div>
    )
}


export default Post;
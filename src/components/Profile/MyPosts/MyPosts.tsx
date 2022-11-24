import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/state";


type MyPostsProps = {
    name: string
    posts: Array<PostsType>
    dispatch: (action: any) => void
    newPostText: string
}

const MyPosts = (props: MyPostsProps) => {

    let PostsElements = props.posts.map(p => <Post key={p.id} message={p.post} likeCounts={p.likeCounts}/>)
    let newPostElement = React.createRef<any>()
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text: string = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    const onKeyPressHandler = (e: any) => e.key === 'Enter' && addPost()

    return (
        <div className={styles.content}>
            <div>
                <div className={styles.AddPost}>
                    <input className={styles.inputPost}
                           ref={newPostElement}
                           value={props.newPostText}
                           onChange={onPostChange}
                           onKeyPress={onKeyPressHandler}
                           placeholder={'Type post'}
                    />
                    <button className={styles.buttonPost}
                            onClick={addPost}>Add post
                    </button>
                </div>
                <div className={styles.user}>{props.name}</div>
                {PostsElements}
            </div>
        </div>
    )
}


export default MyPosts;
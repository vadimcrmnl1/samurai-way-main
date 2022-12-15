import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {InitialStateOfPostsType} from "../../../redux/ProfileReducer";
import InputButton from "../../Dialogs/InputButton/InputButton";


type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    posts: InitialStateOfPostsType
    addPost: () => void

}

const MyPosts = (props: MyPostsPropsType) => {

    let PostsElements = props.posts.postsData.map(p => <Post key={p.id}
                                                       message={p.post}
                                                       likeCounts={p.likeCounts}
    />)
    let addPost = () => {
        if (props.posts.newPostText.trim() !== '') {
            props.addPost()
        }
    }
    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text: string = e.currentTarget.value;
        props.updateNewPostText(text)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addPost()

    return (
        <div className={s.content}>
            <div>
                <div className={s.AddPost}>
                    <InputButton value={props.posts.newPostText}
                                 name={'Add'}
                                 onChange={onPostChange}
                                 onKeyPress={onKeyPressHandler}
                                 placeholder={'Type your post'}
                                 onClick={addPost}/>
                </div>
                <div className={s.post}>
                    {PostsElements}
                </div>

            </div>
        </div>
    )
}


export default MyPosts;
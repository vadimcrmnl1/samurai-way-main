import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {InitialStateOfPostsType} from "../../../redux/profile-reducer";
import {AddPostReduxForm, PostsFormDataType} from "./addPostForm/AddPostForm";


type MyPostsPropsType = {

    posts: InitialStateOfPostsType
    addPost: (newPostText: string) => void

}

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let PostsElements = props.posts.postsData.map(p => <Post key={p.id}
                                                       message={p.post}
                                                       likeCounts={p.likeCounts}
    />)

    const addNewPost =  (formData: PostsFormDataType) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={s.content}>
            <div>
                <div className={s.AddPost}>
                   <AddPostReduxForm onSubmit={addNewPost}/>
                </div>
                <div className={s.post}>
                    {PostsElements}
                </div>

            </div>
        </div>
    )
})


export default MyPosts;
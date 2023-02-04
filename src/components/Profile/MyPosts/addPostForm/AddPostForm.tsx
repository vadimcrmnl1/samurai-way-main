import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './AddPostForm.module.css'

export type PostsFormDataType = {
    newPostText: string
}

export const AddPostForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addPostFormContainer}>
                <Field className={s.inputPost}
                       name="newPostText"
                       component="input"
                       type="text"
                       placeholder="Enter your text"/>
                <div>
                    <button className={s.button}>Add post</button>
                </div>
            </div>

        </form>
    )
}

export const AddPostReduxForm = reduxForm<PostsFormDataType>({form: 'postMessage'})(AddPostForm)

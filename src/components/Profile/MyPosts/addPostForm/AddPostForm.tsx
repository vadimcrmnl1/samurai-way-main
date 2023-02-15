import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './AddPostForm.module.css'
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Input} from "../../../common/FormControls/FormControls";

export type PostsFormDataType = {
    newPostText: string
}

const maxLengthPostForm = maxLengthCreator(30)

export const AddPostForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addPostFormContainer}>
                <Field className={s.inputPost}
                       name="newPostText"
                       component={Input}
                       validate={[required, maxLengthPostForm]}
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

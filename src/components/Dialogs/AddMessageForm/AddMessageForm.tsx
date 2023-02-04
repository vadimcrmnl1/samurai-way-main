import React from "react";
import s from "./AddMessageForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogsFormDataType = {
    newMessageText: string
}

export const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addMessageFormContainer}>
                <div>
                    <Field className={s.inputMessage}
                           name="newMessageText"
                           component="input"
                           type="text"
                           placeholder="Enter your message"/>
                </div>
                <div>
                    <button className={s.button}>Add message</button>
                </div>
            </div>

        </form>
    )
}

export const ReduxAddMessageForm = reduxForm<DialogsFormDataType>({form: 'dialogAddMessage'})(AddMessageForm)
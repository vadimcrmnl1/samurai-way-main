import React from "react";
import s from "./AddMessageForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormControls/FormControls";

export type DialogsFormDataType = {
    newMessageText: string
}

const maxMessageLength = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addMessageFormContainer}>
                <div>
                    <Field className={s.inputMessage}
                           name="newMessageText"
                           component={Input}
                           type="text"
                           placeholder="Enter your message"
                           validate={[required, maxMessageLength]}/>

                </div>
                <div>
                    <button className={s.button}>Add message</button>
                </div>
            </div>

        </form>
    )
}

export const ReduxAddMessageForm = reduxForm<DialogsFormDataType>({form: 'dialogAddMessage'})(AddMessageForm)
import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogsFormDataType, ReduxAddMessageForm} from "./AddMessageForm/AddMessageForm";


const Dialogs = (props: DialogsPropsType) => {
    let state = props.messagesPage
    let messagesElements = state.messagesData.map(m => <Message key={m.id} message={m.message}/>)
    let dialogsElements = state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                 avatar={d.avatar}/>)

    const addNewMessage = (formData: DialogsFormDataType) => {

        props.addMessage(formData.newMessageText)
    }
    return (

        <div className={s.dialogsContainer}>
            <div className={s.dialogsBlock}>
                <div className={s.DialogUsers}>
                    {dialogsElements}
                </div>
                <div className={s.Messages}>
                    <div>{messagesElements}</div>
                    <ReduxAddMessageForm onSubmit={addNewMessage}/>

                </div>
            </div>

        </div>
    )
}

export default Dialogs


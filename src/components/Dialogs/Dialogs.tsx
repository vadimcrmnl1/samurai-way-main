import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import InputButton from "./InputButton/InputButton";


const Dialogs = (props: DialogsPropsType) => {
    let state = props.messagesPage
    let messagesElements = state.messagesData.map(m => <Message key={m.id} message={m.message}/>)
    let dialogsElements = state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                 avatar={d.avatar}/>)

    let addMessage = () => {
        if (props.messagesPage.newMessageText.trim() !== '') {
            props.addMessage()
        }
    }
    let onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text: string = e.currentTarget.value
        props.updateNewMessageText(text)
    }


    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addMessage()

    // if (props.auth.isAuth === false) return <Redirect to={'/login'}/>
    return (

        <div className={s.Dialogs}>
            <div className={s.DialogUsers}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                <div>{messagesElements}</div>

                <InputButton value={state.newMessageText}
                             name={'Send'}
                             onChange={onMessageChange}
                             onKeyPress={onKeyPressHandler}
                             placeholder={'Type your post'}
                             onClick={addMessage}/>

            </div>
        </div>
    )
}

export default Dialogs
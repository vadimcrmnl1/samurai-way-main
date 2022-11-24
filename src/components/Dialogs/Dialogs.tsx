import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageActionCreator, MessagesPageType, UpdateNewMessageActionCreator} from "../../redux/state";

type DialogsPropsType = {
    state: MessagesPageType
    newMessageText: string
    dispatch: (action: any) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let messagesElements = props.state.messagesData.map(m => <Message key={m.id} message={m.message}/>)
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                       avatar={d.avatar}/>)
    let newMessageElement = React.createRef<any>()

    let addMessage = () => {
        props.dispatch(AddMessageActionCreator())
    }

    let onMessageChange = () => {
        let text: string = newMessageElement.current.value
        props.dispatch(UpdateNewMessageActionCreator(text))
    }

    const onKeyPressHandler = (e: any) => e.key === 'Enter' && addMessage()

    return (

        <div className={s.Dialogs}>
            <div className={s.DialogUsers}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {messagesElements}
                <div className={s.InputButton}>
                    <input ref={newMessageElement}
                           value={props.newMessageText}
                           className={s.inputMessage}
                           onChange={onMessageChange}
                           onKeyPress={onKeyPressHandler}
                           placeholder={'Type your message'}/>
                    <button className={s.buttonMessage}
                            onClick={addMessage}>Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
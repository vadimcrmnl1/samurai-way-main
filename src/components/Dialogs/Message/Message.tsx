import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {

    return (
        <div className={s.MessageMe}>
            <div>{props.message}</div>
        </div>
    )
}

export default Message
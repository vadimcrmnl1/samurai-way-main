import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {

    return (
        <div>
            <div className={s.MessageMe}>{props.message}</div>
        </div>
    )
}

export default Message
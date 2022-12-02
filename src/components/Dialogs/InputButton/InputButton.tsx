import React, {ChangeEvent} from "react";
import styles from './InputButton.module.css'

type InputButtonPropsType = {
    value: string
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    placeholder: string
    onClick: () => void
}

const InputButton = (props: InputButtonPropsType) => {


    return (
        <div className={styles.InputButton}>
            <input className={styles.inputMessage}
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={props.onChange}
                   onKeyPress={props.onKeyPress}
            />
            <button className={styles.buttonMessage}
                    onClick={props.onClick}
            >{props.name}
            </button>
        </div>
    )
}

export default InputButton


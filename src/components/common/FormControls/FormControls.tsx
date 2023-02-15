import React from "react";
import s from './FormControls.module.css'

type InputPropsType = {
    input: {
        name: string
        onBlur: () => void
        onChange: () => void
        onDragStart: () => void
        onDrop: () => void
        onFocus: () => void
        value: string
    }
    meta: {
        active: boolean
        asyncValidating: boolean
        autofilled: boolean
        dirty: boolean
        error: string
        form: string
        touched: boolean
        valid: boolean
        visited: boolean
    }

}



export const Input: React.FC<InputPropsType> = ({input, meta,  ...props}) => {

    const errorInput = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (errorInput ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            <span>
                {errorInput && <span>{meta.error} </span>}
            </span>
        </div>
    )
}

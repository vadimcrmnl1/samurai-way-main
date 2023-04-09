import {TextField} from "@material-ui/core";
import React, {ChangeEvent} from "react";

type TextFieldComponentPropsType = {
    id: string
    name: string
    value?: string
    label: string
    onChange: (e: ChangeEvent<any>) => void
}

export const TextFieldComponent: React.FC<TextFieldComponentPropsType> = ({id, name, value, label, onChange}) => {
    return (
        <TextField
            fullWidth
            size={'small'}
            value={value}
            variant={'standard'}
            id={id}
            name={name}
            label={label}
            onChange={onChange}
        />
    )
}
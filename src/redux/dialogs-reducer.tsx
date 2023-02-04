import {v1} from "uuid";

import ava from "./../assets/avatar.png";

const ADD_MESSAGE = 'ADD-MESSAGE'


export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}

export type DialogsReducerAT = AddMessageActionType
export type DialogType = {
    id: string
    name: string
    avatar: string
}
type MessageType = {
    id: string
    message: string
}
export type InitialStateOfDialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>

}

export const initialState = {
    dialogsData: [
        {id: v1(), name: 'Mikita', avatar: ava},
        {id: v1(), name: 'Alexey', avatar: ava},
        {id: v1(), name: 'Nika', avatar: ava},
        {id: v1(), name: 'Andrey', avatar: ava},
        {id: v1(), name: 'Maxim', avatar: ava}
    ],
    messagesData: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'I am right'}
    ],

}

export const dialogsReducer = (state: InitialStateOfDialogsType = initialState, action: DialogsReducerAT): InitialStateOfDialogsType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: v1(),
                message: action.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],

            }
        }

        default:
            return state
    }
}
export const AddMessageActionCreator = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText})



import {v1} from "uuid";

import ava from "./avatar.png";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessage: string
}
export type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE'
    newText: string
}
export type DialogsReducerAT = AddMessageActionType | UpdateNewMessageActionType
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
    newMessageText: string
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
    newMessageText: '',
}

export const dialogsReducer = (state: InitialStateOfDialogsType = initialState, action: DialogsReducerAT): InitialStateOfDialogsType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            let stateCopy = {...state, messagesData: [...state.messagesData]}
            stateCopy.newMessageText = ''
            stateCopy.messagesData.push(newMessage)
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state}

            stateCopy.newMessageText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}
export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})
export const UpdateNewMessageActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE, newText: text})


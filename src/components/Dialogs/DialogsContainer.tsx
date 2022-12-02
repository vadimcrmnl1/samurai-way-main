import React from "react";
import {
    AddMessageActionCreator,
    InitialStateOfDialogsType,
    UpdateNewMessageActionCreator
} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";



// export const DialogsContainer = (props: DialogsPropsType) => {
//     let state = props.store.getState().messagesPage
//     let addMessage = () => {
//         props.store.dispatch(AddMessageActionCreator())
//     }
//     let onMessageChange = (text: string) => {
//         let action = UpdateNewMessageActionCreator(text)
//         props.store.dispatch(action)
//     }
//     return (<Dialogs updateNewMessageText={onMessageChange}
//                      addMessage={addMessage}
//                      messagesPage={state}
//
//         />
//     )
// }
type MapStatePropsType = {
    messagesPage: InitialStateOfDialogsType
}
type MapDispatchToPropsType = {
    addMessage : () => void
    updateNewMessageText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(AddMessageActionCreator())
        },
        updateNewMessageText: (text: string) => {
            dispatch(UpdateNewMessageActionCreator(text))
        }
    }
}

export type DialogsPropsType=MapStatePropsType & MapDispatchToPropsType

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
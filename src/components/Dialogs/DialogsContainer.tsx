import React from "react";
import {
    AddMessageActionCreator,
    InitialStateOfDialogsType,
    UpdateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";


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
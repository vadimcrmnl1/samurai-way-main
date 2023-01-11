import React from "react";

import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {DialogType} from "../../redux/dialogs-reducer";
import {InitialStateOfAuthType} from "../../redux/auth-reducer";



export type MapStateType = {
    dialogs: DialogType[]
    auth: InitialStateOfAuthType
}
const mapStateToProps = (state:AppStateType):MapStateType => {
    return {
        dialogs: state.messagesPage.dialogsData,
        auth: state.auth
    }
}



export const NavbarContainer = connect(mapStateToProps)(Navbar);


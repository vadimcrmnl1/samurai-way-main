import React from "react";

import Navbar from "./Navbar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {DialogType} from "../../redux/dialogs-reducer";



export type MapStateType = {
    dialogs: DialogType[]
}
const mapStateToProps = (state:AppStateType):MapStateType => {
    return {
        dialogs: state.messagesPage.dialogsData
    }
}



export const NavbarContainer = connect(mapStateToProps)(Navbar);


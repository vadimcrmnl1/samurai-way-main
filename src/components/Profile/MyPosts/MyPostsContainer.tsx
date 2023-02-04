import React from "react";
import {addPostActionCreator, InitialStateOfPostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: InitialStateOfPostsType
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
import React from "react";
import {
    addPostActionCreator,
    InitialStateOfPostsType,
    updateNewPostTextActionCreator
} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: InitialStateOfPostsType
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage

    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
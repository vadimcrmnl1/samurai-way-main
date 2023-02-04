import {v1} from "uuid";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type SetUserProfileAT = {
    type: 'SET_USER_PROFILE'
    userProfile: UserProfileType
}
export type SetStatusAT = {
    type: 'SET_STATUS'
    userStatus: string
}

type ProfileReducerAT = AddPostActionType | SetUserProfileAT | SetStatusAT
type UserPhotosType = {
    "small": string
    "large": string
}
type UserContactsType = {
    "facebook": string
    "website": string
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": string
    "github": string
    "mainLink": string
}
export type UserProfileType = {
    "aboutMe": string
    "contacts": UserContactsType
    "lookingForAJob": boolean | null
    "lookingForAJobDescription": string
    "fullName": string
    "userId": string | null
    "photos": UserPhotosType
}
type PostType = {
    id: string
    post: string
    likeCounts: number
}
export type InitialStateOfPostsType = {
    postsData: Array<PostType>
    newPostText: string
    userStatus: string
    userProfile: UserProfileType
}
let initialState = {
    postsData: [
        {id: v1(), post: 'Hi, how are you?', likeCounts: 15},
        {id: v1(), post: 'It is my first post', likeCounts: 6}
    ],
    newPostText: '',
    userStatus: '',
    userProfile: {
        "aboutMe": '',
        "contacts": {
            "facebook": '',
            "website": '',
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": '',
            "github": '',
            "mainLink": ''
        },
        "lookingForAJob": null,
        "lookingForAJobDescription": '',
        "fullName": '',
        "userId": null,
        "photos": {
            "small": '',
            "large": ''
        }
    }
}
export const profileReducer = (state: InitialStateOfPostsType = initialState, action: ProfileReducerAT): InitialStateOfPostsType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                post: action.newPostText,
                likeCounts: 0
            }

            return  {...state, postsData: [newPost, ...state.postsData]}

        }

        case SET_STATUS: {
            return {...state, userStatus: action.userStatus}
        }
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }
        default:
            return state
    }
}
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText})

export const setUserProfileAC = (userProfile: UserProfileType) => ({type: SET_USER_PROFILE, userProfile})
export const setStatusAC = (userStatus: string) => ({type: SET_STATUS, userStatus})

export const getUserProfile = (userId: string | undefined) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}
export const getStatus = (userId: string) => {

    return (dispatch: any) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}
export const updateStatus = (userStatus: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(userStatus).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(userStatus))
            }

        })
    }
}
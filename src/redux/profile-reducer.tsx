import {v1} from "uuid";
import {EditProfileRequestType, profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {setIsLoadingAC} from "./app-reducer";

const ADD_POST = 'ADD-POST'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'


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
export type SetPhotoAT = {
    type: 'SET_PHOTO'
    data: UserPhotosType
}


type ProfileReducerAT = AddPostActionType | SetUserProfileAT | SetStatusAT | SetPhotoAT
export type UserPhotosType = {
    data: {
        photos: {
            small: string
            large: string
        }
    }
}
type UserContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: UserContactsType
    lookingForAJob: boolean | null
    lookingForAJobDescription: string
    fullName: string
    userId: string | null
    photos: {
        small: string
        large: string
    }
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
let initialState: InitialStateOfPostsType = {
    postsData: [
        {id: v1(), post: 'Hi, how are you?', likeCounts: 15},
        {id: v1(), post: 'It is my first post', likeCounts: 6}
    ],
    newPostText: '',
    userStatus: '',
    userProfile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            small: '',
            large: ''
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
            return {...state, postsData: [newPost, ...state.postsData]}
        }
        case SET_STATUS: {
            return {...state, userStatus: action.userStatus}
        }
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }
        case SET_PHOTO:
            return {...state, userProfile: {...state.userProfile, photos: action.data.data.photos}}

        default:
            return state
    }
}
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText})

export const setUserProfileAC = (userProfile: UserProfileType) => ({type: SET_USER_PROFILE, userProfile} as const)
export const setStatusAC = (userStatus: string) => ({type: SET_STATUS, userStatus} as const)
export const setPhotoAC = (data: UserPhotosType) => ({type: SET_PHOTO, data} as const)

export const getUserProfile = (userId: string | undefined) => async (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    try {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfileAC(response.data))
    } catch (e: any) {
    } finally {
        dispatch(setIsLoadingAC(false))
    }

}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    try {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    } finally {
        dispatch(setIsLoadingAC(false))
    }

}
export const updateStatus = (userStatus: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    try {
        profileAPI.updateStatus(userStatus).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(userStatus))
            }
        })
    } finally {
        dispatch(setIsLoadingAC(false))
    }
}
export const updatePhotoTC = (file: {}) => async (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    try {
        const response = await profileAPI.updatePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoAC(response.data))
        }
    } finally {
        dispatch(setIsLoadingAC(false))
    }

}
export const editProfileTC = (data: EditProfileRequestType) => async (dispatch: any) => {
    dispatch(setIsLoadingAC(true))
    try {
        const response = await profileAPI.updateProfile(data)
        console.log(data)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(data.userId as string))
        }
    } finally {
        dispatch(setIsLoadingAC(false))
    }
}
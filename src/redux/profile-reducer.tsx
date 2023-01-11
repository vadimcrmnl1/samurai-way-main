import {v1} from "uuid";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type AddPostActionType = {
    type: 'ADD-POST'
    newPost: string
}
export type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST'
    newText: string
}
export type SetUserProfileAT = {
    type: 'SET_USER_PROFILE'
    userProfile: UserProfileType
}

type ProfileReducerAT = AddPostActionType | UpdateNewPostActionType | SetUserProfileAT
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
    userProfile: UserProfileType
}
let initialState = {
    postsData: [
        {id: v1(), post: 'Hi, how are you?', likeCounts: 15},
        {id: v1(), post: 'It is my first post', likeCounts: 6}
    ],
    newPostText: '',
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
                post: state.newPostText,
                likeCounts: 0
            }

            return  {...state, postsData: [newPost, ...state.postsData], newPostText: '',}

        }
        case UPDATE_NEW_POST: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST, newText: text})
export const setUserProfileAC = (userProfile: UserProfileType) => ({type: SET_USER_PROFILE, userProfile})

export const getUserProfile = (userId: string | undefined) => { //thunk not working
    return (dispatch: any) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}
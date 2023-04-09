import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {setIsLoadingAC} from "./app-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

type FollowAT = {
    type: 'FOLLOW',
    userId: number
}
type UnFollowAT = {
    type: 'UNFOLLOW',
    userId: number
}
type SetUsersAT = {
    type: 'SET_USERS',
    items: Array<UserType>
}
type SetCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetTotalUsersCountAT = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}
type ToggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
type ToggleIsFollowingAT = {
    type: 'TOGGLE_IS_FOLLOWING'
    isFollowing: boolean
    userId: number
}
type OnlyFriendsAT = {
    type: 'ONLY_FRIENDS'
    followed: boolean
}
export type UsersReducerAT =
    FollowAT
    | UnFollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | ToggleIsFollowingAT
    | OnlyFriendsAT

export type PhotosType = {
    'small': string
    'large': string
}
export type UserType = {
    "name": string
    "id": number
    "uniqueUrlName": string
    "photos": PhotosType
    "status": string
    "followed": boolean
}
export type InitialStateOfUsersType = {
    items: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number | boolean>

}

let initialState = {
    items: [],
    pageSize: 10,
    totalUsersCount: 1000000,
    currentPage: 1,
    isFetching: true,
    isFollowing: []

}
export const usersReducer = (state: InitialStateOfUsersType = initialState, action: UsersReducerAT): InitialStateOfUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, items: [...action.items]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
            }
        case "ONLY_FRIENDS":
            return {...state, items: state.items.filter(i => i.followed === action.followed)}
        default:
            return state
    }
}
//action creators
export const followSuccess = (userId: number) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (items: Array<UserType>) => ({type: SET_USERS, items})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingAC = (isFollowing: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId
})
export const onlyFriendsAC = (followed: boolean) => ({type: 'ONLY_FRIENDS', followed} as const)
//thunk creators

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    try {
        const data = await usersAPI.getUsersAPI(currentPage, pageSize)
        dispatch(setUsersAC(data.items))
    } finally {
        dispatch(setIsLoadingAC(false))
    }
}
export const pageChanged = (pageNumber: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    dispatch(setCurrentPageAC(pageNumber))
    try {
        const data = await usersAPI.getUsersAPI(pageNumber, pageSize)
        dispatch(setUsersAC(data.items))
    } finally {
        dispatch(setIsLoadingAC(false))
    }
}
export const unFollow = (userId: number) => async (dispatch: Dispatch) => {
    // dispatch(toggleIsFollowingAC(true, userId))
    dispatch(setIsLoadingAC(true))
    try {
        const response = await usersAPI.unFollowUserAPI(userId)
        if (response.data.resultCode === 0) {
            dispatch(unFollowSuccess(userId))
        }
        // dispatch(toggleIsFollowingAC(false, userId))
    } finally {
        dispatch(setIsLoadingAC(false))
    }
}
export const follow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    // dispatch(toggleIsFollowingAC(true, userId))
    try {
        const response = await usersAPI.followUserAPI(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingAC(false, userId))
    } finally {
        dispatch(setIsLoadingAC(false))
    }
}

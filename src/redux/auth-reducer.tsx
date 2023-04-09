import {authAPI, loginAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {setIsLoadingAC} from "./app-reducer";

const SET_USER_DATA = 'SET_USER_DATA'
const RESET_USER_AUTH_DATA = 'RESET_USER_AUTH_DATA'
const GET_CAPTCHA = 'GET_CAPTCHA'
const AUTH_USER_ID = 'AUTH_USER_ID'

type AuthUserIdAT = {
    type: 'AUTH_USER_ID'
    authUserId: number
}
type GetCaptchaAT = {
    type: 'GET_CAPTCHA'
    captcha: string
}
type SetUserDataAT = {
    type: 'SET_USER_DATA',
    data: DataPropsType,
    isAuth: boolean
}
type ResetUserAT = {
    type: 'RESET_USER_AUTH_DATA'
    state: InitialStateOfAuthType
}

export type UsersReducerAT = SetUserDataAT | ResetUserAT | GetCaptchaAT | AuthUserIdAT
export type InitialStateOfAuthType = {
    resultCode: number | null
    messages: Array<string>
    data: DataPropsType
    isAuth: boolean
    captcha?: string
    authUserId: number | null
}
export type DataPropsType = {
    id: number | null
    email: string | null
    login: string | null

}

export const initialStateAuth: InitialStateOfAuthType = {
    resultCode: null,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    captcha: '',
    authUserId: null,
}

export const authReducer = (state: InitialStateOfAuthType = initialStateAuth, action: UsersReducerAT): InitialStateOfAuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true,
            }
        case RESET_USER_AUTH_DATA:
            return {...state, ...initialStateAuth}
        case GET_CAPTCHA:
            return {...state, captcha: action.captcha}
        case AUTH_USER_ID:
            return {...state, authUserId: action.authUserId}
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})
const resetAuthDataAC = () => {
    return {type: RESET_USER_AUTH_DATA}
}
const getCaptchaAC = (captcha: string) => {
    return {type: GET_CAPTCHA, captcha}
}
export const getAuthUserIdAC = (authUserId: number) => {
    return {type: AUTH_USER_ID, authUserId}

}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.getMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login))
    }

}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => async (dispatch: any) => {
    dispatch(setIsLoadingAC(true))
    try {
        const response = await loginAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(getAuthUserIdAC(response.data.data.userId))
        }
        if (response.data.resultCode === 10) {
            dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
            dispatch(getCaptchaTC())
        } else {
            dispatch(stopSubmit('login', {
                _error: response.data.messages.length > 0
                    ? response.data.messages[0] : ''
            }))
        }
    } finally {
        dispatch(setIsLoadingAC(false))
    }

}

export const logout = () => async (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))

    const response = await loginAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(resetAuthDataAC())
        dispatch(setIsLoadingAC(false))

    }
}
export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    const response = await loginAPI.getCaptcha()
    dispatch(getCaptchaAC(response.data.url))
}
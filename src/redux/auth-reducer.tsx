import {authAPI, loginAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const RESET_USER_AUTH_DATA = 'RESET_USER_AUTH_DATA'
const GET_CAPTCHA = 'GET_CAPTCHA'


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

export type UsersReducerAT = SetUserDataAT | ResetUserAT | GetCaptchaAT
export type InitialStateOfAuthType = {
    resultCode: number | null
    messages: Array<string>
    data: DataPropsType
    isAuth: boolean
    captcha?: string

}
export type DataPropsType = {
    id: number | null
    email: string | null
    login: string | null

}

let initialState = {
    resultCode: null,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    captcha: '',
}
export const authReducer = (state: InitialStateOfAuthType = initialState, action: UsersReducerAT): InitialStateOfAuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true
            }
        case RESET_USER_AUTH_DATA:
            return {...state, ...initialState}
        case GET_CAPTCHA:
            return {...state, captcha: action.captcha}
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

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    return authAPI.getMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login))

        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => async (dispatch: any) => {
    const response = await loginAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
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
}

export const logout = () => async (dispatch: Dispatch) => {
    const response = await loginAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(resetAuthDataAC())
    }
}
export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    const response = await loginAPI.getCaptcha()
            dispatch(getCaptchaAC(response.data.url))
        console.log('captcha', response)

}
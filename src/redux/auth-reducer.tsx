import {authAPI, loginAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const RESET_USER_AUTH_DATA = 'RESET_USER_AUTH_DATA'
const GET_CAPTCHA = 'GET_CAPTCHA'


type GetCaptchaAT = {
    type: 'GET_CAPTCHA'
    captcha: boolean
    url: string
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
    captcha: boolean | null
    url: string | null
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
    captcha: false,
    url: null
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

            return {...state, captcha: action.captcha, url: action.url}
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
const getCaptchaAC = (captcha: boolean | null, url: string | null) => {
    return {type: GET_CAPTCHA, captcha, url}
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login))
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

    loginAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            if (response.data.resultCode === 10) {
                dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
                loginAPI.getCaptcha().then((response) => {
                    dispatch(getCaptchaAC(true, response.data.url))
                    console.log('state', initialState)

                    console.log('response', response)
                    console.log('state.captcha', initialState.captcha)
                })
            } else {
                dispatch(stopSubmit('login', {
                    _error: response.data.messages.length > 0
                        ? response.data.messages[0] : ''
                }))
                dispatch(getCaptchaAC(true, response.data.url))

            }
        })

}

export const logout = () => (dispatch: Dispatch) => {
    loginAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(resetAuthDataAC())
            }
        })
}
export const captchaTC = () => (dispatch: Dispatch) => {

    loginAPI.getCaptcha().then((response) => {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaAC(true, response.data.url))
            console.log('state', initialState)
        }

        // console.log('response', response)
        // console.log('state.captcha', initialState.captcha)
    })

}
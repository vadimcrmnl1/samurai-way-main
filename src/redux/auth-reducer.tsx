import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
type SetUserDataAT = {
    type: 'SET_USER_DATA',
    data: DataPropsType,

}

export type UsersReducerAT = SetUserDataAT
export type InitialStateOfAuthType = {
    resultCode: number | null
    messages: Array<string>
    data: DataPropsType
    isAuth: boolean
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
    isAuth: false
}
export const authReducer = (state: InitialStateOfAuthType = initialState, action: UsersReducerAT): InitialStateOfAuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true,


            }

        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
})
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.getMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login))
        }
    })
}


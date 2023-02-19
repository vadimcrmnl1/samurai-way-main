import {AppStateType} from "../reduxStore";

export const getUserAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const getUserId = (state: AppStateType) => {
    return state.auth.data.id
}
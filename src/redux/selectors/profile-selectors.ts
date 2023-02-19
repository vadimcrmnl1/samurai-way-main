import {AppStateType} from "../reduxStore";

export const getUserProfileInfo = (state: AppStateType) => {
    return state.profilePage.userProfile
}
export const getUserStatus = (state: AppStateType) => {
    return state.profilePage.userStatus
}
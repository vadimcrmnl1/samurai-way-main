import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

type SetInitializerAT = {
    type: 'SET_INITIALIZED'
    initialized: boolean
}

export type AppReducerAT = SetInitializerAT | SetIsLoadingAT
export type InitialStateOfAppType = {
    initialized: boolean
    isLoading: boolean
}

let initialStateOfApp = {
    initialized: false,
    isLoading: false
}
export const appReducer = (state: InitialStateOfAppType = initialStateOfApp, action: AppReducerAT): InitialStateOfAppType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {...state, initialized: true}
        case "SET_ID_LOADING":
            return {...state, isLoading: action.payload.isLoading}
        default:
            return state
    }
}

export const setInitializedSuccessAC = () => ({type: SET_INITIALIZED})
export const setIsLoadingAC = (isLoading: boolean) => ({type: 'SET_ID_LOADING', payload: {isLoading}} as const)

type SetIsLoadingAT = ReturnType<typeof setIsLoadingAC>

export const initializeApp = () => (dispatch: any) => {
    dispatch(setIsLoadingAC(true))
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitializedSuccessAC())
        dispatch(setIsLoadingAC(false))

    })

}


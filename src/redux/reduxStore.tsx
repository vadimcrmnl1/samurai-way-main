import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./DialogsReducer";
import {profileReducer} from "./ProfileReducer";


export const rootReducer = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)




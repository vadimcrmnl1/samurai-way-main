import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./DialogsReducer";
import {profileReducer} from "./ProfileReducer";
import {usersReducer} from "./UsersReducer";


export const rootReducer = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)




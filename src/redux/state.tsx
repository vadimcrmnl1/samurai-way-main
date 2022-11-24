import ava from './avatar.png'
import {v1} from "uuid";


export type DialogsType = {
    id: string
    name: string
    avatar?: string
}
export type MessagesType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    post: string
    likeCounts: number
}
export type MessagesPageType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
    newMessageText: string
}
export type ProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
}
export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType

}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let store = {
    _state: {
        messagesPage: {
            dialogsData: [
                {id: v1(), name: 'Mikita', avatar: ava},
                {id: v1(), name: 'Alexey', avatar: ava},
                {id: v1(), name: 'Nika', avatar: ava},
                {id: v1(), name: 'Andrey', avatar: ava},
                {id: v1(), name: 'Maxim', avatar: ava}
            ],
            messagesData: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'I am right'}
            ],
            newMessageText: '',
        },
        profilePage: {
            postsData: [
                {id: v1(), post: 'Hi, how are you?', likeCounts: 15},
                {id: v1(), post: 'It is my first post', likeCounts: 6}
            ],
            newPostText: '',
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        if (action.type === ADD_MESSAGE) {
            let newMessage: MessagesType = {
                id: v1(),
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber()
        }
        if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagesPage.newMessageText = action.newText
            this._callSubscriber()
        }
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: v1(),
                post: this._state.profilePage.newPostText,
                likeCounts: 0
            }
            newPost.post.trim() !== ''
                ? this._state.profilePage.postsData.unshift(newPost)
                : this._state.profilePage.newPostText = ''
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }

    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST, newText: text})
export const AddMessageActionCreator = () => ({type: ADD_MESSAGE})
export const UpdateNewMessageActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE, newText: text})
export default store;
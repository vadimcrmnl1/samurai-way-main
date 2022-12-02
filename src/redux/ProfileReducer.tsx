import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
export type AddPostActionType = {
    type: 'ADD-POST'
    newPost: string
}
export type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST'
    newText: string
}
type ProfileReducerAT = AddPostActionType | UpdateNewPostActionType
type PostType = {
    id: string
    post: string
    likeCounts: number
}
export type InitialStateOfPostsType = {
    postsData: Array<PostType>
    newPostText: string
}


let initialState = {
    postsData: [
        {id: v1(), post: 'Hi, how are you?', likeCounts: 15},
        {id: v1(), post: 'It is my first post', likeCounts: 6}
    ],
    newPostText: ''
}

export const profileReducer = (state: InitialStateOfPostsType = initialState, action: ProfileReducerAT): InitialStateOfPostsType => {

    switch (action.type) {
        case ADD_POST: {

            let newPost: PostType = {
                id: v1(),
                post: state.newPostText,
                likeCounts: 0
            }
            let stateCopy = {...state, postsData: [...state.postsData]}

            newPost.post.trim() !== ''
                ? stateCopy.postsData.unshift(newPost)
                : stateCopy.newPostText = ''
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST, newText: text})

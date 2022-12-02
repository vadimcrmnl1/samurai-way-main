export const ReduxTypesOnlyForRead = () => {

}
// type DialogsType = {
//     id: string
//     name: string
//     avatar: string
// }
// type MessagesType = {
//     id: string
//     message: string
// }
// type PostsType = {
//     id: string
//     post: string
//     likeCounts: number
// }
// type MessagesPageType = {
//     dialogsData: Array<DialogsType>
//     messagesData: Array<MessagesType>
//     newMessageText: string
// }
// type ProfilePageType = {
//     postsData: Array<PostsType>
//     newPostText: string
// }
// type StateType = {
//     messagesPage: MessagesPageType
//     profilePage: ProfilePageType
// }
// // type DispatchType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageActionType
// type StoreType = {
//     _state: StateType
//     _callSubscriber: (state: StateType) => void
//     getState: () => StateType
//     subscribe: (observer: () => void) => void
//     dispatch: (action: any) => void
// }
import {v1} from "uuid";
import {addPostActionCreator, profileReducer} from "./profile-reducer";

let state: any = {
    postsData: [
        {id: v1(), post: 'Hi, how are you?', likeCounts: 15},
        {id: v1(), post: 'It is my first post', likeCounts: 6}
    ],
}
it('new post', () => {
    const action: any = addPostActionCreator('My friend')
    const newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(3)
})
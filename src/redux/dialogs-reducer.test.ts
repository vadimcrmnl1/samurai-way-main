import {AddMessageActionCreator, dialogsReducer} from "./dialogs-reducer";
import {v1} from "uuid";
import ava from "../assets/avatar.png";

it('dialog should be updated', () => {
    let action: any = AddMessageActionCreator('sdsdsd')
    let state = {
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
    }
    let newState = dialogsReducer(state, action)
    expect(newState.messagesData.length).toBe(4)
})
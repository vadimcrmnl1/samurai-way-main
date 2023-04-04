import React, {ChangeEvent, useState, useEffect} from 'react'
import s from './Profile.module.css'

type ProfileStatusPropsType = {
    userStatus: string
    updateStatus: (userStatus: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.userStatus)

    useEffect(() => {
        setStatus(props.userStatus)
    }, [props.userStatus])

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && offEditMode()


    return (
        <div>
            {!editMode ?
                <div className={s.status}>Status:
                    <span
                        onDoubleClick={onEditMode}> {!props.userStatus ? 'no status' : props.userStatus}</span>
                </div> :
                <div>
                    <input onChange={changeStatus}
                           value={status}
                           autoFocus={true}
                           onBlur={offEditMode}
                           onKeyDown={onEnterPress}
                    />
                </div>}

        </div>
    )
}
// export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
//
//     state = {
//         editMode: false,
//         userStatus: this.props.userStatus
//
//     }
//
//     onEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//
//     offEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatus(this.state.userStatus)
//     }
//     changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
//         this.setState({userStatus: e.currentTarget.value})
//     }
//     onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && this.offEditMode()
//
//     componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
//
//         if (prevProps.userStatus !== this.props.userStatus) {
//             this.setState({
//                 status: this.props.userStatus
//             })
//         }
//     }
//
//     render() {
//
//         return (
//             <div>
//                 {!this.state.editMode ?
//                     <div className={s.status}>Status:
//                         <span
//                             onDoubleClick={this.onEditMode}> {!this.props.userStatus ? 'no status' : this.props.userStatus}</span>
//                     </div> :
//                     <div>
//                         <input onChange={this.changeStatus}
//                                value={this.state.userStatus}
//                                autoFocus={true}
//                                onBlur={this.offEditMode}
//                                onKeyDown={this.onEnterPress}
//                         />
//                     </div>}
//
//             </div>
//         )
//     }
//
//
// }
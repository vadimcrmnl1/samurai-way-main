import React, {ChangeEvent} from 'react'
import s from './Profile.module.css'

type ProfileStatusPropsType = {
    userStatus: string
    updateStatus: (userStatus: string) => void
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        userStatus: this.props.userStatus

    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    offEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.userStatus)
    }
    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({userStatus: e.currentTarget.value})
    }

    render() {
        console.log(this.props.userStatus)
        return (
            <div>
                {!this.state.editMode ?
                    <div className={s.status}>
                        <span onDoubleClick={this.onEditMode}>Status: {!this.props.userStatus ? 'no status' : this.props.userStatus}</span>
                    </div> :
                    <div>
                        <input onChange={this.changeStatus} value={this.state.userStatus} autoFocus={true} onBlur={this.offEditMode}/>
                    </div>}

            </div>
        )
    }


}
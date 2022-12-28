import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    followSuccess,
    getUsers,
    InitialStateOfUsersType,
    pageChanged,
    setTotalUserCountAC,
    toggleIsFollowingAC,
    unFollow,
    unFollowSuccess,
    UserType,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Users} from "./Users";


type MapStatePropsType = {
    usersPage: InitialStateOfUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number | boolean>
}
type MapDispatchToPropsType = {
    followSuccess: (userId: number) => void
    unFollowSuccess: (userId: number) => void
    setUsers: (items: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowing: (isFollowing: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    pageChanged: (pageNumbed: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.pageChanged(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage}
                   onPageChanged={this.onPageChanged}
                   setCurrentPage={this.props.setCurrentPage}
                   isFetching={this.props.isFetching}
                   isFollowing={this.props.isFollowing}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}
export const UsersListContainer = connect(mapStateToProps,
    {
        followSuccess: followSuccess,
        unFollowSuccess: unFollowSuccess,
        setTotalUserCount: setTotalUserCountAC,
        toggleIsFollowing: toggleIsFollowingAC,
        getUsers, pageChanged, unFollow, follow
    })(UsersContainer)
import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    InitialStateOfUsersType,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingAC, toggleIsFollowingAC,
    unFollowAC,
    UserType,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Users} from "./Users";
import {usersAPI} from "../../api/api";


type MapStatePropsType = {
    usersPage: InitialStateOfUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: Array<number | boolean>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (items: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowing: (isFollowing: boolean, id: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsersAPI(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsersAPI(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   setCurrentPage={this.props.setCurrentPage}
                   isFetching={this.props.isFetching}
                   isFollowing={this.props.isFollowing}
                   toggleIsFollowing={this.props.toggleIsFollowing}
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
    {follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleIsFollowing: toggleIsFollowingAC})(UsersContainer)
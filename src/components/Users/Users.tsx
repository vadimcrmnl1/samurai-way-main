import React from "react";
import s from "./UsersList.module.css";
import {InitialStateOfUsersType} from "../../redux/users-reducer";
import ava from './../../assets/avatar.png'
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersPage: InitialStateOfUsersType
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    isFetching: boolean
    setCurrentPage: (currentPage: number) => void
    isFollowing: Array<number | boolean>
    toggleIsFollowing: (isFollowing: boolean, id: number) => void

}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 10;
    let slicedPages = pages.slice(curPF, curPL);

    // const finalClass = props.isFollowing.some(id => id === id) ? s.buttonDisabled : s.button

    return <div className={s.content}>
        <div className={s.mainTitle}>Users</div>
        <div className={s.pagesArea}>
            {slicedPages.map(p => {
                return <button className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                               onClick={() => {
                                   props.onPageChanged(p)
                               }}>{p}</button>
            })}
        </div>
        <div className={s.toggle}>{props.isFetching ? <Preloader/> : null}</div>
        <div>{props.usersPage.items.map(u => <div className={s.userBlock} key={u.id}>
                <span>
                    <div className={s.avaButton}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : ava} alt={'avatar'} className={s.avatar}/>
                    </NavLink>

                    </div>
                    <div className={s.buttons}>
                        {u.followed ? <button disabled={props.isFollowing.some(id => id === u.id)} className={s.button} onClick={() => {
                            props.toggleIsFollowing(true, u.id)
                                usersAPI.unFollowUserAPI(u.id).then(response => {

                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    props.toggleIsFollowing(false, u.id)
                                })
                            }}>Unfollow</button>
                            : <button disabled={props.isFollowing.some(id => id === u.id)} className={s.button} onClick={() => {
                                props.toggleIsFollowing(true, u.id)
                                usersAPI.followUserAPI(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowing(false, u.id)
                                })


                            }}>Follow</button>}
                        <button className={s.button}>Profile</button>
                        <button className={s.button}>Chat</button>
                    </div>
                </span>
                <span>
                    <div className={s.nameStatus}>
                        <div className={s.fullName}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                    <div className={s.userProps}>
                        <div>user ID {u.id}</div>
                    </div>
                </span>
            </div>
        )}</div>
        <div className={s.pagesArea}>
            {slicedPages.map(p => {
                return <button className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                               onClick={() => {
                                   props.onPageChanged(p)
                               }}>{p}</button>
            })}
        </div>
    </div>
}
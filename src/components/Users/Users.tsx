import React from "react";
import s from "./UsersList.module.css";
import {InitialStateOfUsersType} from "../../redux/users-reducer";
import ava from './../../assets/avatar.png'
import {Preloader} from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersPage: InitialStateOfUsersType
    onPageChanged: (pageNumber: number) => void
    isFetching: boolean
    setCurrentPage: (currentPage: number) => void
    isFollowing: Array<number | boolean>
    follow: (userId: number) => void
    unFollow: (userId: number) => void

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
                        {u.followed ? <button style={{backgroundColor: 'green'}}
                                              disabled={props.isFollowing.some(id => id === u.id)} className={s.button}
                                              onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                            : <button disabled={props.isFollowing.some(id => id === u.id)} className={s.button}
                                      onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                        <NavLink to={'/profile/' + u.id}><button className={s.button}>Profile</button></NavLink>
                        <button className={s.button}>Chat</button>
                    </div>
                </span>
                <div>
                    <div className={s.nameStatus}>
                        <div className={s.fullName}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                    <div className={s.userProps}>
                        <div>user ID {u.id}</div>
                    </div>
                </div>
            </div>
        )}</div>
        <div className={s.pagesArea}>
            {slicedPages.map((p, index) => {
                return <button key={index} className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                               onClick={() => {
                                   props.onPageChanged(p)
                               }}>{p}</button>
            })}
        </div>
    </div>
}
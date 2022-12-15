import React from "react";
import preloader from '../../../assets/preloader.svg'
import s from "../../Users/UsersList.module.css";
import loadingLogo from "../../../assets/preloader.svg";

export const Preloader = () => {
    return (
        <img src={loadingLogo} alt={'loading'}/>
    )
}
import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";

import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Photo from "./components/Photo/Photo";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";


const App = () => {


    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavbarContainer/>
            <div className={s.appWrapperContent}>
                <Route path='/dialogs'
                       render={() => (<DialogsContainer/>)}>
                </Route>
                <Route path='/profile'
                       render={() => (<Profile/>)}>
                </Route>
                <Route path='/news' component={News}></Route>
                <Route path='/music' component={Music}></Route>
                <Route path='/photo' component={Photo}></Route>
            </div>
        </div>
    );
}


export default App;

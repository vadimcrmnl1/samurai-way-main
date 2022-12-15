import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Photo from "./components/Photo/Photo";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {Footer} from "./components/Footer/Footer";
import {InitialComponent} from "./components/InitialeComponent/InitialComponent";
import {UsersListContainer} from "./components/Users/UsersListContainer";
import {ProfileListContainer} from "./components/Profile/ProfileListContainer";


const App = () => {


    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavbarContainer/>
            <div className={s.appWrapperContent}>
                <Route path='//' render={() => (<InitialComponent/>)}></Route>
                <Route path='/dialogs' render={() => (<DialogsContainer/>)}></Route>
                <Route path='/profile/:userId?' component={ProfileListContainer}></Route>
                <Route path='/news' component={News}></Route>
                <Route path='/music' component={Music}></Route>
                <Route path='/photo' component={Photo}></Route>
                <Route path='/users' component={UsersListContainer}></Route>
            </div>
            <Footer/>
        </div>
    );
}


export default App;

import React from 'react';
import s from './App.module.css';
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
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from './components/Login/Login';


const App = () => {


    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className={s.appWrapperContent}>
                <Route path='//' render={() => (<InitialComponent/>)}></Route>
                <Route path='/dialogs' render={() => (<DialogsContainer/>)}></Route>
                <Route path='/profile/:userId?' component={ProfileListContainer}></Route>
                <Route path='/news' component={News}></Route>
                <Route path='/music' component={Music}></Route>
                <Route path='/photo' component={Photo}></Route>
                <Route path='/users' component={UsersListContainer}></Route>
                <Route path='/login' component={LoginContainer}></Route>
            </div>
            <Footer/>
        </div>

    );
}


export default App;

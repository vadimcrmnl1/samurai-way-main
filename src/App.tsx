import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Photo from "./components/Photo/Photo";
import state, {StateType} from "./redux/state";


type StatePropsType = {
    state: StateType
}


const App = (props: StatePropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar.sidebarData}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => (<Dialogs state={props.state.messagesPage}/>)}></Route>
                <Route path='/profile' render={() => (<Profile state={props.state.profilePage}/>)}></Route>
                <Route path='/news' component={News}></Route>
                <Route path='/music' component={Music}></Route>
                <Route path='/photo' component={Photo}></Route>
            </div>
        </div>
    );
}


export default App;

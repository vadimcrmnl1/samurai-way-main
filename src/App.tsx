import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Photo from "./components/Photo/Photo";
import {StateType} from "./redux/state";


type StatePropsType = {
    state: StateType

    dispatch: (action: any) => void
}


const App = (props: StatePropsType) => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar state={props.state.messagesPage.dialogsData}/>
            <div className={s.appWrapperContent}>
                <Route path='/dialogs'
                       render={() => (
                           <Dialogs state={props.state.messagesPage}
                                    newMessageText={props.state.messagesPage.newMessageText}
                                    dispatch={props.dispatch}/>)}>
                </Route>
                <Route path='/profile'
                       render={() => (
                           <Profile profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}/>)}>
                </Route>
                <Route path='/news' component={News}></Route>
                <Route path='/music' component={Music}></Route>
                <Route path='/photo' component={Photo}></Route>
            </div>
        </div>
    );
}


export default App;

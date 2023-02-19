import React from 'react';
import s from './App.module.css';
import {Route, RouteComponentProps, withRouter} from "react-router-dom";
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
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp, InitialStateOfAppType} from "./redux/app-reducer";
import {AppStateType} from "./redux/reduxStore";
import {Preloader} from "./components/common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType & RouteComponentProps

class App extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <div className={s.preloader}><Preloader/></div>
        }
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
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
    initializeApp,
}), withRouter)(App)
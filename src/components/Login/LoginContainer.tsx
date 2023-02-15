import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Login} from "./Login";
import {login} from "../../redux/auth-reducer";

export const LoginContainer = compose<React.ComponentType>(
    connect(null, {login})(Login)
)
import React, { Component } from 'react';
import {theme} from "../style/theme";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core/styles';
import {ToastAlert} from "../containers";
import {SYSTEM_ROUTES} from '../constants'
import {environmentDev} from "../environments";
import {Chatbot} from "../pages";

export class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ToastAlert />
                <BrowserRouter basename={environmentDev.URL_BUILD}>
                    <Switch>
                        <Route exact path={SYSTEM_ROUTES.CHATBOT.route} component={Chatbot} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}


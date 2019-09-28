import React from 'react'
import AuthForm from './view'
import firebase from '~/firebase'

import { routesMap } from "~/routes"

export default class AuthContainer extends React.Component {
    state = {
        title: '',
        isSignUp: this.props.location.pathname === '/signup',
        email: '',
        password: '',
        error: '',
        blockControls: false
    };

    componentDidMount() {
        if (this.state.isSignUp) {
            this.setState({
                title: 'Sign up'
            })
        } else {
            this.setState({
                title: 'Sign in'
            })
        }
    }

    keyPressHandler = e => {
        this.dropError();
        if (e.keyCode === 13) {
            e.target.blur();

            setTimeout(() => {
                //Нулевой таймаут чтобы вывести код ниже в конец очереди вызова
                if (this.state.isSignUp) {
                    this.sign_up(e);
                } else {
                    this.sign_in(e);
                }
            }, 0);
        }
    };

    sign_up = e => {
        e.preventDefault();
        this.dropError();
        this.blockButtons(true);
        firebase.app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(r => {
                this.blockButtons(false);
                this.props.history.push(routesMap['home'])
            })
            .catch((error) => {
                this.blockButtons(false);
                this.setState({
                    error: error.message
                })
            });
    };

    sign_in = e => {
        e.preventDefault();
        this.dropError();
        this.blockButtons(true);
        firebase.app.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(r => {
                this.blockButtons(false);
                this.props.history.push('/')
            })
            .catch((error) => {
                this.blockButtons(false);
                this.setState({
                    error: error.message
                })
            });
    };

    dropError = () => {
        this.setState({
            error: ''
        })
    };

    setEmail = (e) => {
        e.persist();
        this.setState({
            email: e.target.value,
        });
    };

    setPassword = (e) => {
        e.persist();
        this.setState({
            password: e.target.value,
        });
    };

    blockButtons = (status) => {
        this.setState({
            blockControls: status
        })
    };

    render() {
        return (
            <AuthForm
                title={this.state.title}
                email={this.state.email}
                password={this.state.password}
                error={this.state.error}
                blockControls={this.state.blockControls}
                emailInput={this.setEmail}
                passwordInput={this.setPassword}
                keyPress={this.keyPressHandler}
                sign_up={this.sign_up}
                sign_in={this.sign_in}
                dropError={this.dropError}
                goSignup={() => {
                    this.props.history.push(routesMap['signup'])
                }}
                goSignin={() => {
                    this.props.history.push(routesMap['signin'])
                }}
            />
        )
    }
}
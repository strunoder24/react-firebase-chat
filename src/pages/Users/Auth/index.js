import React from 'react'
import AuthForm from './view'

export default class extends React.Component {
    state = {
        title: this.props.location.pathname === '/signin' ? 'Sign in' : 'Sign on',
        email: '',
        password: '',
    };

    keyPressHandler = e => {
        if (e.keyCode === 13) {
            console.log('enter pressed');
        }
    };

    sign_on = () => {

    };

    sign_in = () => {

    };

    render() {
        return (
            <AuthForm
                title={this.state.title}
                email={this.state.email}
                password={this.state.password}
                emailInput={e => {
                    this.setState({
                        email: e.target.value,
                    });
                }}
                passwordInput={e => {
                    this.setState({
                        password: e.target.value,
                    });
                }}
                keyPress={this.keyPressHandler}
                sign_on={this.sign_on}
                sign_in={this.sign_in}
            />
        )
    }
}
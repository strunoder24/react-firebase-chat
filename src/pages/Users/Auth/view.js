import React from 'react'
import propTypes from 'prop-types'

import styles from './styles.module.scss'
import { Container, Form, Button } from "react-bootstrap";

export default class extends React.Component {
    static propTypes = {
        title: propTypes.string,
        email: propTypes.string,
        password: propTypes.string,
        sign_up: propTypes.func,
        sign_in: propTypes.func,
        blockControls: propTypes.bool,
        error: propTypes.string,
        emailInput: propTypes.func,
        passwordInput: propTypes.func,
        keyPress: propTypes.func,
        dropError: propTypes.func,
        goSignin: propTypes.func,
        goSignup: propTypes.func
    };

    state = {};

    render() {
        const actionButton = () => {
            if (this.props.title === 'Sign in') {
                return (
                    <>
                        <Button disabled={this.props.blockControls}
                                onClick={this.props.goSignup}
                                variant="secondary">
                            Sign up instead
                        </Button>
                        <Button className={styles.actionButton}
                                disabled={this.props.blockControls}
                                variant="primary"
                                onClick={this.props.sign_in}
                                type="submit">
                            Sign in
                        </Button>
                    </>
                )
            }  else {
                return (
                    <>
                        <Button disabled={this.props.blockControls}
                                variant="secondary"
                                onClick={this.props.goSignin}>
                            Sign up instead
                        </Button>
                        <Button className={styles.actionButton}
                                disabled={this.props.blockControls}
                                onClick={this.props.sign_up}
                                variant="primary"
                                type="submit">
                            Sign up
                    </Button>
                    </>
                )
            }
        };

        const error = () => {
            if (this.props.error) {
                return (
                    <div className={styles.errorText}>Error: { this.props.error }</div>
                )
            }
        };

        return (
            <Container className={'center-container'} fluid={true}>
                <div className={this.props.error ? styles["auth-container-with-error"] : styles["auth-container"]}>
                    <Form>
                        <div>{ error() }</div>
                        <div className={styles["form-title"]}>{ this.props.title }</div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"
                                          disabled={this.props.blockControls}
                                          onBlur={this.props.emailInput}
                                          onFocus={this.props.dropError}
                                          onKeyDown={this.props.keyPress}
                                          defaultValue={this.props.email} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                disabled={this.props.blockControls}
                                onBlur={this.props.passwordInput}
                                onFocus={this.props.dropError}
                                onKeyDown={this.props.keyPress}
                                defaultValue={this.props.password} />
                        </Form.Group>
                        <div className={styles.buttonContainer}>
                            { actionButton() }
                        </div>
                    </Form>
                </div>
            </Container>
        )
    }
}
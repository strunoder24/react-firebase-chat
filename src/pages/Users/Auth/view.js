import React from 'react'
import propTypes from 'prop-types'

import styles from './styles.module.scss'
import { Container, Form, Button } from "react-bootstrap";

export default class extends React.Component {
    static propTypes = {
        title: propTypes.string,
        email: propTypes.string,
        password: propTypes.string,
        sign_on: propTypes.func,
        emailInput: propTypes.func,
        passwordInput: propTypes.func,
        keyPress: propTypes.func
    };

    state = {};

    render() {
        const actionButton = () => {
            if (this.props.title === 'Sign in') {
                return (
                    <Button className={styles.actionButton} variant="primary" type="submit">
                        Submit
                    </Button>
                )
            }  else {
                return (
                    <Button className={styles.actionButton}
                            onClick={this.props.sign_on}
                            variant="primary"
                            type="submit">
                        Sign on
                    </Button>
                )
            }
        };

        return (
            <Container className={'center-container'} fluid={true}>
                <div className={styles["auth-container"]}>
                    <Form>
                        <div className={styles["form-title"]}>{ this.props.title }</div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"
                                          onBlur={this.props.emailInput}
                                          onKeyUp={this.props.keyPress}
                                          defaultValue={this.props.email} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onBlur={this.props.passwordInput}
                                defaulValue={this.props.password} />
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
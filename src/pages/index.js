import React from 'react'
import {Link} from 'react-router-dom'
import { observer, inject } from "mobx-react";

import Chat from '~p/Chat'

export default @inject('store') @observer class extends React.Component {
    render() {
        if (this.props.store.users.userStateUpdated === 0) {
            return <div />
        } else {
            return <Chat />
        }
    }
}
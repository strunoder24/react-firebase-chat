import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { observer, inject } from "mobx-react";

import Nav from '~c/navbar/Nav';
import Channel from '~c/chat/Channel';

export default inject('store')(observer(function (props) {
    return (
        <div className="App">
            <Nav />
            <Channel />
        </div>
    )
}));
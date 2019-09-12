import React from 'react';

import { observable, action, computed } from 'mobx';


class Auth {
    isAuthenticated = observable(false);

    authenticationStatus = action(status => {
        this.isAuthenticated = status
    });
}

export default Auth
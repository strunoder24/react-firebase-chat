import React from 'react';
import ReactDOM from 'react-dom';

import store from '~s/index'
import App from '~/App'

import { Provider } from "mobx-react";


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
    document.querySelector("#app"));
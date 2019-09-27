import firebase from "~/firebase/init";

import store from '~s'

const checkUserState = firebase.auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log('im logged');
    } else {
        store.users.setUser(false)
    }
});
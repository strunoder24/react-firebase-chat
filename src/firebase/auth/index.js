import firebase from "~/firebase/init";

import store from '~s'

firebase.auth.onAuthStateChanged(function(user) {
    if (user) {
        store.users.setUser(user)
    } else {
        store.users.setUser(false)
    }
});
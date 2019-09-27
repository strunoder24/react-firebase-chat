import { observable, action } from 'mobx'

export default class {
    constructor(context) {
        this.root = context
    }

    @observable user = false;
    @observable userStateUpdated = 0;

    @action setUser(user){
        this.user = user;
        this.userStateUpdated++
    }
}
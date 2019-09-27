import Counter from './modules/testCounter'
import User from './modules/users'

class RootStore {
    constructor(){
        this.counter = new Counter(this); //Передаём потомкам свой контекст чтобы они связывались друг с другом
        this.users = new User(this)
    }
}

export default new RootStore();
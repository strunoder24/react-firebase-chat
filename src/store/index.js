import Counter from './modules/testCounter'

class RootStore {
    constructor(){
        this.counter = new Counter(this); //Передаём потомкам свой контекст чтобы они связывались друг с другом
    }
}

export default new RootStore();
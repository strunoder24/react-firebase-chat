import { observable, action } from 'mobx'

export default class {
    constructor(rootStore) {
        // Теперь этот модуль может обратится к любому другому через общего предка
        this.root = rootStore
    }

    @observable value = 0;

    @action plus1() {
        this.value++
    };

    @action minus1(){
        if (this.value > 1) this.value--
    }
}
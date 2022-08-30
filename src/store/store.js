import { createStore } from 'vuex';

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const storage = {
    fetch()  {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++){
                let obj = localStorage.getItem(localStorage.key(i));            
                obj = JSON.parse(obj);              
                arr.push(obj);                
            }
        }
        return arr;
    }
}

export default createStore({
    state: {
        headerText: 'My Diary Header',
        diaryItemArr: storage.fetch()
    },
    mutations: mutations,
    actions: actions,
    getters: getters
});
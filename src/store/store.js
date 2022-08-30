import { createStore } from 'vuex';

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
    mutations: {
        ADD_ONE_ITEM (state, payload) {
            let obj = {completed: false, item: payload}
            localStorage.setItem(payload, JSON.stringify(obj));           
            state.diaryItemArr.push(obj);
        },
        REMOVE_DIARY (state, payload) {
            localStorage.removeItem(payload.item.item);
            state.diaryItemArr.splice(payload.index, 1);
        },    
        TOGGGLE_COMPLETE (state, payload) {        
              // _item.completed = !_item.completed;
              state.diaryItemArr[payload.index].completed =!  state.diaryItemArr[payload.index].completed 
              localStorage.removeItem(payload.item.item);
              localStorage.setItem(payload.item.item, JSON.stringify(payload.item))
        },
        CLEAR_DIARY (state) {
            state.diaryItemArr.splice(0);
            localStorage.clear();
        }
    },
    actions: {
        fetchAddItem(context, item) {
            context.commit('ADD_ONE_ITEM', item);
        },
        fetchRemoveItem({commit},data) {
            commit('REMOVE_DIARY', data);
        },
        fetchToggleItem({commit},data) {
           commit('TOGGGLE_COMPLETE', data);
        },
        fetchClearAll({commit}) {
           commit('CLEAR_DIARY');
        },
    },
    getters: {
        getDiaryItemsAll(state) {
            return state.diaryItemArr
        }
    }
});
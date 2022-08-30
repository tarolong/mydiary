const ADD_ONE_ITEM = (state, payload) => {
    let obj = {completed: false, item: payload}
    localStorage.setItem(payload, JSON.stringify(obj));           
    state.diaryItemArr.push(obj);
}
const REMOVE_DIARY=  (state, payload)=> {
    localStorage.removeItem(payload.item.item);
    state.diaryItemArr.splice(payload.index, 1);
}    
const TOGGGLE_COMPLETE = (state, payload) =>{        
      // _item.completed = !_item.completed;
      state.diaryItemArr[payload.index].completed =!  state.diaryItemArr[payload.index].completed 
      localStorage.removeItem(payload.item.item);
      localStorage.setItem(payload.item.item, JSON.stringify(payload.item))
}
const CLEAR_DIARY = (state)=> {
    state.diaryItemArr.splice(0);
    localStorage.clear();
}

export { ADD_ONE_ITEM, REMOVE_DIARY, TOGGGLE_COMPLETE, CLEAR_DIARY}
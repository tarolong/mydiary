const fetchAddItem = (context, item) => {
    context.commit('ADD_ONE_ITEM', item);
}
const fetchRemoveItem = ({commit},data) => {
    commit('REMOVE_DIARY', data);
}
const fetchToggleItem = ({commit},data) => {
   commit('TOGGGLE_COMPLETE', data);
}
const fetchClearAll = ({commit}) => {
   commit('CLEAR_DIARY');
}
export { fetchAddItem, fetchRemoveItem, fetchToggleItem, fetchClearAll}
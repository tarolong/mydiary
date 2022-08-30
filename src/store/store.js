import { createStore } from 'vuex';

// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'
import diaryStorey from './modules/diaryStorey'

export default createStore({
    modules: {
        diaryStorey: diaryStorey
    }
});
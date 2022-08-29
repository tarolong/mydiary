<template>
    <div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="(item, index) in items" :key="index" class="shadow">
                <i class="checkBtn fas fa-check" :class={checkBtnCompleted:item.completed} @click="toggleComplete(item, index)"></i>
                <span :class="{textComplted:item.completed}">{{item.item}}</span>
                <span class="removeBtn" @click="removeDiary(item, index)">
                     <i class="fas fa-trash addBtn"></i>
                </span>
            </li>
        </TransitionGroup>
    </div>
</template>
<script>
import {ref} from 'vue'
import  { useStore } from 'vuex'
export default {

    setup() {
        const store = useStore();
        const items = ref([]);
        items.value = store.state.diaryItemArr;
        const removeDiary = (_item, _index) => {
            // context.emit('removeDiary', _item, _index );  
            store.commit('REMOVE_DIARY', {item:_item, index:_index});          
        }
        const toggleComplete = (_item, _index) => {
            // context.emit('toggleComplete', _item, _index );  
            store.commit('TOGGGLE_COMPLETE', {item:_item, index:_index});          
        }

        return {
            removeDiary,
            toggleComplete,
            items
        }
    }
}
</script>
<style scoped>
ul {
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background-color: #fff;
    border-radius: 5px;
}

.removeBtn{
    margin-left: auto;
    color:#de4343;
    cursor: pointer;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textComplted {
    text-decoration: line-through;
    color:#b3adad;
}

/* 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
    
</style>
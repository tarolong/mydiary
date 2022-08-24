<template>
    <div>
       <ul>
            <li v-for="(item, index) in diaryItemArr" :key="index" class="shadow">
                <i class="checkBtn fas fa-check" :class={checkBtnCompleted:item.completed} @click="toggleComplete(item, index)"></i>
                <span :class="{textComplted:item.completed}">{{item.item}}</span>
                <span class="removeBtn" @click="removeDiary(item, index)">
                     <i class="fas fa-trash addBtn"></i>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    setup() {

        const diaryItemArr = reactive([]);
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++){

                let obj = localStorage.getItem(localStorage.key(i));
                // console.log(temp);
                obj = JSON.parse(obj);
                // console.log(temp);                
                diaryItemArr.push(obj);                
            }
        }

        const removeDiary = (_item, _index) => {
            localStorage.removeItem(_item.item);
            diaryItemArr.splice(_index, 1);
        }

        const toggleComplete = (_item) => {
            _item.completed = !_item.completed;
            localStorage.removeItem(_item.item);
            localStorage.setItem(_item.item, JSON.stringify(_item))
        }

        return {
            diaryItemArr,
            removeDiary,
            toggleComplete
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
    
</style>
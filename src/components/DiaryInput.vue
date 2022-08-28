<template>
    <div class="inputBox shadow">
        <input type="text" class="inputBox" v-model="newItem" v-on:keyup.enter="addItem">
        <!-- <button>추가</button> -->
        <span class="addContainer"  @click="addItem">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {

    setup(props, context) {

        const newItem = ref('');

        const addItem = () => {
            // console.log(newItem.value);
            if(newItem.value !== '') {
                context.emit('additem', newItem.value)
            }

            clearInput();
        };

        const clearInput = () => {
            newItem.value = '';
        }
        return {            
            newItem,
            addItem
        }
    }
}
</script>

<style scoped>

   input:focus {
    outline: none;
   } 

   .inputBox {
    background-color: #fff;
    height: 50px;
    line-height:50px;
    border-radius: 5px;
    overflow: hidden;
   }

   .inputBox input {
    border-style: none;
    font-size: 0.9rem;
   }

   .addContainer {
    float: right;
    background: hotpink;
   }

   .addBtn {
    color: #fff;
    vertical-align: middle;
    margin: 0px 20px;
    cursor: pointer;
   }
</style>
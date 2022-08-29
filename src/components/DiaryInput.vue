<template>
    <div class="inputBox shadow">
        <input type="text" class="inputBox" v-model="newItem" v-on:keyup.enter="addItem">
        <!-- <button>추가</button> -->
        <span class="addContainer"  @click="addItem">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
     <ModalVue :show="showModal" @close="showModal = false">
      <template #header>
        <h3>내용을 입력하세요.</h3>
      </template>
      <template #body>
        <h3>내용을 반드시 입력하셔야 합니다.</h3>
      </template>
      <template #footer>
        <button
        class="modal-default-button"
        @click="showModal=false"
        >OK</button>
      </template>
    </ModalVue>
</template>

<script>
import { ref } from 'vue';
import ModalVue from '@/components/common/ModalVue.vue';

export default {
    components: {
        ModalVue
    },

    setup(props, context) {

        const newItem = ref('');
        const addItem = () => {
            console.log(newItem.value);
            if(newItem.value !== '') {
                context.emit('additem', newItem.value)
            }else {
                showModal.value = true;
            }
            clearInput();
        };

        const clearInput = () => {
            newItem.value = '';
        }
        
        const showModal = ref(false)

        return {            
            newItem,
            addItem,
            showModal
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

   .closeModalBtn {
    color: #42b983;
   }
</style>
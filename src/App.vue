<template>
  <div class="wrap">
   <diary-header></diary-header>
   <diary-input @additem="addOneItem"></diary-input>
   <diary-List :propsdata="diaryItemArr"></diary-List>
   <diary-footer></diary-footer>
  </div>
</template>
<script>

import DiaryHeader from '@/components/DiaryHeader.vue';
import DiaryInput from '@/components/DiaryInput.vue';
import DiaryList from '@/components/DiaryList.vue';
import DiaryFooter from '@/components/DiaryFooter.vue';

import { reactive } from 'vue';
export default {  
  components: {
    DiaryHeader,
    DiaryInput,
    DiaryList,
    DiaryFooter
  },
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

    const addOneItem = (item) => {
      let obj = {completed: false, item: item}
      localStorage.setItem(item, JSON.stringify(obj));           
      diaryItemArr.push(obj);    
    }

    return {
      diaryItemArr,
      addOneItem
    }
  }
}
</script>
<style>
  @charset "utf-8";
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  
  input {
    border-style: groove;
    width: 80%;
  }

  button {
    border-style: groove
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
    text-align: center;
    background-color: #f6f6f6;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0 , 0, 0, 0.03);
  }

  .wrap {
    position: relative;
    display: block;
    width: 90%;
    margin: 0 auto;
  }
</style>
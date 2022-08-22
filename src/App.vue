<template>
  <div class="wrap">
   <diary-header></diary-header>
   <diary-input></diary-input>
   <diary-List></diary-List>
   <diary-footer></diary-footer>
  </div>
</template>
<script>

import DiaryHeader from '@/components/DiaryHeader.vue';
import DiaryInput from '@/components/DiaryInput.vue';
import DiaryList from '@/components/DiaryList.vue';
import DiaryFooter from '@/components/DiaryFooter.vue';

export default {  
  components: {
    DiaryHeader,
    DiaryInput,
    DiaryList,
    DiaryFooter
  },
  setup() {
    return {
    }
  }
}
</script>
<style>

</style>
<template>
    <header>
        <h1>
            <!-- My Diary Header -->
            {{title}}
        </h1>
    </header>
</template>

<script>
import {ref} from 'vue'
import  { useStore } from 'vuex'
export default {
    setup() {
        const title = ref('');
        const stroe = useStore();
        title.value = stroe.state.headerText;
        return {    
            title        
        }
    }
}
</script>

<style scoped>

    h1 {
        color: #2f3b52;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
        text-align: center;
    }

</style>
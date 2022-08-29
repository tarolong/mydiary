<template>
    <div class="clearAllContainer shadow">
        <span class="clearAllBtn" @click="clearDiary">Clear All</span>
    </div>
</template>
<script>
    import  { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore();
        const clearDiary = () => {
            store.dispatch('fetchClearAll');
        }
        return {   
            clearDiary         
        }
    }
}
</script>
<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: #fff;
        border-radius: 5px;
        margin: 20px auto;
    }
    .clearAllBtn {
        color: #e20303;
        display: block;
        cursor: pointer;
    }
</style>
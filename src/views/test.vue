/*
* @test.vue
* @deprecated
* @author czh
* @update (czh 2021/12/24)
*/
<template>
    <div class="test">
        <div class="container">
            <n-select v-model:value="data" placeholder="Select" size="large" :options="selectList"/>
        </div>
    </div>
</template>

<script lang="ts">
import {NSelect} from "naive-ui";
import {defineComponent,ref} from "vue";
export default defineComponent({
    name: "test",
    components: {NSelect},
    setup() {
        const data = ref<string>('')
        const show = ref<boolean>(true)
        const selectList = ref([{
            label: 'test1', value: 'value1'
        }])
        return {
            data,
            show,
            selectList
        }
    }
})
</script>

<style >
.test{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    z-index: 2077;
}
.container {
    width:300px;
    height: 300px;
    background-color: #f0f9eb;
    @apply self-center;
}
</style>
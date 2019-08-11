<!-- 页面 -->
<template>
    <div class="cascader"> 
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>

        <div class="popover" v-if="popoverVisible">
            <cascader-items :items="source"></cascader-items>
        </div>
    </div>
</template>

<script>
import CascaderItems from "./cascader-items"
export default {
    name:'DistanceCascader',
    props:{
        source:{
            type:Array,
        },
    },
    mounted () {

    },
    data() {
        return {
            popoverVisible: false,
        }
    },
    methods: {

    },
    watch: {},
    filters: {},
    computed: {},
    components: {
        CascaderItems
    }
}
</script>

<style scoped lang="scss">
.cascader{
    .trigger{
        border: 1px solid #ddd;
        height: 32px ;
        width: 100px;
    }   
    .popover{
        border: 1px solid #ddd;
        height: 200px;
    }
}
</style>

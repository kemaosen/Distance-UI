<!-- 页面 -->
<template>
    <div class="cascader"> 
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>

        <div class="popover" v-if="popoverVisible">
            <cascader-items :items="source" :height="popoverHeight"></cascader-items>
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
        popoverHeight:{
            type:String
        }
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
    position: relative;
    .trigger{
        border: 1px solid #ddd;
        height: 32px ;
        width: 100px;
    }   
    .popover{
        box-shadow: 0 0 5px rgba(0, 0, 0, .15);
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        height: 200px;
    }
}
</style>

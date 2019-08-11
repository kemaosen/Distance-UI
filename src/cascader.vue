<!-- 页面 -->
<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>

        <div class="popover">
            <div class="level-1" v-for="(item,index) in source" :key="'source'+index">
                <cascaderItem :sourceItem="item"></cascaderItem>
            </div>
        </div>
    </div>
</template>

<script>
import cascaderItem from "./cascader-item"
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

        }
    },
    methods: {

    },
    watch: {},
    filters: {},
    computed: {},
    components: {
        cascaderItem
    }
}
</script>

<style scoped lang="scss">
.cascader{
    
}
</style>

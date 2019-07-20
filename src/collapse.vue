<!-- 手风琴页面 -->
<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        single:{// 是否可以自动收缩
            type:Boolean,
            default:false
        },
        selected:{
            type:String,

        }
    },
    provide(){
        return {
            eventBus: this.eventBus,
        }
    },
    mounted () {
        this.eventBus.$emit('update:selected',this.selected)
    },
    data() {
        return {
            eventBus: new Vue(),
        }
    },
    methods: {

    },
    watch: {},
    filters: {},
    computed: {},
    components: {

    }
}
</script>

<style scoped lang="scss">
$border-color: #ddd;
$border-radius: 4px;
.collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>

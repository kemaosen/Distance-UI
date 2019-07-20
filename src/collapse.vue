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
        single:{
            type:Boolean,
            default:false
        }
    },
    provide(){
        if(this.single){
            return {
                eventBus: this.eventBus,
            }
        }
    },
    mounted () {

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

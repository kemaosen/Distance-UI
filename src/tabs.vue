<!-- 页面 -->
<template>
    <div class="tabs">   
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'DistanceTabs',
    props:{
        selected:{
            type:String|Boolean,
            required:true
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },
    provide(){
        return {
            eventBus: this.eventBus,
        }
    },
    created(){
    },
    mounted () {
        console.log(this.selected);
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
.tabs{
    
}
</style>

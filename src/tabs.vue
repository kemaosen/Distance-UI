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
        // 页面一加载 获取当前被选中的元素 并高亮他  用于动画 
        this.$children.forEach((vm)=>{
            if(vm.$options.name == 'DistanceTabsHeader'){
                vm.$children.forEach((childVm)=>{
                    if(childVm.$options.name == 'DistanceTabItem' && childVm.name == this.selected){
                        this.eventBus.$emit('update:selected',this.selected,childVm)
                    }
                })
            }
        })
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

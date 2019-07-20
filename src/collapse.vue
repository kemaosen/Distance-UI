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
            type:String|Number,

        }
    },
    provide(){
        return {
            eventBus: this.eventBus,
        }
    },
    mounted () {
        // 页面加载通知子组件 显示那个 
        this.eventBus.$emit('update:selected',this.selected);
        // 在父组件使用变量控制的时候 需要实时对接数据  父组件与当前组件(本页面) 值同步
        this.eventBus.$on('update:selected',(name)=>{
            console.log(name);
            this.$emit('update:selected',name)
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
$border-color: #ddd;
$border-radius: 4px;
.collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>

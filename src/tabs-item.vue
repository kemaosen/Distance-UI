<!-- 页面 -->
<template>
    <div class="tabs-item" @click="handleChangTabs" :class="classes" :data-name="name">   
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'DistanceTabItem',
    inject:['eventBus'],
    props:{
        name:{
            type: String|Number,
            required:true
        },
        disabled:{
            type: Boolean,
            default: false
        },
    },
    created(){
        if(this.eventBus){
            this.eventBus.$on('update:selected',(name,vm)=>{
                // if(name === this.name){
                //     console.log('我被选中了'+this.name);
                //     this.active = true;
                // }else{
                //     console.log('我没有被选中了'+this.name);
                //     this.active = false;
                // }
                //  this.active ：  先判断 name是否等于 this.name 相同返回true  否则返回false
                this.active = name == this.name;
            })
        }
    },
    mounted () {
    },
    data() {
        return {
            active: false, 
        }
    },
    methods: {
        handleChangTabs(){
            if(this.disabled){return }
            if(this.eventBus){
                this.eventBus.$emit('update:selected',this.name,this)
            }
            this.$emit('click',this)
        }
    },
    watch: {},
    filters: {},
    computed: {
        classes(){
            return {active:this.active,disabled:this.disabled}
        }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
@import 'var';
.tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active{
        color: $color-blue;
    }
    &.disabled{
        color: $color-disabled;
        cursor: not-allowed;
    }
}
</style>

<!-- 页面 -->
<template>
    <div class="tabs-item" @click="xxxx" :class="classes">   
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
    },
    mounted () {
    },
    data() {
        return {
            active: false, 
        }
    },
    methods: {
        xxxx(){
            this.eventBus.$emit('update:selected',this.name,this)
        }

    },
    watch: {},
    filters: {},
    computed: {
        classes(){
            return {active:this.active}
        }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
$blue:blue;
.tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active{
        color: $blue;
    }
}
</style>

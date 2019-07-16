<!-- 页面 -->
<template>
    <div class="tabs-item" :class="classes" v-if="active">   
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'DistanceTabsPane',
    inject:['eventBus'],
    props:{
        name:{
            type:String,
            required:true,
        }
    },
    mounted () {

    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            this.active = name == this.name;
        })
    },
    data() {
        return {
            active:false,
        }
    },
    methods: {

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
.tabs-item{
    &.active{
        background-color: red;
    }
}
</style>

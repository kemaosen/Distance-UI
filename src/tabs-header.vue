<!-- 页面 -->
<template>
    <div class="tabs-header">   
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="action" ></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'DistanceTabsHeader',
    inject:['eventBus'],
    mounted () {
        this.eventBus.$on('update:selected',(item,vm)=>{
            console.log(item);
            console.log(vm.$el);
            // console.log(vm.$el);
        })
    },
    created(){
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

    }
}
</script>

<style scoped lang="scss">
$tabs-height : 40px;
$blue:blue;
.tabs-header{
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    position: relative;
    >.line{
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $blue;
        width: 100px;
    }
    >.action-wrapper{
        margin-left:  auto
    }
}
</style>

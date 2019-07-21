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
            let {width,height,top,left} = vm.$el.getBoundingClientRect();
            this.$refs.line.style.width = width+'px';
            this.$refs.line.style.left = left+'px';
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
@import 'var';
.tabs-header{
    display: flex;
    height: $tabs-toast-height;
    justify-content: flex-start;
    position: relative;
    border-bottom:1px solid $border-color-ddd;
    >.line{
        transition: all 350ms;
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $border-color-ddd;
    }
    >.action-wrapper{
        margin-left:  auto;
        display: flex;
        align-self: center;
    }
}
</style>

<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name:'DistanceGroupButton',
        mounted(){
            for(let node of  this.$el.children){
                if(node.nodeName.toLowerCase() !== 'button'){
                    console.warn('g-button=-group的子元素应该都是g-button 但是你使用了'+node.nodeName.toLowerCase());
                }
            }
        },
    }
</script>

<style scoped lang="scss">
.g-button-group{
    display:inline-flex;
    vertical-align: middle;
    .g-button{
        border-radius:0;
        /*&:not(:first-child){*/// 会将按钮边框重贴 中间的缺少左边的边框
            /*border-left: none;*/
        /*}*/
        &:not(:first-child){
            margin-left: -1px;//这样会将边框重叠在一起 解决
        }
        &:hover{
            position:relative;
            z-index:1;
        }
        &:first-child{
            border-top-left-radius:var(--border-radius);
            border-bottom-left-radius:var(--border-radius);
        }
        &:last-child{
            border-top-right-radius:var(--border-radius);
            border-bottom-right-radius:var(--border-radius);
        }
    }
}
</style>
<!-- 页面 -->
<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted () {
        this.$children.forEach((element)=>{
            if(element.$options.name === 'GSider'){
                this.layoutClass.hanSider = true;
            }
        })
    },
    data() {
        return {
            layoutClass:{ hanSider:false, }
        }
    },
}
</script>

<style scoped lang="scss">
.layout{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hanSider{
        flex-direction: row;
    }
}
</style>

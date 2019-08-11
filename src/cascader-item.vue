<!-- 页面 -->
<template>
    <div class="sourceItem">
        {{sourceItem.name}}
        <template v-for="item in sourceItem.children">
            <cascader-item
                v-if="sourceItem.children" 
                :sourceItem="item"
                :key="item.name"
            >
            </cascader-item>   
        </template>

    </div>
</template>

<script>
export default {
    name:'cascaderItem',
    props:{
        sourceItem:{
            type:Object,
        },
    },
}
</script>

<style scoped lang="scss">
.sourceItem{
    border: 1px solid red;
    margin: 10px;
}
</style>

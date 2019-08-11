<!-- 页面 -->
<template>
    <div class="sourceItem">
        <div class="left">
            <div v-for="item in items" @click="leftSelected = item">{{item.name}}</div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems"></cascader-items>
        </div>
    </div>
</template>

<script>
export default {
    name:'cascaderItems',
    props:{
        items:{
            type:Array,
        },
    },
    data(){
        return {
            leftSelected: null,
        }
    },
    computed:{
        rightItems(){
            if(this.leftSelected && this.leftSelected.children){
                return this.leftSelected.children
            }else{
                return null
            }
        }
    }
}
</script>

<style scoped lang="scss">
.sourceItem{
    display: flex;
    margin-left: 10px;
    justify-content: flex-start;
    align-items:flex-start;
    .left{
        border-right: 1px solid red;
    }

    .right{
        margin-top: -1px;
    }
}
</style>

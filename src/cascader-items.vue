<!-- 页面 -->
<template>
    <div class="sourceItem" :style="{height:height}">
        <div class="left">
            <div v-for="item in items" @click="leftSelected = item" class="label">
                {{item.name}}
                <icon class="icon" v-if="item.children" name="right"></icon>    
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems" :height="height"></cascader-items>
        </div>
    </div>
</template>

<script>
import icon from './icon.vue'
export default {
    name:'cascaderItems',
    props:{
        items:{
            type:Array,
        },
        height:{
            type:String,
        }
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
    },
    components:{
        icon
    }
}
</script>

<style scoped lang="scss">
.sourceItem{
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    height: 150px;

    .left{
        height: 100%;
        padding-top: .2em;
        .label{
            padding: .3em 1em;
            display: flex;
            align-items: center;
            .icon{
                margin-left: 1em;
                transform: scale(.5);
            }
        }
    }

    .right{
        border-left: 1px solid #ddd;
        margin-top: -1px;
        height: 100%;
    }
}
</style>

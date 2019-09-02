<!-- 页面 -->
<template>
    <div class="sourceItem" :style="{height:height}">
        <div class="left">
            <div v-for="(item,index) in items" @click="handleLabel(item)" class="label" :key="index" >
                {{item.name}}
                <icon class="icon" v-if="item.children" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems" :height="height" :selected="selected" @update:selected="handleRightUpdateSelected" :level="level+1" ></cascader-items>
        </div>
    </div>
</template>

<script>
import icon from "./icon.vue";
export default {
    name: "cascaderItems",
    props: {
        // 上级联动的下级数组
        items: {
            type: Array
        },
        // 联动的高度 从上级传递下来
        height: {
            type: String
        },
        // 当前选中的所有数据 从上级传递下来
        selected: {
            type: Array,
            default: () => []
        },
        // 当前第几个组件
        level: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            // leftSelected: null
        };
    },
    methods: {
        // 点击联动中的某项 将当前的数据给selected保存起来
        handleLabel(item) {
            // 这里无法实时更新数据是因为 vue的深入式响应式原理
            // this.selected[this.level] = item;

            // 直接修改了props 代码就是垃圾 不是单向数据流
            // this.$set(this.selected, this.level, item);

            // 浅拷贝  先将对象转成字符转，再将字符转转换对象  现在的对象与原本的对象毫无关系
            let copy = JSON.parse(JSON.stringify(this.selected));
            copy[this.level] = item;
            copy.splice(this.level + 1);// 删除后面联动的数据   列点击了一个删除后面所有上次的联动数据
            this.$emit("update:selected", copy);
        },
        // 元素右边更新
        handleRightUpdateSelected(newSelected) {
            this.$emit("update:selected", newSelected);
        }
    },
    computed: {
        rightItems() {
            let currentSelected = this.selected[this.level];
            if (currentSelected && currentSelected.children) {
                return currentSelected.children;
            } else {
                return null;
            }
            // if (this.leftSelected && this.leftSelected.children) {
            //     return this.leftSelected.children;
            // } else {
            //     return null;
            // }
        }
    },
    components: {
        icon
    }
};
</script>

<style scoped lang="scss">
@import './_var.scss';
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
        border-left: 1px solid $border-color-light;
        margin-top: -1px;
        height: 100%;
    }
}
</style>

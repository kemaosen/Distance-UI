<!-- 页面 -->
<template>
    <div class="cascader">
        {{selected}}
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>

        <div class="popover" v-if="popoverVisible">
            <cascader-items :items="source" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
        </div>
    </div>
</template>

<script>
import CascaderItems from "./cascader-items.vue";
export default {
    name: "DistanceCascader",
    props: {
        // 联动的数据
        source: {
            type: Array
        },
        // 联动的高度
        popoverHeight: {
            type: String
        },
        // 联动的选中数据
        selected: {
            type: Array,
            default: () => { return []; }
        }
    },
    mounted() {

    },
    data() {
        return {
            popoverVisible: false
        };
    },
    methods: {
        onUpdateSelected(newSelected) {
            this.$emit("update:selected", newSelected);
        }
    },
    watch: {},
    filters: {},
    computed: {},
    components: {
        CascaderItems
    }
};
</script>

<style scoped lang="scss">
.cascader{
    position: relative;
    .trigger{
        border: 1px solid #ddd;
        height: 32px ;
        width: 100px;
    }
    .popover{
        box-shadow: 0 0 5px rgba(0, 0, 0, .15);
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        height: 200px;
    }
}
</style>

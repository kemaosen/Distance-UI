<!-- 页面 -->
<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            {{result}}
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
    computed: {
        result() {
            return this.selected.map((item) => {
                return item.name;
            }).join("/");
        }
    },
    components: {
        CascaderItems
    }
};
</script>

<style scoped lang="scss">
@import './_var.scss';
.cascader{
    position: relative;
    height: $input-height;
    .trigger{
        border: 1px solid $border-color;
        height: $input-height;
        min-width: 10em;
        display: inline-flex;
        align-items: center;
        padding: 0 1em;

    }
    .popover{
        box-shadow: 0 0 5px rgba(0, 0, 0, .15);
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        border: 1px solid #ddd;
        height: 200px;
        margin-top: 4px;
    }
}
</style>

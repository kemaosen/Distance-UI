<!-- 页面 -->
<template>
    <div class="tabs-header">   
        <slot></slot>
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
.tabs-header{
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    >.action-wrapper{
        margin-left:  auto
    }
}
</style>

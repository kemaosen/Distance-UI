<!-- 页面 -->
<template>
    <div>   
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'DistanceTabsBody',
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
</style>

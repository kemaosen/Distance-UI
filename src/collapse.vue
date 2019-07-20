<!-- 手风琴页面 -->
<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
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
$border-color: #ddd;
$border-radius: 4px;
.collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>

<!-- 页面 -->
<template>
    <div>   
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type: String,
        },
        disabled:{
            type: Boolean,
            default: false
        },

    },
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

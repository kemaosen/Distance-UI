<!-- 页面 -->
<template>
    <div>   
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        selectedTab:{
            type:String,
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
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

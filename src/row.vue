<!-- 页面 -->
<template>
    <div class="row" :style="{marginLeft: -gutter/2+'px',marginRight: -gutter/2+'px'}">
        <slot ></slot>
    </div>
</template>

<script>
export default {
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    mounted () {
        this.$children.forEach(function (vm){
            vm.gutter = this.gutter;
        }.bind(this))
        // 等于
        this.$children.forEach((vm) =>{
            vm.gutter = this.gutter;
        })
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
.row{
    display: flex;
}
</style>

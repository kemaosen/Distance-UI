<!-- 页面 -->
<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        span:{
            type:[Number,String]
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
.col{
    height: 40px;
    background-color: gray;
    width: 50%;
    border: 1px solid red;
    $class-prefix: col-;
    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            width: ( $n / 24 ) * 100%;
        }
    }
}
// scss插值 

</style>

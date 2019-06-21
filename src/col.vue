<!-- 页面 -->
<template>
            
    <div class="col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        span:{
            type:[Number,String]
        },
        offset:{
            type:[Number,String]
        },
    },
    data() {
        return {
            gutter:0
        }
    },
    computed: {
        colClasses(){
            let {span,offset} = this;
                // <!-- 有就显示  -->
            return [
                span && [`col-${span}`,offset && `offset-${offset}`]
            ]
        },
        colStyle(){
            return {
                paddingLeft:this.gutter/2+'px',
                paddingRight:this.gutter/2+'px'}
        }
    },
}
</script>

<style scoped lang="scss">
.col{
    $class-prefix: col-;
    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            width: ( $n / 24 ) * 100%;
        }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            margin-left: ( $n / 24 ) * 100%;
        }
    }
}
</style>

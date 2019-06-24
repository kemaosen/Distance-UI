<!-- 页面 -->
<template>
    <div class="row" :style="rowStyle" :class="rowClasses">
        <slot ></slot>
    </div>
</template>

<script>
export default {
    props:{
        // col 间距
        gutter:{
            type:[Number,String]
        },
        // 对其方式
        align:{
            type:String,
            validator(value){
                return ['left','right','center'].includes(value);
            }
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
    computed: {
        rowClasses(){
            let  {align} = this;
            return [align && `align-${align}`]
        },
        rowStyle(){
            let {gutter} =this;
            return {marginLeft: -gutter/2+'px',marginRight: -gutter/2+'px'}
        }
    },
}
</script>

<style scoped lang="scss">
.row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{justify-content: flex-start}
    &.align-right{justify-content: flex-end}
    &.align-center{justify-content: center}
}
</style>

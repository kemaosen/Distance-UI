<!-- 手风琴页面 -->
<template>
    <div class="collapseTitle">
        <div class="title" @click="open=!open">{{title}}</div>
        <div class="content" v-if="open">    
            <slot></slot >
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
    },
    mounted () {

    },
    data() {
        return {
            open:false,
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
.collapseTitle{
    .title{
        border: 1px solid $border-color;
        margin: -1px;
        display: flex;
        min-height: 32px;
        align-items: center;
        padding:0 8px;
    }
    &:first-child{
        .title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:last-child{
        .title{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
    .content{
        padding: 8px;
    }
}
</style>

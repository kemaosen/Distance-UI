<!-- 手风琴页面 -->
<template>
    <div class="collapseTitle">
        <div class="title" @click="handleShow">{{title}}</div>
        <div class="content" v-if="open">    
            <slot></slot >
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        name:{
            type:String,
            required: true,
        }
    },
    inject:['eventBus'],
    mounted () {
        this.eventBus.$on('update:selected',(name)=>{
            if(name !== this.name){// 当前组件的this 与传进来的this 不相等  关闭当前组件的手风琴
                this.close();
            }else{
                this.open = true
            }
        })
    },
    data() {
        return {
            open:false,
        }
    },
    methods: {
        close(){
            this.open = false;
        },
        handleShow(){
            if(this.open){
                this.open = false;
            }else{
                this.eventBus.$emit('update:selected',this.name)
            }
        }
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

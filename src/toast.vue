<!-- Toast -->
<template>
    <div class="toast" ref="wrapper"> 
        <div class="message">
            <slot v-if="!enableHTML"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
export default {
    name:"GToast",
    props:{
        autoClose:{
            type:Boolean,
            default:true,
        },
        autoCloseDelay:{
            type:Number,
            default:5
        },
        closeButton:{
            type:Object,
            default:()=>{
                return {text:"关闭",callback:undefined}
            }
        },
        enableHTML:{
            type:Boolean,
            default:false,
        }
    },
    mounted () {
        this.updateStyles();
        this.execAutoClose();
    },
    data() {
        return {

        }
    },
    methods: {
        updateStyles(){// 处理父元素使用min-height 线条不显示 通过js设置高度
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`;
            })
        },
        execAutoClose(){// 控制是否自动关闭
            if(this.autoClose){
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000);
            }
        },
        close(){
            this.$el.remove()
            this.$destroy()
        },
        onClickClose(){
            this.close();
            if(this.closeButton && typeof this.closeButton.callback === 'Function'){
                this.closeButton.callback();    
            }
        },
    },
    watch: {},
    filters: {},
    computed: {},
    components: {

    }
}
</script>

<style scoped lang="scss">
$toast-height:40px;
$toast-bg:rgba(0,0,0,0.75);
$toast-size: 14px;
.toast{
    position:fixed;
    top: 0;
    left: 50%; 
    transform: translateX(-50%);
    font-size:$toast-size;
    line-height: 1.8;
    min-height: $toast-height;
    display: flex;
    align-items: center;
    background-color: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    color: white;
    padding: 0 16px;
    .message{
        padding: 8px 0；
    }
}
    .close{
        padding-left: 16px;
        flex-shrink: 0; 
    }
    .line{height:100%;border-left: 1px solid #666;margin-left: 10px;}
</style>

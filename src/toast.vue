<!-- Toast -->
<template>
    <div class="warp" :class="toastClasses">
        <div class="toast" ref="wrapper" > 
            <div class="message">
                <slot v-if="!enableHTML"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
                {{closeButton.text}}
            </span>
        </div>
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
        },
        position:{
            type: String,
            default:'middle',
            validator(value){
                return ['top','bottom','middle'].indexOf(value) >= 0
            },
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
            this.$el.remove();
            this.$emit('close');
            this.$destroy();
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
    computed: {
        toastClasses(){
            return {
                [`position-${this.position}`]:true,
            }
        }
    },
    components: {
        
    }
}
</script>

<style scoped lang="scss">
$toast-height:40px;
$toast-bg:rgba(0,0,0,0.75);
$toast-size: 14px;
@keyframes fade-in{
    0%{opacity: 0;}
    100%{opacity: 1;}
}
@keyframes sider-bottom{
    0%{opacity: 0;transform: translateY(100%) translateX(-50%);}
    100%{opacity: 1;transform: translateY(0) translateX(-50%)}
}
@keyframes sider-top{
    0%{opacity: 0;transform: translateY(-100%) translateX(-50%)}
    100%{opacity: 1;transform: translateY(0) translateX(-50%)}
}
.warp{
    position:fixed;
    left: 50%; 
    transform: translateX(-50%);
    .toast{
        
        // top: 0;
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
    &.position-top{top: 0;transform: translateX(-50%);
        animation: sider-top 1s;
        .toast{border-top-left-radius:0;border-top-right-radius:0}    
    }
    &.position-bottom{bottom: 0;transform: translateX(-50%);animation: sider-bottom 1s; .toast{border-bottom-left-radius:0;border-bottom-right-radius:0}    }
    &.position-middle{top: 50%;transform: translate(-50%,-50%);animation: fade-in 1s;}
}
    .close{
        padding-left: 16px;
        flex-shrink: 0; 
    }
    .line{border-left: 1px solid #666;margin-left: 10px;}
</style>

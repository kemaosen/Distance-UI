<!-- 页面 -->
<template>
    <div class="popover"  ref="popover">
        <div ref="contentWrapper" :class="[`position-${position}`]" class="content-wrapper" v-if="visible" >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name:'DistancePopover',
    mounted(){
        if(this.trigger === 'click'){
            this.$refs.popover.addEventListener('click', ()=>{ this.open(); })
        }else{
            this.$refs.popover.addEventListener('mouseenter', ()=>{ this.open(); })
            this.$refs.popover.addEventListener('mouseleave', ()=>{ this.close(); })
        }
    },
    destroyed(){
        if(this.trigger === 'click'){
            this.$refs.popover.removeEventListener('click', ()=>{ this.open(); })
        }else{
            this.$refs.popover.removeEventListener('mouseenter', ()=>{ this.open(); })
            this.$refs.popover.removeEventListener('mouseleave', ()=>{ this.close(); })

        }
    },
    data() {
        return { visible:false, }
    },
    props:{
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','bottom','left','right'].indexOf(value) >= 0;
            }
        },
        trigger:{
            type:String,
            default:'click',
            validator(value){
                return ['click','hover'].indexOf(value) >= 0;
            },
        }
    },
    methods: {
        positionContent(){// 显示弹出内容 并定位到当前点击位置
            const {contentWrapper,triggerWrapper} = this.$refs;
            document.body.appendChild(contentWrapper);
            let {width,height,left, top} = triggerWrapper.getBoundingClientRect();
            let {height:height2} =  contentWrapper.getBoundingClientRect();

            let x={
                top:{ top:top+window.scrollY, left:left+window.scrollX, },
                bottom:{ top:top + height + window.scrollY, left:left+window.scrollX, },
                left:{ left:left+window.scrollX, top:top + window.scrollY +(height - height2)/2, },
                right:{ left:left+window.scrollX+width, top:top + window.scrollY +(height - height2)/2, },
            };
            contentWrapper.style.top = x[this.position].top + 'px';
            contentWrapper.style.left = x[this.position].left + 'px';
            document.addEventListener('click', this.onClickDocument);
        },
        onClickDocument(e){// e当前点击的元素
            if(this.$refs.popover && 
            (this.$refs.popover.contains(e.target) || this.$refs.popover.contains(e.target))){return }// 如果文字内容中又e.target  那么 啥也不执行
            if(this.$refs.contentWrapper && 
            (this.$refs.contentWrapper.contains(e.target) || this.$refs.contentWrapper.contains(e.target))){return }// 如果文字内容中又e.target  那么 啥也不执行

            this.close();
        },
        close(){
            this.visible = false;
            document.removeEventListener('click',this.onClickDocument);
        },
        open(){
            this.visible  = true;
            this.$nextTick(()=>{
                this.positionContent();
            })
        },
        onClick(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible === true){
                    this.close();
                }else{
                    this.open();
                }
            }
        },
    },
    watch: {},
    filters: {},
    computed: {
    },
    components: {

    }
}
</script>

<style scoped lang="scss">

@import "var";
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper{
    position: absolute;
    border: 1px solid $border-color-popover;
    border-radius:$border-radius;
    padding: .5em 1em;
    // box-shadow: 0 1px 1px rgba(0, 0, 0, .5);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    background-color: white;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
        content: '';
        display: block;
        border: 10px solid transparent;
        width: 0;
        height: 0;
        position:absolute;
    }

    &.position-top{
        transform: translateY(-100%);
        margin-top: -10px;
        &::before,&::after{
            left: 10px;
        }
        &::before{
            border-top-color: black;
            top: 100%;
        }
        &::after{
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
    &.position-bottom{
        margin-top: 10px;
        &::before,&::after{
            left: 10px;
        }
        &::before{
            border-bottom-color: black;
            bottom: 100%;
        }
        &::after{
            border-bottom-color: white;
            bottom: calc(100% - 1px);
        }
    }

    &.position-left{
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,&::after{
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
        &::before{
            border-left-color: black;
        }
        &::after{
            border-left-color: white;
            left: calc(100% - 1px);
        }
    }
    &.position-right{
        margin-left: 10px;
        &::before,&::after{
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
        &::before{
            border-right-color: black;
        }
        &::after{
            border-right-color: white;
            right: calc(100% - 1px);
        }
    }
}
</style>


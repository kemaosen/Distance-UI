<!-- 页面 -->
<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name:'DistancePopover',
    data() {
        return { visible:false, }
    },
    methods: {
        positionContent(){// 显示弹出内容 并定位到当前点击位置
            document.body.appendChild(this.$refs.contentWrapper);
            let {width,height,left, top} = this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.top = top+window.scrollY+'px';
            this.$refs.contentWrapper.style.left = left+window.scrollX+'px';
            document.addEventListener('click', this.onClickDocument);
        },
        onClickDocument(e){// e当前点击的元素
            if(this.$refs.popover && 
            (this.$refs.popover.contains(e.target) || this.$refs.contentWrapper.contains(e.target))){return }// 如果文字内容中又e.target  那么 啥也不执行
            this.close();
        },
        close(){
            this.visible = false;
            document.removeEventListener('click',this.onClickDocument);
            console.log('关闭');
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
    computed: {},
    components: {

    }
}
</script>

<style scoped lang="scss">
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper{
    position: absolute;
    box-shadow: 0 0 0 rgba(0, 0, 0, .5);
    transform: translateY(-100%)
}
</style>


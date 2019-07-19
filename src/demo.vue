<!-- 页面 -->
<template>
    <div class="app">
        <div  class="wrap"  >
            好好学习天天向上
        </div>
        <button class="button">点击</button>
    </div>
</template>

<script>
window.onload=function(){
    let $ = function (a){ return document.querySelector(a) }
        document.body.appendChild($('.wrap'));
        let {width,height,left, top} = $('.button').getBoundingClientRect();
        let {height:height2} =  $('.wrap').getBoundingClientRect();

        $('.wrap').style.top = top+window.scrollY - height -12+'px';
        $('.wrap').style.left = left+window.scrollX + 'px';
}
export default {
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
.button{
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #999;
    background-color: #eee;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}
.app{
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.wrap{
    position: absolute;
    border: 1px solid #333;
    border-radius:4px;
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
        transform: translateY(-100%);
        margin-top: 20px;
    }
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
</style>

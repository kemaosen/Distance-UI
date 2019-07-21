<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <!--<button class="g-button" :class="{undefined:true}">-->
    <!--<button class="g-button" :class="{left:true}">-->
    <!--<button class="g-button" :class="{right:true}">-->
        <!--<svg v-if="icon" class="icon" >-->
            <!--<use :xlink:href="`#i-${icon}`"></use>-->
        <!--</svg>-->
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <!-- slot 不能添加class 变通给他添加一个父级元素 父级添加class来影响他-->
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon'
    export default{
        name:'DistanceButton',
        components:{
            'g-icon':Icon
        },
        // props:['icon','iconPosition']
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false,
            },
            iconPosition:{
                type:String,
                default:'left',// 设置默认的值
                validator(value){// 验证用户传过来的值 是不是符合规范的 不是就报错 return=false
                    //  方式三
                    // return value === 'left' ||  value === 'right';
                    //  方式二
                    // return !(value !== 'left' && value !== 'right');
                    //  方式一
                    if(value !== 'left' && value !== 'right'){
                        return false;
                    }else{
                        return true
                    }
                }
            }
        },
        methods:{
        }
    }
</script>

<style scoped lang="scss">
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
    @keyframes spin {
        0%{
            trasdform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
    .g-button{
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius:$border-radius;
        border:1px solid $border-color;
        background-color: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*解决按钮多个不对齐 设置基线对齐*/
        vertical-align: middle;
        &:hover{
            border-color: $border-color-hover;
        }
        &:active{
            background-color: $button-active-bg;
        }
        &:focus{
            outline:none;
        }
        >  .icon{
            order: 1;
            margin-right: .3em;
        };
        > .content{
            order: 2;
        }
        /* 将button组件设置为display:inline-flex 弹性盒子 设置左右的内容的等级显示icon在左还是在右*/
        &.icon-right{
            > .content{
                order: 1;
            }
            > .icon{
                order: 2;
                margin-left: .3em;
            }
        }
        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>
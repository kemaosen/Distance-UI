<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <!--<button class="g-button" :class="{undefined:true}">-->
    <!--<button class="g-button" :class="{left:true}">-->
    <!--<button class="g-button" :class="{right:true}">-->
        <svg v-if="icon" class="icon" >
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <!-- slot 不能添加class 变通给他添加一个父级元素 父级添加class来影响他-->
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default{
        // props:['icon','iconPosition']
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',// 设置默认的值
                validator(value){// 验证用户传过来的值 是不是符合规范的 不是就报错 return=false
                    //  方式三
                    return value === 'left' ||  value === 'right';
                    //  方式二return !(value !== 'left' && value !== 'right');
                    //  方式一 if(value !== 'left' && value !== 'right'){
                    //     return false;
                    // }else{
                    //     return true
                    // }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background-color: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*解决按钮多个不对齐 设置基线对齐*/
        vertical-align: middle;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color:var(--button-active-bg);
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
    }

</style>
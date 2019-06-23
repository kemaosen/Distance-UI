<!-- 页面 -->
<template>
            
    <div class="col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
let validator = (value)=>{
    let keys = Object.keys(value); 
    let valid = true;   // 默认合法 
    keys.forEach( (key) => {
        if(!['span','offset'].includes(key)){
            valid = false;
        }
    })
    return valid 
}
export default {
    props:{
        span:{
            type:[Number,String]
        },
        offset:{
            type:[Number,String]
        },
        // phone:{ type:Object, validator, },
        ipad:{ type:Object, validator, },
        narrowPc:{type:Object, validator, },
        pc:{ type:Object, validator, },
        widePc:{ type:Object, validator, },
    },
    data() {
        return {
            gutter:0
        }
    },
    computed: {
        colClasses(){
            let {span, offset, phone, ipad, narrowPc, pc, widePc} = this;
            // let phoneClass = [];
            // let ipadClass = [];
            // let narrowPcClass = [];
            // let pcClass = [];
            // let widePcClass = [];
            // if(phone){
            //    phoneClass =  [phone.span && `col-phone-${phone.span}`,phone.offset && `offset-phone-${phone.offset}`]
            // }
            // if(ipad){
            //     ipadClass = [ipad.span && `col-ipad-${ipad.span}`,ipad.offset && `offset-ipad-${ipad.offset}`];
            // }
            // if(narrowPc){
            //     narrowPcClass = [narrowPc.span && `col-narrow-pc-${narrowPc.span}`,narrowPc.offset &&`offset-narrow-pc-${narrowPc.offset}`]
            // }
            // if(pc){
            //     pcClass = [pc.span && `col-pc-${pc.span}`,pc.offset && `offset-pc-${pc.offset}`];
            // }
            // if(widePc){
            //     widePcClass = [ widePc.span && `col-wide-pc-${widePc.span}`,widePc.offset && `offset-wide-pc-${widePc.offset}`];
            // }
                // <!-- 有就显示  -->
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`,
                // phoneClass,
                // ipadClass,
                // narrowPcClass,
                // pcClass,
                // widePcClass,
                // ...(phone ? [`col-phone-${phone.span}`,`offset-phone-${phone.offset}`] : []),
                ... (ipad ? [`col-ipad-${ipad.span}`,`offset-ipad-${ipad.offset}`] : []),
                ... (narrowPc ? [`col-narrow-pc-${narrowPc.span}`,`offset-narrow-pc-${narrowPc.offset}`] : []),
                ... (pc ? [`col-pc-${pc.span}`,`offset-pc-${pc.offset}`] : []),
                ... (widePc ? [`col-wide-pc-${widePc.span}`,`offset-wide-pc-${widePc.offset}`] : []),
            ]
        },
        colStyle(){
            return {
                paddingLeft:this.gutter/2+'px',
                paddingRight:this.gutter/2+'px'}
        }
    },
}
</script>

<style scoped lang="scss">
.col{
    $class-prefix: col-;
    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            width: ( $n / 24 ) * 100%;
        }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            margin-left: ( $n / 24 ) * 100%;
        }
    }

    // // 超小屏幕 手机屏幕
    // @media (max-width:576px){
    //      $class-prefix: col-phone-;
    //     @for $n from 1 through 24{
    //         &.#{$class-prefix}#{$n}{
    //             width: ( $n / 24 ) * 100%;
    //         }
    //     }
    //     $class-prefix: offset-phone-;
    //     @for $n from 1 through 24{
    //         &.#{$class-prefix}#{$n}{
    //             margin-left: ( $n / 24 ) * 100%;
    //         }
    //     }
    // }
    // 平板 窄屏幕
    @media (min-width:577px){
         $class-prefix: col-ipad-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ( $n / 24 ) * 100%;
            }
        }
        $class-prefix: offset-ipad-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ( $n / 24 ) * 100%;
            }
        }
    }
    // 窄PC
    @media (min-width:769px){
         $class-prefix: col-narrow-pc-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ( $n / 24 ) * 100%;
            }
        }
        $class-prefix: offset-narrow-pc-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ( $n / 24 ) * 100%;
            }
        }
    }
    // 普通PC
    @media (min-width:993px){
         $class-prefix: col-pc-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ( $n / 24 ) * 100%;
            }
        }
        $class-prefix: offset-pc-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ( $n / 24 ) * 100%;
            }
        }
    }
    // 普通PC
    @media (min-width:1200px){
         $class-prefix: col-wide-pc-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ( $n / 24 ) * 100%;
            }
        }
        $class-prefix: offset-wide-pc-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ( $n / 24 ) * 100%;
            }
        }
    }




}

</style>

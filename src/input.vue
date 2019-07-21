<!-- 页面 -->
<template>
    <div class="warpper" :class="{error}">
        <input type="text" :value="value" 
        :disabled="disabled" 
        :readonly="readonly"
         @change="$emit('change',$event.target.value)"
         @input="$emit('input',$event.target.value)"
         @focus="$emit('focus',$event.target.value)"
         @blur="$emit('blur',$event.target.value)"
         >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMassage">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from './icon'
export default {
    name:'DistanceInput',
    props:{
        value:{
            type: String,
        },
        disabled:{
            type:Boolean,
            default: false,
        },
        readonly:{
            type:Boolean,
            default: false,
        },
        error:{
            type: String,
        }
    },
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
        Icon
    }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-color: rgba(0,0,0,.5);

// error
$red: #F1453D;
    .warpper{
        display: inline-flex; align-items: center; font-size: $font-size;
        > :not(:last-child){margin-right: .5em; } 
        >input{ height: $height; border: 1px solid $border-color; padding: 0 8px; border-radius: $border-radius;
            &:hover{ border:1px solid $border-color-hover; }
            &:focus{ box-shadow: inset 0 1px 3px $box-color; outline: none; }
            &[disabled],&[readonly]{ border-color: #aaa; color: #aaa; cursor: not-allowed; }
        }
        &.error{
            >input{ border: 1px solid $red; } } .icon-error{ fill:$red; }
        .errorMassage{ color: $red; }
    }
</style>

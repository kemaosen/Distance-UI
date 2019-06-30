<!-- Toast -->
<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:"GToast",
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
    height: $toast-height;
    display: flex;
    align-items: center;
    background-color: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    color: white;
    padding: 0 16px;

}
</style>

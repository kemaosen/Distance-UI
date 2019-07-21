<!-- 页面 -->
<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="settings" iconPosition="right">默认按钮</g-button>
        <g-button loading>默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>

        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Button from '../../../src/button'
export default {
    mounted () {

    },
    data() {
        return {
             content:`
                <g-button>默认按钮</g-button>

                <g-button icon="settings">默认按钮</g-button>

                <g-button icon="settings" iconPosition="right">默认按钮</g-button>

                <g-button loading>默认按钮</g-button>
                
                <g-button disabled>默认按钮</g-button>
             `.replace(/\t+| +/g,'').trim()

        }
    },
    components:{
        gButton:Button,
    }
}
</script>

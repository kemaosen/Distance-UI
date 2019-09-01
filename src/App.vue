<template>
    <div id="app">
        <Button>按钮</Button>
        <p>1111111111111111111</p>
        <cascader :source="source" popover-height="200px" :selected="selected" @update:selected="selected = $event"> </cascader>
        <p>1111111111111111111</p>
    </div>
</template>

<script>
import Button from "./button.vue";
import Cascader from "./cascader.vue";
export default {
    name: "app",
    data() {
        return {
            selected: [],
            source: [
                {
                    name: "浙江",
                    children: [
                        {
                            name: "杭州",
                            children: [
                                { name: "上城" },
                                { name: "下城" },
                                { name: "江干" }
                            ]
                        },
                        {
                            name: "嘉兴",
                            children: [
                                { name: "南湖" },
                                { name: "秀洲" },
                                { name: "嘉善" }
                            ]
                        }
                    ]
                },
                {
                    name: "福建",
                    children: [
                        {
                            name: "福州",
                            children: [
                                { name: "鼓楼" },
                                { name: "台江" },
                                { name: "仓山" }
                            ]
                        }
                    ]
                },
                {
                    name: "安徽",
                    children: [
                        {
                            name: "合肥",
                            children: [
                                { name: "瑶海" },
                                { name: "蜀山" },
                                { name: "庐阳" }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    components: {
        Button,
        Cascader
    }
};
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
:root{
    --button-height:32px;
    --font-size: 14px;
    --button-bg: white;
    --border-radius:4px;
    --button-active-bg: #eee;
    --color: #999;
    --border-color:#999;
    --border-color-hover:#666;
}
#app{
    padding: 100px;
    margin:20px;
}
body{
    font-size: var(--font-size);
    padding: 200px;
}
</style>

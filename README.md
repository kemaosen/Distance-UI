# gulo
VUE造轮子
[![Build Status](https://travis-ci.org/kemaosen/gulo.svg?branch=master)](https://travis-ci.org/kemaosen/gulo)
## 介绍
这是我个人学习创造的Vue UI组件库


## 开始使用
1. 添加 CSS 样式
    - 使用本框架前，请在Css中开启box-sizing:border-box;
        ```
        *,*::before,*::after{box-sizing:border-box}
        ```
    - 你还需要设置默认的颜色等变量
        ```
        html{
            --button-height:32px;
            --font-size: 14px;
            --button-bg: white;
            --border-radius:4px;
            --button-active-bg: #eee;
            --color: #999;
            --border-color:#999;
            --border-color-hover:#666;
        } 
        ```
    IE 15浏览器支持以上样式
2. 安装 distance-ui
    - npm i -save distance-ui

3. 引入 distance-ui
    ```
    import { Button } from 'distance-ui/dist/index.js' 
    import 'distance-ui/dist/index.css' 

    export default {
        components:{'g-button':Button}
    }
    ```

## 文档

## 提问

## 变更记录

## 
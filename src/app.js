import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './Header'
import Footer from './Footer'
import Content from './content'
import Sider from './sider'
// import Toast from './toast'
import Plugin from './plugin.js'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-layout',Layout);
Vue.component('g-header',Header);
Vue.component('g-footer',Footer);
Vue.component('g-content',Content);
Vue.component('g-sider',Sider);
// Vue.component('g-toast',Toast);
Vue.use(Plugin);
 new Vue({
    el:'#app',
    data(){
        return {
            loading1:false,
            loading2:true,
            loading3: false,
            message:'1'
        }
     },
     mounted() { 
            

     },
     methods: { 
         handleClickMe() { 
            this.$toast('发个方法', {
                position: 'bottom',
                closeButton: {
                    text: "知道了",
                    callback() { 
                        console.log('我知道了');
                    }
                },
                autoClose: true,
                autoCloseDelay: 2,
                enableHTML: false,
            })
         },
         inputChange(e) {
             console.log(1111);
         }
     }
});

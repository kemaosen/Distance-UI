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
import Sider from './Sider'

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
     methods:{ 
         inputChange(e) {
             console.log(e);
             console.log(e.target.value);
             console.log(1111);
         }
     }
});

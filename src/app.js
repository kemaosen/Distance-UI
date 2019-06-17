import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
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

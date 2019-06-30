import Toast from './toast'
export default {
    install(Vue,option) { 
        Vue.prototype.$toast = function (message) { 
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message];
            toast.$mount()//
            console.log(toast.$el);
            document.body.appendChild(toast.$el)
        }
    }
}
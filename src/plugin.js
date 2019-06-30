import Toast from './toast'
export default {
    install(Vue,option) { 
        Vue.prototype.$toast = function (message) { 
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: {
                        text: "知道了",
                        callback() { 
                            console.log('我知道了');
                        }
                    }
                }
            })
            toast.$slots.default = [message];
            toast.$mount()//
            document.body.appendChild(toast.$el)
        }
    }
}
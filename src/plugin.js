import Toast from './toast'
let currentToast;
export default {
    install(Vue,option) { 
        Vue.prototype.$toast = function (message, toastPosition) { 
            if (currentToast) { 
                currentToast.close();
            }
            currentToast = creatToast({Vue, message, propsData:toastPosition})
        }
    }
}
function creatToast({Vue, message, propsData}) { 
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    toast.$slots.default = [message];
    toast.$mount()//
    document.body.appendChild(toast.$el)
    return toast 
}
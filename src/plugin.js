import Toast from './toast'
let currentToast;
export default {
    install(Vue,option) { 
        Vue.prototype.$toast = function (message, toastPosition) { 
            if (currentToast) { 
                currentToast.close();
            }
            currentToast = creatToast({
                Vue,
                message,
                propsData: toastPosition,
                onClose: () =>{currentToast = null}
            })
        }
    }
}
function creatToast({Vue, message, propsData,onClose}) { 
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    toast.$slots.default = [message];
    toast.$mount()//
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast 
}
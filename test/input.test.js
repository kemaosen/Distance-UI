const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false



describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => { 
        const Constructor = Vue.extend(Input);
        let vm

        afterEach( () => { 
            vm.$destroy()
        })

        it('接收 value', () => { 
            vm = new Constructor({
                propsData: {
                    value:'1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })
        it('接收 disabled', () => { 
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收 readonly', () => { 
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error:'你好世界'
                }
            }).$mount()
            //  获取Icon 组件中的use标签 
            const userElement = vm.$el.querySelector('use')
            console.log(userElement);
            expect(userElement.getAttribute('xlink:href')).to.equal('#i-error')
            // 获取input 组件中 errorMassage 元素(span)
            const errorMassage = vm.$el.querySelector('.errorMassage')
            expect(errorMassage.innerText).to.equal('你好世界')
        })
    })
    describe('事件', () => { 
        const Constructor = Vue.extend(Input);
        let vm

        afterEach( () => { 
            vm.$destroy()
        })
        // 单个测试
        it('支持 change', () => { 
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('change', callback)
            // 创建change 事件 活的event对象(js添加  这是不可靠的 但是测试可以使用)
            var event = new Event('change')
            Object.defineProperty(event, 'target', { value: {value:'hi'}, enumerable: true});
            // 查找到页面中唯一的input
            let inputElement = vm.$el.querySelector('input')
            // 使用事件
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
        })
        // it('支持 input', () => { 
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('input', callback)
        //     var event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持 focus', () => { 
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('focus', callback)
        //     var event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持 blur', () => { 
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('blur', callback)
        //     var event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // 多个测试
        it('支持 change/input/focus/blur事件', () => { 
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => { 
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                var event = new Event(eventName)
                Object.defineProperty(event, 'target', { value: {value:'hi'}, enumerable: true});
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                console.log(eventName);
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })
})
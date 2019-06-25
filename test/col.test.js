const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在Col', () => {
        expect(Col).to.be.ok
    })
    it('存在span', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: '12',
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-12')).to.equal(true);
        div.remove()
        vm.$destroy()
    })
    it('存在offset', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: '12',
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-12')).to.equal(true);
        div.remove()
        vm.$destroy()
    })
    it('存在pc', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:1,offset:2},
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-1')).to.equal(true);
        expect(element.classList.contains('offset-pc-2')).to.equal(true);
        div.remove()
        vm.$destroy()
    })
    it('存在 ipad', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span:1,offset:2},
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-1')).to.equal(true);
        expect(element.classList.contains('offset-ipad-2')).to.equal(true);
        div.remove()
        vm.$destroy()
    })
    it('存在 narrow-pc', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:1,offset:2},
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrow-pc-1')).to.equal(true);
        expect(element.classList.contains('offset-narrow-pc-2')).to.equal(true);
        div.remove()
        vm.$destroy()
    })
    it('存在 wide-pc', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span:1,offset:2},
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-wide-pc-1')).to.equal(true);
        expect(element.classList.contains('offset-wide-pc-2')).to.equal(true);
        div.remove()
        vm.$destroy()
    })
})
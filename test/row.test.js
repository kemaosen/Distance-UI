const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    // done 不加done 就是默认所有的代码都是同步的 顺序执行完 就结束了 
    // 加了就是含有异步

    it('可以设置gutter.', (done) => {
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `;
        const vm = new Vue({
            el:div
        })
        // console.log(vm.$el.outerHTML);
        // <div><div data-v-affcbb="" class="row" style="margin-left: -10px; margin-right: -10px;"><div
// data-v-392af6="" class="col" data-v-affcbb="" style="padding-left: 0px; padding-right: 0px;"></div> <div data-v-392af6="" class="col" data-v-affcbb="" style="padding-left: 0px; padding-right: 0px;"></div></div></div>
        // 这样打印出来的col组件的paddingLeft / Right值为零，但是实际上页面中是存在这个值 如何查看 使用异步的方式
        // 问题的原因在于Vue的渲染机制
        setTimeout(() => {
            let cols = vm.$el.querySelectorAll('.col');
            let row = vm.$el.querySelector('.row');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
            done()// 使用异步的方式 需要添加done 退出 
            vm.$el.remove()
            vm.$destroy()
        });
    })
    it('接收align 参数.', () => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'center',
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('center');
        div.remove()
        vm.$destroy()
    })
})
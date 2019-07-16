const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from '../src/tabs-body'
import TabsHead from '../src/tabs-header'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    });
    
    it('接收 selected props', (done) => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <g-tabs selected="2">
                <g-tabs-head>
                    <g-tabs-item name="1"> 1</g-tabs-item>
                    <g-tabs-item name="2"> 2</g-tabs-item>
                    <g-tabs-item name="3"> 3</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="1">你好</g-tabs-pane>
                    <g-tabs-pane name="2">我好</g-tabs-pane>
                </g-tabs-body>
            </g-tabs> `;
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => { 
            let x = vm.$el.querySelector(`.tabs-item[data-name="2"]`)
            expect(x.classList.contains('active')).to.be.true;
            done()
        })
    })
    it('接收 direction props', () => {
    })
})
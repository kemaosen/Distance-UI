const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false



describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist;
    })
    
    describe('props', function () { 
        it('接收autoClose', (done) => { 
            let div = document.createElement('div');
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: '5s',
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false); 
                done();
            })
            // setTimeout(() => { 
            //     // 设置自动关闭时间为1秒  定时器在1.5秒关闭元素  1.5后判断元素是否在body上
            //     console.log(document.body.contains(vm.$el));
            // },3000)
        })
        it('接收closeButton', (done) => { 
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    },
                }
            }).$mount()

            let closeButton = vm.$el.querySelector('.close');
            expect(closeButton.textContent.trim()).to.eq('关闭吧');
            setTimeout(() => {
                closeButton.click();
                expect(callback).to.have.been.called;
                done()
            }, 200);
        })
        it('接收HTML', () => { 
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true,
                }
            })
            
            vm.$slots.default = ['<strong id="hi">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#hi')
            expect(strong).to.exist
        })
        it('接收position', () => { 
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom',
                }
            })
            vm.$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
})
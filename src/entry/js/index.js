import '@babel/polyfill'
import a from '../../module/a'
console.log(999)
let aaa = 1
a()

let NA = new a()

function f() {
    return new Promise((resolve,reject)=>{
        resolve(1)
    })
}
f().then(res=>{
    console.log('333')
})

class Person {

}

let b = new Set([1,2,3])

import Vue from 'vue'

Vue.mixin({
    created(){
        console.log('Vue mixin created')
    }
})

new Vue({
    el: '#app',
    components: {
    },
    created(){
        console.log('Vue created')
        setTimeout(()=>{
            this.show = true
        },3000)
    },
    render(h){
        return h('div',{
            attr: {
                id: 'aa'
            }
        },[h('div',{attr: {id: 'bb'}},222),h('div',333)])
    },
    data(){
        return {
            message: '123',
            show: false
        }
    }
})

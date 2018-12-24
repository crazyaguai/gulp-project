import '@babel/polyfill'
import Vue from '../../common/vue.esm'
// import Vue from 'vue'

import HelloWorld from '../../module/helloworld/helloworld'

Vue.mixin({
    created(){
        console.log('Vue mixin created')
    }
})

new Vue({
    el: '#app',
    components: {
        HelloWorld
    },
    created(){
        console.log('Vue created')
    },
    render(h){
        return h(HelloWorld)
    }
})

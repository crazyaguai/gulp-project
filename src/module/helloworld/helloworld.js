import Vue from '../../common/vue.esm'
// import Vue from 'vue'
import tpl from './helloworld.html'

export default Vue.extend({
    name: "helloWorld",
    template: tpl,
    data(){
        return {
            data: 'HelloWorld'
        }
    },
})

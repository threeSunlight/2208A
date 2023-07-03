// 定义一个混入对象
var myMixin = {
    data() {
        return{
            name: '小红'
        }   
        
    },
    created: function () {
      this.hello()
      console.log('created', 'minix');
    },
    mounted() {
        console.log('mounted', 'minix');
    },
    methods: {
      hello: function () {
        
        console.log('hello from mixin!')
      }
    }
  }
  

export default myMixin
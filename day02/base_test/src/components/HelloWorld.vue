<template>
  <div class="hello">
    <span>我是hello world</span>
    <button @click="handleMinx">获取混入对象</button>
    <!-- <div>
      <h2>姓名:{{ name }}</h2>
      <h2>性别: {{ sex }}</h2>
      <input v-fbind:value="name" />
    </div> -->
    <button @click="hello">获取混入对象1</button>
	<h2>{{title}}</h2>
	<button @click="emitParent">修改父组件的title</button>
  </div>
</template>

<script>

// import Myminix from '../../minix/minix';
// import Myminixs from '../../minix/list';

export default {
  name: "HelloWorld",
  //	mixins: [Myminixs, Myminix],
  //props 第一种写法 数组
  // props 第二种写法
  props: ['title', 'tableList'],
  // props: {
  //   title: {
  //     // 类型
  //     type: String,
  //     // 默认值
  //     default: '我是默认值',
  //     // 是否必传
  //    // required: true
  //   },
  //   tableList: {
  //      // 类型
  //     type: Array,

  //   }
  // },

//   props: {
//     title: {
//       validator: function (value) {
//         // 这个值必须匹配下列字符串中的一个
//         return ["success", "warning", "danger"].includes(value);
//       },
//     },
//   },
  data() {
    return {
      games: ["UZI", "xiaoming", "麻辣香锅"],
      sex: "男",
    };
  },
  created() {

  },
  mounted() {
	console.log(this.$attrs);


  },
  methods: {
    handleReact() {
      // console.log(this.title,this.tableList);
    //   console.log("我是子组件", value);
    },
    handleMinx() {
      console.log(this.name);
      console.log(this.x);
      console.log(this);
      this.hello();
    },

	/**通知父组件修改title */
	emitParent() {
		this.$emit('updateTitle', '小绿')
	}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

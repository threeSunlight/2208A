<template>
	<div id="app">
		<!-- 自定义事件 -->
		<!-- <HelloWorld
			:title="title"
			:tableList="tableList"
			v-if="hellworlVisibles"
			ref="hellworlVisible"
			@updateTitle="updateTitle"
		/>
		<button @click="handlerGetChildren">1111</button>
		<button @click="showHello">点击让子组件进行显示</button>
		<hr />
		<hr />
		<hr />
		<SlotTemplate>
			<div>我想要种树</div>
			<div>我要开花</div>
			<div slot="jonk">我想看二手玫瑰的演唱会</div>
			<template slot="lpl" slot-scope="{travel}">
				{{ travel }}
				<ul>
					<li v-for="(item, index) in travel" :key="index">
						地名: {{ item.name }}
						美景: {{  item.fineView  }}
					</li>
				</ul>
			</template>
		</SlotTemplate>
		<hr />
		<hr />
		<hr />
		<ScopeTemplate>
			<template scope="games" slot="xiaoong"></template>
		</ScopeTemplate> -->
		<div>
			<router-link to="/home">GO home</router-link>
			<router-link to="/about">GO about</router-link>
			<router-link to="/travel">GO travel</router-link>
		</div>

		<div>
			<!-- 渲染页面的入口和占位符 -->
			<router-view></router-view>
		</div>
		<NameView/>
	</div>
	<!-- 一. ref的作用
        1. 获取真实DOM元素,VC = VueComponent
        2. 父组件调用子组件的方法,也可以获取子组件data中定义属性
        3. 父组件给子组件传值
      二、props
        有三种写法:
        第一种数组:  props: ['a','b'],
        第二种对象:  props: {
          a: {
            type: Number,
            default: 100,
            required: true,
            validator: function(value) {
              自定义校验
            }
          }
        }
        第三种对象简写方式: 
           props: {
             a:Numer,
             b: String
           }
      三.minix混入
        概念: 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项
        。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
        生命周期执行顺序:minix的生命周期函数会在组件的生命周期函数之前执行,data中相同命名,以组件为准,    每个生命周期
                      如果两个minix中data属性命名冲突,以后加载为准

      四. 插件 plugins
	  五. $attrs传值
			mounted(){

			}
	  六.单向数据流
	    数据只能从父组件流向子组件,子组件不能直接修改父组件的值,想要修改必须通过$emit通知父组件修改
	 七.组件传值方式
	  1. ref
	  2. props
	  3. $attrs
	  4. $emit
	  5. vuex
	  6. 本地储存
	八.spa
		单页面应用程序: 具体概念
	九. $nextTick
	   诞生的原因:虚拟dom节点对比,diff是异步,当修改属性时,节点还在进行对比,并没有渲染对比完成
	   所以不能直接获取dom元素,需要等待diff算法运行结束
    十.seo优化是什么?
	十一.eventLoop(事情循环)
	十二.插槽
	    概念: 插槽就是一个占位符,把自定义组件的内容展示出来, 占位符用 slot来站位
		1. 具名插槽
			在子组件中slot 上绑定name属性,进行命名
			在父组件上用slot="name属性名",进行展示 
		2. 匿名插槽
		3. 作用域插槽
		   概念: 将子组件的内容,传递给父组件,让父组件根据子组件传递过来的内容,决定页面进行渲染
	十四. vuex 
		概念: Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
		它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
		缺点: 刷新丢失
		解决方法: 
			1. 下载一个插件 ---- 储存到本地中
			2. 我们储存到本地
		五大核心: state, actions(异步), mutations(同步), modules(模块), getters(计算属性)
		this.$store.state  this.$store.dispatch this.$store.commit
		辅助函数: mapState, mapActions, 
		运行原理: 
	十五: hash和history
	十六: 计算属性的总结 ---- ******/
				1. 计算属性是同步
				2. 计算属性依赖的值是data中定义的,他声明值在data中不定义,不存在
				3. 计算属性是有缓存的
		        4. 计算属性中get方法需要有return返回值
				5.get函数什么时候执行？
								(1).初次读取时会执行一次。
								(2).当依赖的数据发生改变时会被再次调用。
	十七.监听属性
			1. watch监听是异步的
			2. 没有缓存,可以请求接口
			3. 有配置项,deep,immediate
			4. watch监听的属性,必须在data中声明
				监视属性watch：
					1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作
					2.监视的属性必须存在，才能进行监视！！
					

   -->
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue';
	// import SlotTemplate from './components/SlotTemplate';
	// import ScopeTemplate from './components/ScopeTemplate';
	import NameView from './components/NameView.vue'
	export default {
		name: 'App',
		components: {
			// HelloWorld,
			// SlotTemplate,
			// ScopeTemplate,
			NameView
		},
		data: function () {
			return {
				hellworlVisibles: false,
				tableList: [
					{
						name: '商小贩',
						age: 18,
					},
					{
						name: '商小贩',
						age: 18,
					},
					{
						name: '商小贩',
						age: 18,
					},
				],
				title: '今天天气真的好',
			};
		},
		methods: {
			handlerGetChildren() {
				console.log(this.$refs.hellworlVisible);
				this.$refs.hellworlVisible.handleReact(this.tableList);
				console.log(this.$refs.hellworlVisible.games);
			},
			// 子组件通知父组件进行修改
			updateTitle(value) {
				this.title = value;
				// 修改title
			},
			/**显示子组件 */
			showHello() {
				this.hellworlVisibles = true;
				// this.$nextTick(() => {
				// 	console.log(this.$refs.hellworlVisible);
				// })
				// eventLoop
				setTimeout(() => {
					console.log(this.$refs.hellworlVisible);
				});
			},
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
</style>

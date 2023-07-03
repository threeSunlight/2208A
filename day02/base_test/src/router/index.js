//  
import VueRouter from "vue-router";
//2. 引入组件
import HomeView from '../view/HomeView.vue'
import AboutView from '../view/Aboutview.vue'
import TravelView from '../view/TravelView'


//路由加载
// 1. 同步加载
//  路由表加载的时候,组件同步引入
  // 2. 路由懒加载
   //当我们点击当前路由的时候,才会加载这个页面,提高性能,优化资源
// 静态路由
const routes = [
    {
        path:'/about',
        // 命名路由
        name: 'about',
        component: AboutView
    },
    {
        path:'/home',
        name: 'home',
        component: HomeView,
        beforeEnter: (to, from, next) => {
            // ...
          }
    },
    // 嵌套理由
    {
        path: '/travel',
        name: 'travel',
        component: TravelView,
        children: [
            {
                path:'mesg',
                name: 'mesg',
                component: () => import('../view/MesgView.vue')
            },
            {
                path:'text',
                name: 'text',
                component: () => import('../view/TextView.vue')
            },
        ]
    }
]

// 动态路由
// 路由随用户权限的变化而变化

//3. 注册路由并实例化路由
const router = new VueRouter({
    routes
})

//全局前置路由守卫
// 第一个作业: 如果前置路由进入到travel页面,放行到travel/text
// 动态路由传参
// 整理笔记,
// hash和history的原理
router.beforeEach((to, from, next) => {
    next()
    
})

//全局后置路由

router.afterEach((to, from) => {
    console.log(to, '64');
    console.log()
    if(to.name==="travel") {
        router.push("/travel/text")
    }
    // ...
  })





export default router
import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
	history: createWebHashHistory(),
	routes: [
		// { path:'/', redirect:'/home' },
		{
			path:'/home',
			component:() => import('../components/Home.vue')
		},
		{
			path:'/about',
			component:() => import('../components/HelloWorld.vue')
		},
	]
})

// 调试信息
router.beforeEach((to,from,next) => {
	console.log(from, to)
	next()
})

export default router

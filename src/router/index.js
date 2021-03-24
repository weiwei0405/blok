import {
	createRouter,
	createWebHistory
} from 'vue-router'
const Home = () => import('../views/Home.vue')
const Show = () => import('../views/Show.vue')
const About = () => import('../views/About.vue')
const routes = [{
		path: '/',
		component: Home
	},
	{
		path: '/home',
		name: 'Home',
		meta: {
			title: '首页'
		},
		component: Home
	},
	{
		path: '/caty',
		meta: {
			title: '分类'
		},
		component: Show
	},
	{
		path: '/about',
		meta: {
			title: '关于'
		},
		component: About
	},
	{
		path: '/show/:id',
		component: Show
	}

]

const router = createRouter({
	history: createWebHistory(),
	routes
})
router.beforeEach((to, from, next) => {

	document.title = to.matched[0].meta.title
	next()
})

export default router

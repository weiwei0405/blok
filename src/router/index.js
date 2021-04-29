import {
	createRouter,
	createWebHistory
} from 'vue-router'
const Home = () => import('../views/Home.vue')
const Show = () => import('../views/Show.vue')
const About = () => import('../views/About.vue')
const BookList = () => import('views/BookList')
const Book = () => import('views/Book')
const routes = [{
		path: '/',
		redirect: '/home'
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
		path: '/BookList/:fid',
		meta: {
			title: '分类目录'
		},
		component: BookList
	}, 
	{
		path: '/book/:id',

		component: Book
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

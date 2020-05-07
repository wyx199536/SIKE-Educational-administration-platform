import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import ('../components/home/home.vue')
const communication = () => import ('../components/communication/communication.vue')
const feedback = () => import ('../components/feedback/feedback.vue')
const profile = () => import ('../components/profile/profile.vue')
const schedule = () => import ('../components/schedule/schedule.vue')
const teacherList = () => import ('../components/teacherList/teacherList.vue')


const routes = [{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/communication',
		component: communication
	},
	{
		path: '/profile',
		component: profile
	},
	{
		path: '/feedback',
		component: feedback
	},
	{
		path: '/schedule',
		component: schedule
	},
	{
		path: '/teacherlist',
		component: teacherList
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: routes,
	linkActiveClass:'active',
})

export default router

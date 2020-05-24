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
		component: home,
		name: '首页'
	},
	{
		path: '/communication',
		component: communication,
		name: '沟通',
	},
	{
		path: '/profile',
		component: profile,
		name: '个人档案'
	},
	{
		path: '/feedback',
		component: feedback,
		name: '课程反馈'
	},
	{
		path: '/schedule',
		component: schedule,
		name: '课程安排'
		
	},
	{
		path: '/teacherlist',
		component: teacherList,
		name: '教师列表'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: routes,
	linkActiveClass:'active',
})

export default router

<template>
	<div>
		<routerButton v-for="router in routeList"
		:routerURL="router.routePath"
		:routerName="router.routeName" 
		:routerIconURL="router.routeIconURL"
		:activeRouterIconURL="router.activeRouteIconURL"
		:key="router.routeName"></routerButton>
	</div>
</template>

<script>
	import routerButton from './routerButton.vue'
	
	const routeList=[{
				routeName: '首页',
				routePath: '/home',
				routeIconURL: require('../../../public/img/home1.png'),
				activeRouteIconURL: require('../../../public/img/home2.png'),
			},	
			{
				routeName: '课程安排',
				routePath: '/schedule',
				routeIconURL: require('../../../public/img/schedule1.png'),
				activeRouteIconURL: require('../../../public/img/schedule2.png'),
			},
			{
				routeName: '课程反馈',
				routePath: '/feedback',
				routeIconURL: require('../../../public/img/feedback1.png'),
				activeRouteIconURL: require('../../../public/img/feedback2.png'),
			},
			{
				routeName: '教师列表',
				routePath: '/teacherList',
				routeIconURL: require('../../../public/img/teacher1.png'),
				activeRouteIconURL: require('../../../public/img/teacher2.png'),
			},
			{
				routeName: '沟通',
				routePath: '/communication',
				routeIconURL: require('../../../public/img/chat1.png'),
				activeRouteIconURL: require('../../../public/img/chat2.png'),
			},
			{
				routeName: '个人档案',
				routePath: '/profile',
				routeIconURL: require('../../../public/img/profile1.png'),
				activeRouteIconURL: require('../../../public/img/profile2.png'),
			}
		]
	
	export default{
		name: 'routerList',
		data(){
			return{
				routeList: routeList,
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
			}
		},
		components:{
			routerButton: routerButton
		},
		methods:{
			test(){
				console.log(this.routeList)
			}
		}
	}
</script>

<style scoped>

</style>

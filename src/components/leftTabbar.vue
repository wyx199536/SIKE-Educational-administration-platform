<template>
	<div id="left-tabbar" class="left-element">
		<div id="avatar">
			<img src="../../public/img/img.jpg">
		</div>
		<div id="user-name">
			{{userName}}
		</div>
		<div>
			<routeLink v-for="route in routeList" 
			:routeURL="route.routePath" 
			:routeName="route.routeName" 
			:routeIconURL="route.routeIconURL"
			:key="route.routeName"></routeLink>
			<div class="tabbar-text" id="tabbar-text-title">思课教育</div>
			<div class="tabbar-text">www.sike.com</div>
		</div>
	</div>
</template>

<script>
	import routeLink from './routeLink.vue'
	
	const routeList = [{
			routeName: '首页',
			routePath: '/home',
			routeIconURL: require('../../public/img/com.png'),
		},	
		{
			routeName: '课程安排',
			routePath: '/schedule',
			routeIconURL:require('../../public/img/com.png'),
		},
		{
			routeName: '课程反馈',
			routePath: '/feedback',
			routeIconURL:require('../../public/img/com.png'),
		},
		{
			routeName: '教师列表',
			routePath: '/teacherList',
			routeIconURL:require('../../public/img/com.png'),
		},
		{
			routeName: '沟通',
			routePath: '/communication',
			routeIconURL: require('../../public/img/com.png'),
		},
		{
			routeName: '个人档案',
			routePath: '/profile',
			routeIconURL:require('../../public/img/com.png'),
		}
	]
	
	export default {
		name: 'leftTabbar',
		data() {
			return {
				userName: '魏琰熹',
				avatarURL: '',
				routeList: routeList
			}
		},
		components:{
			routeLink: routeLink
		},
		methods:{
			over(){
				console.log("aaaa")
			}
		}
	}
</script>

<style scoped>
	.left-element {
		width:200px;
	}
	#left-tabbar {
		position: fixed;
		top: 80px;
		height: 100%;
		float: left;
		background: #1c242a;
	}
	#avatar {
		position: relative;
		margin-top: 25px;
		left: 50%;
		transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		height: 60px;
		width: 60px;
	}
	#avatar img {
		border-radius: 50%;
		height: 60px;
		width: 60px;
		object-fit: cover;
	}
	#user-name {
		margin-top: 10px;
		text-align: center;
		font-size: 14px;
		color: #FFFFFF;
		margin-bottom: 15px;
	}
	.active{
		color: #ffffff;
	}
	.tabbar-text{
		text-align: center;
		color: #656565;
		font-size: 16px;
	}
	#tabbar-text-title{
		margin-top: 30px;
	}
</style>

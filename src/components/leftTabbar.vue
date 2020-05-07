<template>
	<div id="left-tabbar" class = "left-element">
		<div id="avatar">
			<img src="../../public/img/img.jpg">
		</div>
		<div id="user-name">
			{{userName}}
		</div>
		<div id="router" v-for="item in routeList" :key = "item" class = "left-element">
			<div id="icon">
				<img src="../../public/img/img.jpg">
			</div>
			<div id="link">
				<router-link to=item.routePath>item.routeName</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'leftTabbar',
		data() {
			return {
				userName: '魏琰熹',
				avatarURL: '',
				routeList: routeList
			}
		}
	}
	const routeList = [{
			routeName: '首页',
			routePath: '/home',
			routeIconURL: '../../public/img/img.jpg'
		},	
		{
			routeName: '课程安排',
			routePath: '/schedule',
			routeIconURL:'../../public/img/img.jpg'
		},
		{
			routeName: '课程反馈',
			routePath: '/feedback',
			routeIconURL:'../../public/img/img.jpg'
		},
		{
			routeName: '教师列表',
			routePath: '/teacherList',
			routeIconURL:'../../public/img/img.jpg'
		},
		{
			routeName: '沟通',
			routePath: '/communication',
			routeIconURL:'../../public/img/img.jpg'
		},
		{
			routeName: '个人档案',
			routePath: '/profile',
			routeIconURL:'../../public/img/img.jpg'
		}
	]
</script>

<style scoped>
	.left-element{
		width: 170px;
	}
	#left-tabbar {
		position: fixed;
		top: 60px;
		height: 100%;
		float: left;
		border: 1px solid #000000;
		background: #444444;
	}

	#avatar {
		position: relative;
		margin-top: 25px;
		left: 50%;
		transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		height: 55px;
		width: 55px;
	}

	#avatar img {
		border-radius: 50%;
		height: 55px;
		width: 55px;
		object-fit: cover;
	}
	#user-name {
		margin-top: 10px;
		text-align: center;
		font-size: 14px;
		color: #FFFFFF;
	}
	#router{
		position: relative;
		margin-top: 5px;
		height: 30px;
	}
	#icon{
		position: relative;
		top: 50%;
		left: 10%;
		transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		float: left;
		width: 20px;
		height: 20px;
		margin-top: 30px;
	}
	#icon img{
		width: 20px;
		height: 20px;
		object-fit: cover;
	}
	#link{
		position: relative;
		top: 50%;	
		width: 70px;
		height: 20px;
		float:left;
	}
</style>

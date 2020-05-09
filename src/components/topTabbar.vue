<template>
	<div id = "top-tabbar">
		<div id="lesson-button" class="top-element">
			<lessonButton></lessonButton>
		</div>
		<div id="setting-button" class="top-element">
			<settingButton></settingButton>
		</div>
		<div id="avatar-button" class="top-element">
			<avatarButton></avatarButton>
		</div>
		<div id="notice-button" class="top-element">
			<noticeButton></noticeButton>
		</div>
	</div>
</template>

<script>
	import lessonButton from './topTabbar/lessonButton.vue'
	import settingButton from './topTabbar/settingButton.vue'
	import avatarButton from './topTabbar/avatarButton.vue'
	import noticeButton from './topTabbar/noticeButton.vue'
	
	export default{
		name : 'topTabbar',
		components:{
			lessonButton,
			settingButton,
			avatarButton,
			noticeButton
		}
	}
</script>

<style scoped>
	.top-element{
		position: fixed;
		top: 40px;
		transform: translate(50%,-50%);
		-ms-transform: translate(50%,-50%);
		-webkit-transform: translate(50%,-50%);
	}
	#top-tabbar{
		position: fixed;
		left: 200px;
		height: 80px;
		width: 100%;
		float: left;
		border: 1px solid #000000;
	}
	#notice-button{
		right: 30%;
	}
	#lesson-button{
		right: 24%;
	}
	#setting-button{
		right: 18%;
	}
	#avatar-button{
		right: 12%;
	}
</style>

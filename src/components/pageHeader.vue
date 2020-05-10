<template>
	<div :class="{'header-a':ifA,'header-b':ifB,'header-c':ifC}">
		<div>
			<sign></sign>
		</div>
		<div id='top-tabbar-area'>
			<lessonButton id="lesson-button" class="top-element"></lessonButton>
			<settingButton id="setting-button" class="top-element"></settingButton>
			<avatarButton id="avatar-button" class="top-element"></avatarButton>
		</div>
	</div>
</template>

<script>
	import lessonButton from './topTabbar/lessonButton.vue'
	import settingButton from './topTabbar/settingButton.vue'
	import avatarButton from './topTabbar/avatarButton.vue'
	import sign from './pageHeader/sign.vue'
	
	export default{
		name: 'pageHeader',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC
			}
		},
		components:{
			sign,
			lessonButton,
			settingButton,
			avatarButton
		}
	}
</script>

<style scoped>
	.header-a{
		height: 70px;
	}
	.header-b{
		height: 80px;
	}
	.header-c{
		height: 90px;
	}
	.top-element{
		position: fixed;
		top: 45px;
		transform: translate(50%,-50%);
		-ms-transform: translate(50%,-50%);
		-webkit-transform: translate(50%,-50%);
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

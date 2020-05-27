<template>
	<div id="header-button-bar" 
	:class="{'header-button-bar-a':ifA,'header-button-bar-b':ifB,'header-button-bar-c':ifC}">
		<headerTitle></headerTitle>
		<div id="header-button-bar-right">
			<noticeButton class="header-button-bar-element"></noticeButton>
			<helpButton class="header-button-bar-element"></helpButton>
			<lessonButton class="header-button-bar-element"></lessonButton>
			<avatarButton class="header-button-bar-element"></avatarButton>
		</div>
	</div>
</template>

<script>
	import avatarButton from './headerButton/avatarButton.vue'
	import lessonButton from './headerButton/lessonButton.vue'
	import headerTitle from './headerButton/headerTitle.vue'
	import helpButton from './headerButton/helpButton.vue'
	import noticeButton from './headerButton/noticeButton.vue'
	
	export default{
		name: 'headerButtonBar',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC
			}
		},
		components:{
			avatarButton,
			noticeButton,
			helpButton,
			lessonButton,
			headerTitle
		}
	}
</script>

<style scoped>
	#header-button-bar{
		height: 100%;
		margin: 0 auto;
	}
	#header-button-bar-right{
		float: right;
		height: 40px;
		transform: translateY(-15%);
	}
	.header-button-bar-element{
		float: left;
		margin-left: 10px;
	}
	.header-button-bar-a{
		
	}
	.header-button-bar-b{
		width: 1040px;
	}
	.header-button-bar-c{
		width: 1200px;
	}
	#help-button{
		
	}
</style>

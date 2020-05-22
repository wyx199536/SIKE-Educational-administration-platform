<template>
	<div id="header-button-bar" 
	:class="{'header-button-bar-a':ifA,'header-button-bar-b':ifB,'header-button-bar-c':ifC}">
		<headerTitle></headerTitle>
		<noticeButton></noticeButton>
		<lessonButton></lessonButton>
		<avatarButton></avatarButton>
	</div>
</template>

<script>
	import avatarButton from './headerButton/avatarButton.vue'
	import lessonButton from './headerButton/lessonButton.vue'
	import noticeButton from './headerButton/noticeButton.vue'
	import headerTitle from './headerButton/headerTitle.vue'
	
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
			lessonButton,
			noticeButton,
			headerTitle
		}
	}
</script>

<style scoped>
	#header-button-bar{
		height: 100%;
		margin: 0 auto;
		background-color: #63676F;
	}
	.header-button-bar-a{
		
	}
	.header-button-bar-b{
		width: 1040px;
	}
	.header-button-bar-c{
		width: 1200px;
	}
</style>

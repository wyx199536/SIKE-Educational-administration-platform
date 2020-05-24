<template>
	<div id="header-button-bar" 
	:class="{'header-button-bar-a':ifA,'header-button-bar-b':ifB,'header-button-bar-c':ifC}">
		<headerTitle class="header-button-bar-element"></headerTitle>
		<test class="header-button-bar-element"></test>
		<helpButton class="header-button-bar-element" id="help-button"></helpButton>
		<lessonButton class="header-button-bar-element"></lessonButton>
		<avatarButton class="header-button-bar-element"></avatarButton>
	</div>
</template>

<script>
	import avatarButton from './headerButton/avatarButton.vue'
	import lessonButton from './headerButton/lessonButton.vue'
	import headerTitle from './headerButton/headerTitle.vue'
	import helpButton from './headerButton/helpButton.vue'
	import test from './headerButton/test.vue'
	
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
			test,
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
	.header-button-bar-element{
		display: inline-block;
		margin-top: auto;
		margin-bottom: auto;
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

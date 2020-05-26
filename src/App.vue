<template>
	<div id = "page">
		<div>
			<pageHeader></pageHeader>
		</div>
		<div id="page-body">
			<pageLeft></pageLeft>
			<pageRight></pageRight>
		</div>
	</div>
</template>

<script>
import pageHeader from './components/pageHeader.vue'
import pageLeft from './components/pageLeft.vue'
import pageRight from './components/pageRight.vue'

export default {
  name: 'App',
	components:{
		pageHeader,
		pageLeft,
		pageRight
	},
	data(){
		return{
		}
	},
	computed: {
		ifShowLessonArr(){
			return this.$store.state.ifShowLessonArr
		},
		ifShowAccountController(){
			return this.$store.state.ifShowAccountController
		}
	},
	created(){
		this.$store.commit('ensureCssType','setInitialDate')
		this.$store.commit('setInitialDate')
	}
}
</script>

<style scoped>
	#page{
		margin-top: 0;
	}
	#page-body{
	}
	#lesson-arrangement{
		position: fixed;
		top: 80px;
		right: 24%;
		width: 360px;
		border: #000000 1px solid;
		transform: translateX(50%);
		-ms-transform: translateX(50%);
		-webkit-transform: translateX(50%);
	}
	#account-controller{
		position: fixed;
		top: 80px;
		right: 12%;
		box-shadow: 1px 1px 1px 1px #888888;
		transform: translateX(50%);
		-ms-transform: translateX(50%);
		-webkit-transform: translateX(50%);
	}
</style>

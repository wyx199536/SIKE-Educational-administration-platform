<template>
	<div id = "page">
		<div>
			<sign></sign>
			<top-tabbar></top-tabbar>
		</div>
		<div>
			<left-tabbar></left-tabbar>
		</div>
		<div id = "content-area">
			<router-view></router-view>
			<div id="lesson-arrangement" v-show="ifShowLessonArr">
				<lessonArrangement></lessonArrangement>
			</div>
			<div id="account-controller" v-show="ifShowAccountController">
				<accountController></accountController>
			</div>
		</div>
	</div>
</template>

<script>
import sign from './components/sign.vue'
import leftTabbar from './components/leftTabbar.vue'
import topTabbar from './components/topTabbar.vue'
import lessonArrangement from './components/topTabbar/lessonArrangement.vue'
import accountController from './components/topTabbar/accountController.vue'

export default {
  name: 'App',
	components:{
		sign,
		leftTabbar,
		topTabbar,
		lessonArrangement,
		accountController
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
	}
}
</script>

<style scoped>
	#page{
		margin-top: 0;
	}
	#content-area{
		position: fixed;
		top: 80px;
		left: 200px;
		background: #EEEEEE;
		width: 100%;
		height: 100%;
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

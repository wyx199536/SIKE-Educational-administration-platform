<template>
	<div :class="{'page-left':true,'page-left-a':ifA,'page-left-b':ifB,'page-left-c':ifC}">
		<avatar :class="{avatar:true,'page-left-element-a':ifA,'page-left-element-b':ifB,'page-left-element-c':ifC}"></avatar>
		<div :class="{'page-left-element-a':ifA,'page-left-element-b':ifB,'page-left-element-c':ifC}">{{userName}}</div>
		<routerList></routerList>
		<img src="../../public/img/sign.png" alt="思课教育" id="page-left-sign" 
		:class="{'page-left-element-a':ifA,'page-left-element-b':ifB,'page-left-element-c':ifC,'page-left-sign-a':ifA,'page-left-sign-b':ifB,'page-left-sign-c':ifC}">
		<div :class="{'page-left-element-a':ifA,'page-left-element-b':ifB,'page-left-element-c':ifC}" id="page-left-website">
			www.sike.com
		</div>
	</div>
</template>

<script>
	import avatar from './common/avatar.vue'
	import routerList from './pageLeft/routerList.vue'
	
	export default{
		name: 'pageLeft',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
				userName: '魏琰熹',
			}
		},
		components:{
			avatar,
			routerList
		}
	}
</script>

<style scoped>
	.page-left-a{
		width: 163px;
	}
	.page-left-b{
		width: 170px;
	}
	.page-left-c{
		width: 190px;
	}
	.page-left{
		position: fixed;
		height: calc(100% - 70px);
		background: #253038;
		overflow: auto;
		text-align: center;
	}
	.page-left::-webkit-scrollbar-track {
		-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
		border-radius:10px;
		background-color:#000000;
	}
	.page-left::-webkit-scrollbar {
		width:4px;
		background-color:#797d87;
	}
	.page-left::-webkit-scrollbar-thumb {
		border-radius:10px;
		-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
		background-color:#63676F;
	}
	.page-left-element-a{
		margin: 6px auto 6px auto;
		color: #FFFFFF;
	}
	.page-left-element-b{
		margin: 8px auto 8px auto;
		color: #FFFFFF;
	}
	.page-left-element-c{
		margin: 10px auto 10px auto;
		color: #FFFFFF;
	}
	.page-left-sign-a{
		width: 55px;
		height: 55px;
	}
	.page-left-sign-b{
		width: 55px;
		height: 55px;
	}
	.page-left-sign-c{
		width: 60px;
		height: 60px;
	}
	#page-left-sign{
		padding-top: 10px;
	}
	#page-left-website{
		color: #959595;
		padding-bottom: 20px;
	}
	.avatar{
		margin-top: 25px;
	}
</style>

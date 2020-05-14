<template>
	<div :class="{'page-left':true,'page-left-a':ifA,'page-left-b':ifB,'page-left-c':ifC}">
		<div :class="{'page-left-element':true,'avatar-area-a':ifA,'avatar-area-b':ifB,'avatar-area-c':ifC}">
			<avatar></avatar>
		</div>
		<div :class="{'page-left-element':true,'user-name-area-a':ifA,'user-name-area-b':ifB,'user-name-area-c':ifC}">
			{{userName}}
		</div>
		<div id="router-list-area">
			<routerList></routerList>
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
		width: 200px;
	}
	.page-left{
		position: fixed;
		height: 100%;
		background: #1c242a;
		overflow: auto;
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
	.page-left-element{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		color: #FFFFFF;
	}
	.avatar-area-a{
		margin-top: 20px;
	}
	.avatar-area-b{
		margin-top: 22px;
	}
	.avatar-area-c{
		margin-top: 24px;
	}
	.user-name-area-a{
		margin-top: 102px;
		font-size: 13px;
	}
	.user-name-area-b{
		margin-top: 104px;
		font-size: 14px;
	}
	.user-name-area-c{
		margin-top: 106px;
	}
	#router-list-area{
		margin-top: 130px;
	}
</style>

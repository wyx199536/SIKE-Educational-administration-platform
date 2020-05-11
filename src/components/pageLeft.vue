<template>
	<div :class="{'page-left':true,'page-left-a':ifA,'page-left-b':ifB,'page-left-c':ifC}">
		<div id="avatar-area">
			<avatar></avatar>
		</div>
	</div>
</template>

<script>
	import avatar from './common/avatar.vue'
	
	export default{
		name: 'pageLeft',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC
			}
		},
		components:{
			avatar
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
		width: 210px;
	}
	.page-left{
		position: fixed;
		height: 100%;
		background: #1c242a;
	}
	#avatar-area{
		position: absolute;
		margin-top: 25px;
		left: 50%;
		transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
	}
</style>

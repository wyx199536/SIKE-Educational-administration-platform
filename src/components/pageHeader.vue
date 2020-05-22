<template>
	<div :class="{'header-a':ifA,'header-b':ifB,'header-c':ifC}">
		<sign></sign>
		<div :class="{'header-left-a':ifA,'header-left-b':ifB,'header-left-c':ifC}">
			<headerButtonBar></headerButtonBar>
		</div>
	</div>
</template>

<script>
	import sign from './pageHeader/sign.vue'
	import headerButtonBar from './pageHeader/headerButtonBar.vue'
	
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
			headerButtonBar
		}
	}
</script>

<style scoped>
	.header-a{
		height: 70px;
	}
	.header-b{
		height: 70px;
	}
	.header-c{
		height: 70px;
	}
	.header-left-a{
		width: calc(100% - 163px);
	}
	.header-left-b{
		height: 70px;
		width: calc(100% - 170px);
		position: fixed;
		right: 3px;
	}
	.header-left-c{
		height: 70px;
		width: calc(100% - 190px);
		position: fixed;
		right: 3px;
	}
	.top-element{
		position: absolute;
		top: 37px;
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

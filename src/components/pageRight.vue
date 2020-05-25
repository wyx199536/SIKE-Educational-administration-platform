<template>
	<div :class="{'page-right':true,'page-right-a':ifA,'page-right-b':ifB,'page-right-c':ifC}">
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name: 'pageRight',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC
			}
		}
	}
</script>

<style scoped>
	.page-right{
		overflow-y: scroll;
		background: #f1f1f1;
	}
	.page-right::-webkit-scrollbar-track {
		-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
		border-radius:6px;
		background-color:#ffffff;
	}
	.page-right::-webkit-scrollbar {
		width:6px;
		background-color:#9ba1ac;
	}
	.page-right::-webkit-scrollbar-thumb {
		border-radius:6px;
		-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
		background-color:#9ba1ac;
	}
	.page-right-a{
		
	}
	.page-right-b{
		min-width: 1040px;
		width: calc(100% - 170px);
		height: calc(100% - 70px);
		position: fixed;
		left: 170px;
	}
	.page-right-c{
		min-width: 1200px;
		width: calc(100% - 190px);
		height: calc(100% - 70px);
		position: fixed;
		left: 190px;
	}
</style>

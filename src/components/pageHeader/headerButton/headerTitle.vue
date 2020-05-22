<template>
	<div id="header-title">
		1111
	</div>
</template>

<script>
	export default{
		name: 'headerTitle',
		data(){
			return{
				title: this.$route.routeName
			}
		}
	}
</script>

<style scoped>
	#header-title{
		height: 100%;
		line-height: 100%;
	}
</style>

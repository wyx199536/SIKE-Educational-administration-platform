<template>
	<div id="header-title">
		{{title}}
	</div>
</template>

<script>
	export default{
		name: 'headerTitle',
		data(){
			return{
				
			}
		},
		computed:{
			title(){
				return this.$route.name
			}
		}
	}
</script>

<style scoped>
	#header-title{
		
	}
</style>

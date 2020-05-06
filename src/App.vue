<template>
	<div id = "sign">
		<sign></sign>
		<div>
			<h1>111</h1>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script>
import sign from './components/sign.vue'
import tabbar from './components/tabbar.vue'

export default {
  name: 'App',
	components:{
		sign,
		tabbar
	}
}
</script>

<style scoped>
	
</style>

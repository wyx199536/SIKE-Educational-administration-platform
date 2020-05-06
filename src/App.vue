<template>
	<div id = "sign">
		<div>
			<sign></sign>
		</div>
		<div>
			<left-tabbar></left-tabbar>
		</div>
		<div>
			<top-tabbar></top-tabbar>
		</div>
	</div>
</template>

<script>
import sign from './components/sign.vue'
import leftTabbar from './components/leftTabbar.vue'
import topTabbar from './components/topTabbar.vue'


export default {
  name: 'App',
	components:{
		sign,
		leftTabbar,
		topTabbar
	}
}
</script>

<style scoped>
	
</style>

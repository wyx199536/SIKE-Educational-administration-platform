<template>
	<div id = "page">
		<div>
			<sign></sign>
			<top-tabbar></top-tabbar>
		</div>
		<div>
			<left-tabbar></left-tabbar>
		</div>
		<div>
			<router-view></router-view>
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
		topTabbar,
	}
}
</script>

<style scoped>
	#page{
		width: 1000px;
		margin-top: 0;
	}
</style>

<template>
	<div>
		<div class="controller-button">
			账号设置
		</div>
		<hr id="line">
		<div class="controller-button">
			退出登录
		</div>
	</div>
</template>

<script>
	export default{
		name: 'accountController',
	}
</script>

<style scoped>
	.controller-button{
		width: 100px;
		text-align: center;
		line-height: 60px;
		height: 60px;
		background: #ffffff;
	}
	#line{
		width:80%;
		margin:0 auto;
		border: 0;
		height: 1px;
		background: #000000;
	}
</style>

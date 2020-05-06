<template>
	<div id = "sign-area">
		{{title}}
	</div>
</template>

<script>
	export default{
		name : 'sign',
		data(){
			return{
				title:'思课教育'
			}
		}
	}
</script>

<style scoped>
	#sign-area{
		width: 170px;
		height: 60px;
		
		background-color: #33CCCC;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 3px;
		
		/* 使div内部字体水平垂直居中，line-height=div的height */
		text-align: center;
		line-height: 60px;

		float: left;
	}
</style>

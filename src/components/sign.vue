<template>
	<div id = "sign-area">
		<span id = "sign" class = "title">{{sign}}</span>
		<span id = "type" class = "title">{{typeS}}</span>
	</div>
</template>

<script>
	export default{
		name : 'sign',
		data(){
			return{
				sign: '思课',
				typeT: '教师版',
				typeS: '家长版'
			}
		},
		methods:{
		}
	}
</script>

<style scoped>
	#sign-area{
		width: 200px;
		height: 80px;
		background-color: #33CCCC;
		color: #FFFFFF;
		letter-spacing: 1px;
		/* 使div内部字体水平垂直居中，line-height=div的height */
		text-align: center;
		float: left;
	}
	.title{
		font-family: NSimSun;
		line-height: 80px;
	}
	#sign{
		font-size:24px;
		font-weight: 600;
		margin-right: 2px;
	}
	#type{
		font-size: 22px;
		font-weight: 300;
	}
</style>

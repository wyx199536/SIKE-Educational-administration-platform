<template>
	<div :class="{'sign-area':true,'sign-area-a':ifA,'sign-area-b':ifB,'sign-area-c':ifC}">
		<span :class="{'sign-a':ifA,'sign-b':ifB,'sign-c':ifC,'sign-s': true}">{{sign}}</span>
		<span :class="{'sign-a':ifA,'sign-b':ifB,'sign-c':ifC,'sign-t': true}">{{typeS}}</span>
	</div>
</template>

<script>
	export default{
		name : 'sign',
		data(){
			return{
				sign: '思课',
				typeT: '教师版',
				typeS: '家长版',
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC
			}
		}
	}
</script>

<style scoped>
	.sign-area{
		position: fixed;
		left: 0;
		letter-spacing: 2px;
		background-color: #33CCCC;
		color: #FFFFFF;
		text-align: center;
	}
	.sign-area-a{	
		width: 163px;
		height: 70px;
		/* 使div内部字体水平垂直居中，line-height=div的height */
		line-height: 70px;
	}
	.sign-area-b{
		width: 170px;
		height: 70px;
		/* 使div内部字体水平垂直居中，line-height=div的height */
		line-height: 70px;
	}
	.sign-area-c{
		width: 200px;
		height: 80px;
		/* 使div内部字体水平垂直居中，line-height=div的height */
		line-height: 80px;
	}
	.sign-a{
		font-size:16px;
	}
	.sign-b{
		font-size:18px;
	}
	.sign-c{
		font-size:20px;
	}
	.sign-s{
		font-weight: 600;
		margin-right: 2px;
	}
	.sign-t{
		font-weight: 100;
	}
</style>

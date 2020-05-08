<template>
	<div>
		<div id="setting-button" @mouseenter="on" 
		@mouseout="out" :class="{'button-over': ifShow}">
		账号设置
		</div>
	</div>
</template>

<script>
	export default{
		name : 'settingButton',
		data(){
			return{
				ifShow: false
			}
		},
		methods:{
			on(){
				this.ifShow = true
			},
			out(){
				this.ifShow = false
			}
		}
	}
</script>

<style scoped>
	#setting-button{
		width: 90px;
		height: 40px;
		line-height: 40px;
		text-align: center;

	}
	.button-over{
		background: #f3f3f3;
		color: #2db3b3;
	}
</style>

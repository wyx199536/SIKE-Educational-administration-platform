<template>
		<div id="help-button" 
		:class="{'button-over': ifOver}"
		@mouseenter="over" @mouseleave="out"
		@click="clickHelpButton">
			帮助与反馈
		</div>
</template>

<script>
	export default{
		name : 'helpButton',
		data(){
			return{
				ifOver: false
			}
		},
		methods:{
			over(){
				this.ifOver = true
			},
			out(){
				this.ifOver = false
			},
			clickHelpButton() {
				
			}
		}
	}
</script>

<style scoped>
	#help-button{
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.button-over{
		background: #f3f3f3;
		color: #2db3b3;
	}
</style>

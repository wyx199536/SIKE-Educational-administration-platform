<template>
		<div id="lesson-button" :class="{'button-over': ifOver}"
		@mouseenter="over" @mouseout="out">
			近期课程
		</div>
</template>

<script>
	export default{
		name : 'lessonButton',
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
			}
		}
	}
</script>

<style scoped>
	#lesson-button{
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		text-indent: 4px;
	}
	.button-over{
		background: #f3f3f3;
		color: #2db3b3;
	}
</style>

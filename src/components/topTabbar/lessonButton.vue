<template>
	<div>
		<div id="lesson-button" @mouseenter="showArr" 
		@mouseout="hidArr" :class="{'button-over': ifShow}">
		课程
		</div>
	</div>
</template>

<script>
	export default{
		name : 'lessonButton',
		data(){
			return{
				ifShow: false
			}
		},
		methods:{
			showArr(){
				this.ifShow = true
				this.$store.commit('changeIfShowLessonArr')
			},
			hidArr(){
				this.ifShow = false
				this.$store.commit('changeIfShowLessonArr')
			}
		}
	}
</script>

<style scoped>
	#lesson-button{
		width: 70px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		letter-spacing: 4px;
		text-indent: 4px;
	}
	.button-over{
		background: #f3f3f3;
		color: #2db3b3;
	}
</style>

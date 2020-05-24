<template>
		<div id="lesson-button" :class="{'button-over': ifShow}">
			帮助与反馈
		</div>
</template>

<script>
	export default{
		name : 'helpButton',
		data(){
			return{
				ifShow: false
			}
		},
		methods:{
			showArr(){
				this.ifShow = true
				this.$store.commit('changeIfShowLessonArr')
				console.log('11')
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

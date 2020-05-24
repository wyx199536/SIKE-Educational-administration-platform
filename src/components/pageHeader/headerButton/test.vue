<template>
		<div id="lesson-button" :class="{'button-over': ifShow}">
			<img src="../../../../public/img/notice.png" alt="">
		</div>
</template>

<script>
	export default{
		name : 'test',
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
		width: 40px;
		height: 40px;
		border: 1px solid #000000;
	}
	#lesson-button img{
		width: 22px;
		height: 22px;
		object-fit: cover;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.button-over{
		background: #f3f3f3;
		color: #2db3b3;
	}
</style>

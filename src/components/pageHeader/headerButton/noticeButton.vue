<template>
		<div id="notice-button" :class="{'button-over': ifOver}" 
		@mouseenter="over" @mouseout="out">
			<img src="../../../../public/img/notice.png" alt="">
		</div>
</template>

<script>
	export default{
		name : 'noticeButton',
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
	#notice-button{
		width: 40px;
		height: 40px;
	}
	#notice-button img{
		width: 18px;
		height: 18px;
		object-fit: cover;
		padding: 11px;
	}
	.button-over{
		background: #f3f3f3;
	}
</style>

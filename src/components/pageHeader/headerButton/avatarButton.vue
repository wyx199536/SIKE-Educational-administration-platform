<template>
	<div id="avatar-button" :class="{'button-over': ifOver}">
		<img src="../../../../public/img/img.jpg" alt=""
		@mouseenter="over" @mouseout="out">
	</div>
</template>

<script>
	export default{
		name : 'avatarButton',
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
	#avatar-button{
		height: 40px;
		width: 40px;
		margin-left: 10px;
	}
	#avatar-button img{
		border-radius: 50%;
		position: relative;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		height: 25px;
		width: 25px;
		object-fit: cover;
	}
	.button-over{
		background: #f3f3f3;
	}
</style>

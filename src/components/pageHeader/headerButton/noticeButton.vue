<template>
		<div id="notice-button" :class="{'button-over': ifShow}">
			<img src="../../../../public/img/communication.png" alt="">
		</div>
</template>

<script>
	export default{
		name: 'noticeButton',
		data(){
			return{
				ifShow: false
			}
		}
	}
</script>

<style scoped>
	#notice-button{
		
		height: 40px;
		width: 40px;
	}
	#notice-button img{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-webkit-transform: translate(-50%,-50%);
		height: 30px;
		width: 30px;
		object-fit: cover;
	}
	.button-over{
		background: #f3f3f3;
	}
	
</style>

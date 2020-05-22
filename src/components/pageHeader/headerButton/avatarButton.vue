<template>
	<div id="avatar-button" :class="{'button-over': ifShow}">
		<img src="../../../../public/img/img.jpg" alt="">
	</div>
</template>

<script>
	export default{
		name : 'avatarButton',
		data(){
			return{
				ifShow: false
			}
		},
		methods:{
			on(){
				this.ifShow = true
				this.$store.commit('ChangeIfShowAccountController')
			},
			out(){
				this.ifShow = false
				this.$store.commit('ChangeIfShowAccountController')
			}
		}
	}
</script>

<style scoped>
	#avatar-button{
		height: 44px;
		width: 44px;
	}
	#avatar-button img{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-webkit-transform: translate(-50%,-50%);
		border-radius: 50%;
		height: 35px;
		width: 35px;
		object-fit: cover;
	}
	.button-over{
		background: #f3f3f3;
	}
</style>

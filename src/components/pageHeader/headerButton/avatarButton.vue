<template>
	<div id="avatar-button" :class="{'button-over': ifShow}">
		
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
		height: 40px;
		width: 40px;
		border: 1px solid #000000;
	}
	#avatar-button img{
		border-radius: 50%;
		height: inherit;
		width: inherit;
		object-fit: cover;
	}
	.button-over{
		background: #f3f3f3;
	}
</style>

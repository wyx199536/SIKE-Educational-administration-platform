<template>
		<div id="notice-button" :class="{'button-over': ifShow}">

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
		width: 20px;
		border: 1px #000000 solid;
	}
	#notice-button img{
		height: inherit;
		height: inherit;
		object-fit: cover;
	}
	.button-over{
		background: #f3f3f3;
	}
	
</style>

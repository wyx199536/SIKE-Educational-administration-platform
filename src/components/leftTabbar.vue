<template>
	<div id = "left-tabbar">
		<div id = "avatar">
			<img src="../../public/img/img.jpg">
		</div>
		<div id = "user-name">
			{{userName}}
		</div>
	</div>
</template>

<script>
	export default{
		name : 'leftTabbar',
		data(){
			return{
				userName: '魏琰熹',
				avatarURL: ''
			}
		}
	}
</script>

<style scoped>
	#left-tabbar{
		position: fixed;
		top: 60px;
		width: 170px;
		height: 100%;
		float: left;
		border: 1px solid #000000;
	}
	#avatar{
		position: relative;
		margin-top: 30px;
		left: 50%;
		transform:translateX(-50%);
		-ms-transform:translateX(-50%);
		-webkit-transform:translateX(-50%);
		height: 55px;
		width: 55px;
	}
	#avatar img{
		border-radius:50%;
		height:55px;
		width:55px;
		object-fit: cover;
	}
	#user-name{
		margin-top: 10px;
		text-align: center;
		font-size: 15px;
		letter-spacing: 1px;
	}
	
</style>

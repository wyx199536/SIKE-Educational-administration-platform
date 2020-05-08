<template>
	<div id="link-area" >
		<div id="icon" class="link-area-element">
			<img src="../../public/img/img.jpg" alt="">
		</div>
		<div id="link" :class="{'link-area-element':true, over:ifOver}" @mouseenter="mouseIn" @mouseleave="mouseOut" >
			<router-link :to="routeURL" tag="span" replace>
			{{routeName}}
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'routeLink',
		data(){
			return{
				ifOver: false
			}
		},
		props:{
			routeURL:{
				type: String,
				required: true
			},
			routeName:{
				type: String,
				required: true
			}
		},
		methods:{
			mouseIn(){
				this.ifOver = true
				console.log(this.ifOver)
			},
			mouseOut(){
				this.ifOver = false
				console.log(this.ifOver)
			}
		}
	}
</script>

<style scoped>
	#link-area{
		width: 100%;
		height: 80px;
	}
	.link-area-element{
		position: relative;
		top: 50%;
		left: 20%;
		transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		color: #959595;
		float: left;
		cursor:pointer;
	}
	.over{
		color: #ffffff;
	}
	#icon {
		width: 25px;
		height: 25px;
	}
	#icon img {
		width: 25px;
		height: 25px;
		object-fit: cover;
	}
	#link {
		width: 80px;
		line-height: 40px;
		margin-left: 3px;
		font-size: 18px;
	}
	.active{
		color: #ffffff;
	}
</style>

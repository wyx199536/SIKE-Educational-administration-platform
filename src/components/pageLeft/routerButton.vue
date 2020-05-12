<template>
	<div :class="{'router-area-a':ifA,'router-area-b':ifB,'router-area-c':ifC}">
		<div id="icon" class="route-area-element">
			<img :src="routerIconURL" alt="">
		</div>
		<div id="router" :class="{'route-area-element':true, over:ifOver}" 
		@mouseenter="mouseIn" 
		@mouseleave="mouseOut" >
			<router-link :to="routerURL" tag="span" replace>
			{{routerName}}
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'routerButton',
		data(){
			return{
				ifOver: false,
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
			}
		},
		props:{
			routerURL:{
				type: String,
				required: true
			},
			routerName:{
				type: String,
				required: true
			},
			routerIconURL:{
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
	.router-area-a{
		width: 100%;
		height: 55px;
	}
	.router-area-b{
		width: 100%;
		height: 56px;
		font-size: 16px;
	}
	.router-area-c{
		width: 100%;
		height: 70px;
		font-size: 18px;
	}
	.route-area-element{
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
	#router {
		width: 80px;
		line-height: 40px;
		margin-left: 3px;
	}
	.active{
		color: #ffffff;
	}
</style>

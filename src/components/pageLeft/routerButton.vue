<template>
	<router-link :to="routerURL" tag="div" replace 
	:class="{'router-area':true,'router-area-a':ifA,'router-area-b':ifB,'router-area-c':ifC}">
		<img :src="iconURL" alt="" class="router-element">
		<span :class="{'router-button':true,'router-element':true,'over':ifOver}"
		@mouseenter="mouseIn" @mouseleave="mouseOut">
		{{routerName}}
		</span>
	</router-link>
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
		computed:{
			ifActive(){
				if(this.$route.path == this.routerURL){
					return true
				}else{
					return false
				}
			},
			iconURL(){
				if(this.ifActive){
					return this.activeRouterIconURL
				}else{
					return this.routerIconURL
				}
			}
		},
		watch:{
			routerIconURL(val){
				this.iconURL = val
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
			},
			activeRouterIconURL:{
				type: String,
				required: true
			}
		},
		methods:{
			mouseIn(){
				this.ifOver = true
			},
			mouseOut(){
				this.ifOver = false
			}
		}
	}
</script>

<style scoped>
	.router-area{
		text-align: center;
	}
	.router-area-a{
		height: 45px;
	}
	.router-area-b{
		height: 55px;
		line-height: 53px;
	}
	.router-area-c{
		height: 60px;
		line-height: 58px;
	}
	.router{
		height: 100%;
	}
	.router-element{
		display: inline-block;
		vertical-align: middle;
	}
	.router-area img{
		width: 20px;
		height: 20px;
		object-fit: cover;
		padding-right: 8px;
	}
	.router-button{
		width: 80px;
		text-align: left;
		color: #959595;
		cursor: pointer;
	}
	.active{
		background-color: #1b252c;
	}
	.active span{
		color: #ffffff;
	}
	.over {
		color: #ffffff;
	}
</style>

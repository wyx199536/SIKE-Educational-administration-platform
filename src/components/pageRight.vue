<template>
	<div :class="{'page-right':true,'page-right-a':ifA,'page-right-b':ifB,'page-right-c':ifC}">
			<contentArea></contentArea>
	</div>
</template>

<script>
	import contentArea from './pageRight/contentArea.vue'
	
	export default{
		name: 'pageRight',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC
			}
		},
		components:{
			contentArea
		}
	}
</script>

<style scoped>
	.page-right{
		background: #cecece;
		width: calc(100% - 170px);
		height: calc(100% - 70px);
	}
	.page-right-a{
		
	}
	.page-right-b{
		position: fixed;
		left: 170px;
	}
	.page-right-c{
		
	}
</style>

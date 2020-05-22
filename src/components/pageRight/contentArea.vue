<template>
	<div :class="{'content-area':true,'content-area-a':ifA,'content-area-b':ifB,'content-area-c':ifC}">
		11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
		<div>
			1111
		</div>
	</div>
</template>

<script>
	export default{
		name: 'contentArea',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC
			}
		}
	}
</script>

<style scoped>
	.content-area{
		margin: 0 auto;
		height: 100%;
		border: 1px #000000 solid;
	}
	.content-area-a{
		
	}
	.content-area-b{
		min-width: 1040px;
		width: 1040px;
	}
	.content-area-c{
		min-width: 1200px;
	}
</style>

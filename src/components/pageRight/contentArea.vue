<template>
	<div :class="{'content-area':true,'content-area-a':ifA,'content-area-b':ifB,'content-area-c':ifC}">
		11111
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
		position: fixed;
		left: calc(50% + 170*0.5px);
		height: 100%;
		transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		border: 1px #000000 solid;

	}
	.content-area-a{
		
	}
	.content-area-b{
		width: 1040px;
	}
	.content-area-c{
		width: 1200px;
	}
</style>

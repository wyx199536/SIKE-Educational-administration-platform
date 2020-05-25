<template>
	<div id="feedback-info-area">
		111
	</div>
</template>

<script>
	export default{
		name: 'feedbackInfo',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
			}
		}
	}
</script>

<style scoped>
	#feedback-info-area{
		margin: 10px auto;
		width: 100%;
		height: 150px;
		background-color: #aab1bc;
	}
</style>

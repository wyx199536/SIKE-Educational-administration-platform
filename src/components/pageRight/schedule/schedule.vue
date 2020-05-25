<template>
	<div id="schedule" :class="{'content-area-a':ifA,'content-area-b':ifB,'content-area-c':ifC}">
		<div id="schedule-content">
			
		</div>
	</div>
</template>

<script>
	export default{
		name : 'schedule',
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
	#schedule{
		margin: 0 auto;
	}
	#schedule-content{
		border: 1px #000000 solid;
	}
	.content-area-a{
		
	}
	.content-area-b{
		height: calc(100% - 10px);
		min-width: 1040px;
		width: 1040px;
	}
	.content-area-c{
		height: calc(100% - 10px);
		min-width: 1200px;
		width: 1200px;
	}
</style>

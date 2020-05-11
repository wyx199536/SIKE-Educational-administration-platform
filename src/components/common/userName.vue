<template>
	<div>
		{{userName}}
	</div>
</template>

<script>
	export default{
		name: 'userName',
		data(){
			return{
				userName: '魏琰熹',
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
			}
		}
	}
</script>

<style scoped>
	
</style>

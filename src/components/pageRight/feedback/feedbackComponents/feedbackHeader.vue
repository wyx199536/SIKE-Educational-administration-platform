<template>
	<div id="feedback-header">
		<span id="feedback-all" class="header-element">全部反馈</span>
		<span id="feedback-select" class="header-element">筛选</span>
	</div>
</template>

<script>
	export default{
		name: 'feedbackHeader',
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
	#feedback-header{
		position: fixed;
		top: 70px;
		z-index: 999;
		height: 70px;
		width: inherit;
		background-color: #f1f1f1;
	}
	.header-element{
		display: inline-block;
		margin: 15px auto;
		text-align: center;
		font-size: 15px;
		height: 40px;
		line-height: 40px;
		background-color: #FFFFFF;
		border-radius: 5px;
	}
	#feedback-all{
		width: 100px;
		margin-right: 10px;
	}
	#feedback-select{
		width: 60px;
	}
</style>

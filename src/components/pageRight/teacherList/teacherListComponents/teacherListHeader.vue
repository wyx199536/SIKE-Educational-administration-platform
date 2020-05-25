<template>
	<div id="teacher-list-header">
		<span id="teacher-list-all" class="header-element">全部教师</span>
		<span id="teacher-list-select" class="header-element">筛选</span>
	</div>
</template>

<script>
	export default {
		name: 'teacherListHeader',
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
	#teacher-list-all{
		width: 100px;
		margin-right: 10px;
	}
	#teacher-list-select{
		width: 60px;
	}
	#teacher-list-header{
		position: fixed;
		top: 70px;
		z-index: 999;
		height: 70px;
		width: inherit;
		background-color: #f1f1f1;
	}
</style>

<template>
	<div id="schedule" :class="{'content-area-a':ifA,'content-area-b':ifB,'content-area-c':ifC}">
		<calendar id="calendar"></calendar>
	</div>
</template>

<script>
	import calendar from '../../common/calendar.vue'
	
	export default{
		name : 'schedule',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
			}
		},
		components:{
			calendar
		}
	}
</script>

<style scoped>
	#schedule{
		margin: 0 auto;
		border-top: 1px #f1f1f1 solid;
	}
	#schedule-content{
		border: 1px #000000 solid;
	}
	.content-area-a{
		
	}
	.content-area-b{
		height: 100%;
		min-width: 1040px;
		width: 1040px;
	}
	.content-area-c{
		height: 100%;
		min-width: 1200px;
		width: 1200px;
	}
	#calendar{
	}
</style>

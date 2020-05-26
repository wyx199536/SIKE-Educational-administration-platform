<template>
	<div :class="{'calendar-area-a':ifA,'calendar-area-b':ifB,'calendar-area-c':ifC,}">
		<div>
			<span>{{year}}年{{month}}月</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'calender',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
				date: this.$store.state.initialDate,
				year: this.$store.state.initialYear,
				month: this.$store.state.initialMonth,
			}
		},
		props:{
			lessons: {
				type: Array,
			}
		},
	}
</script>

<style scoped>
	.calendar-area-a{
		
	}
	.calendar-area-b{
		min-width: 1040px;
		width: 1040px;
		height: 100%;
		border-left: 1px #000000 solid;
		border-right: 1px #000000 solid;
	}
	.calendar-area-c{
		min-width: 1200px;
		width: 1200px;
		height: 100%;
	}
</style>

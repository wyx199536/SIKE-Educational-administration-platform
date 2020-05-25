<template>
	<div id="teacher-list" 
	:class="{'content-area-a':ifA,'content-area-b':ifB,'content-area-c':ifC}">
		<teacherListHeader></teacherListHeader>
		<div :class="{'teacher-list-info-area-a':ifA,'teacher-list-info-area-b':ifB,'teacher-list-info-area-c':ifC}">
			<teacherListInfo v-for="n in number" :key="n"></teacherListInfo>
		</div>
	</div>
</template>

<script>
	import teacherListHeader from './teacherListComponents/teacherListHeader.vue'
	import teacherListInfo from './teacherListComponents/teacherListInfo.vue'
	
	export default{
		name : 'teacherList',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
				number:[1,2,3,4,5,6,7,8,9,10,11]
			}
		},
		components:{
			teacherListHeader,
			teacherListInfo
		}
	}
</script>

<style scoped>
	#teacher-list{
		margin: 0 auto;
		overflow: visible;
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
	.teacher-list-info-area-b{
		height: calc(100% - 90px);
		position: absolute;
		width: 1040px;
		top: 70px;
	}
	.teacher-list-info-area-c{
		height: calc(100% - 90px);
		position: absolute;
		width: 1200px;
		top: 70px;
	}
</style>

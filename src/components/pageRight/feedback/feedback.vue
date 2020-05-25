<template>
	<div id="feedback" 
	:class="{'content-area-a':ifA,'content-area-b':ifB,'content-area-c':ifC}">
		<feedbackHeader></feedbackHeader>
		<div :class="{'feedback-info-area-a':ifA,'feedback-info-area-b':ifB,'feedback-info-area-c':ifC}">
			<feedbackInfo v-for="f in number" :key="f"></feedbackInfo>
		</div>
	</div>
</template>

<script>
	import feedbackHeader from './feedbackComponents/feedbackHeader.vue'
	import feedbackInfo from './feedbackComponents/feedbackInfo.vue'
	
	export default{
		name : 'feedback',
		data(){
			return {
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
				number:[1,2,3,4,5,6,7,8,9,10,11]
			}
		},
		components:{
			feedbackHeader,
			feedbackInfo
		}
		
	}
</script>

<style scoped>
	#feedback{
		margin: 0 auto;
		overflow: visible;
	}
	.content-area-a{
		
	}
	.content-area-b{
		height: 100%;
		min-width: 1040px;
		width: 1040px;
	}
	.content-area-c{
		height: 100% ;
		min-width: 1200px;
		width: 1200px;
	}
	.feedback-info-area-b{
		height: 100%;
		position: absolute;
		width: 1040px;
		top: 70px;
	}
	.feedback-info-area-c{
		height: 100%;
		position: absolute;
		width: 1200px;
		top: 70px;
	}
</style>

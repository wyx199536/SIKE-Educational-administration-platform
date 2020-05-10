<template>
	<div :class="{'userName':true,'userName-a':ifA,'userName-b':ifB,'userName-c':ifC}">
		{{userName}}
	</div>
</template>

<script>
	export default{
		name: 'userName',
		data(){
			return{
				userName: '魏琰熹'
			}
		}
	}
</script>

<style scoped>
	.userName{
		
	}
	.userName-a{
		
	}
	.userName-b{
		
	}
	.userName-c{
		
	}
</style>

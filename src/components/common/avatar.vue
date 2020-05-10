<template>
	<div :class="{'avatar':true,'avatar-a':ifA,'avatar-b':ifB,'avatar-c':ifC}">
		<img :src="acatarURL" alt="我的资料">
	</div>
</template>

<script>
	export default{
		name: 'avatar',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
				acatarURL: require('../../../public/img/img.jpg'),
			}
		}
	}
</script>

<style scoped>
	.avatar img{
		width: inherit;
		height: inherit;
		border-radius: 50%;
		object-fit: cover;
	}
	.avatar-a{
		height: 54px;
		width: 54px;
	}
	.avatar-b{
		height: 62px;
		width: 62px;
	}
	.avatar-c{
		height: 70px;
		width: 70px;
	}
</style>

<template>
	<nav-top>q</nav-top>
	<nav-midd></nav-midd>
</template>

<script>
	import NavTop from './navbar/NavTop.vue'
	import NavMidd from './navbar/NavMidd.vue'
	export default{
		name:'BaseNav',
		components:{
			NavTop,
			NavMidd
			
		}
	}
</script>

<style>
</style>

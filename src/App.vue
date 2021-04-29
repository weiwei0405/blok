<template>
  <router-view />
 
</template>
<script>
	import MainTab from './components/tabbar/MainTab.vue'
 
	export default {
		name: 'App',
		data(){
			return {
				isActive:true
			}
		},
		components: {
			MainTab
		}
	}
</script>
<style>
	@import url("~assets/public.css");
</style>

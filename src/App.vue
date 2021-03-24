<template>
  <router-view></router-view>
 <main-tab></main-tab>
</template>
<script>
	import MainTab from './components/tabbar/MainTab.vue'
	export default {
		name: 'App',
		components: {
			MainTab
		}
	}
</script>
<style>

</style>

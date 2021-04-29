<template>
  <MainNav>
    <template #nav-bottom>
      <category />
    </template>
  </MainNav>
</template>

<script>
	import {
		request
	} from '@/network/request.js'
	import MainNav from 'components/navbar/MainNav.vue'
	import Category from 'components/navbar/Category.vue'
	export default{
		name:"BookList",
		components: {
			MainNav,
			Category
		},
	}
</script>

<style>
 
</style>

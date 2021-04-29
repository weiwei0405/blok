<template>
  <MainNav>
    <template #nav-midd />
  </MainNav>
	
  <div class="main">
    <h2>{{ arr.book_name }}</h2>
  </div>
</template>

<script>
	import {
		request
	} from '@/network/request.js'
	import MainNav from 'components/navbar/MainNav.vue'

	export default{
		name:"Book",
		data(){
			return {
				id: this.$route.params.id,
				arr:[],
				list:[]
			}
		},
		created() {
			request({
				url:'wxapp/getBook',
				params: {
					id: this.id
				}
			}).then(res=>{
				console.log(res)
				this.arr=res.data.arr
				this.list=res.data.list
			})
		},
		components: {
			MainNav,

		},
	}
</script>

<style scoped="scoped">
 .main{width: var(--width); margin: 0 auto;}
</style>

<template>
	<h2>我是展示页面</h2>

	<p>{{id}}</p>

</template>

<script>
	import {
		request
	} from '../network/request.js'
	export default {
		name: "Show",
		data() {
			return {
				id: this.$route.params.id,
				data: []
			}
		},
		created() {
			request({
				url: '/wxapp/doctorshow',
				params: {
					uid: this.id
				}
			}).then(res => {
				console.log(res)

			})
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		}

	}
</script>

<style>
</style>

<template>
  <div class="nav-bottom">
    <div class="nav-bottom-content">
      <ul>
        <li
          v-for="item of list"
          :key="item.tid"
        >
          <a :href="/booklist/+item.tid">{{ item.typename }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
	import {
		request
	} from '@/network/request.js'
	export default {
		name: 'Category',
		data() {
			return {
				list: []
			}
		},
		created() {
			request({
				url: 'wxapp/getCategory',
			}).then(res => {
				this.list = res.data
			})
		}

	}
</script>

<style scoped="scoped">
	.nav-bottom-content{width: var(--width); margin: 0 auto; display: flex;flex: 1;}
		.nav-bottom{background-color: #2ab2b7; height: 44px; line-height: 44px;}
	ul {
		display: flex;
		width: 100%;
	}

	ul li {
		flex: 1;
		text-align: center;
	}

	ul li:hover {
		background-color: #333;
	}

	ul li a {
		color: #FFFFFF;
		text-decoration: none;
	}
</style>

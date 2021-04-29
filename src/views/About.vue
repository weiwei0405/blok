<template>
  <div class="about">
    <h1>This is an about page</h1>
    <swipers :per-view="2" />
  </div>
</template>
<script>
import Swipers from '../components/swiper/Swipers.vue'
	export default {
		name: 'About',
		components: {
      Swipers
		}
	}
</script>
<style>
	.left {
		float: left;
		width: 40%;
	}

	.right {
		float: left;
		width: 55%;
		margin-left: 5%;
		background-color: #2C3E50;
	}

	.right h2 {
		color: red;
	}
</style>

<template>
  <div class="tabbar">
    <slot />
  </div>
</template>

<script>
	export default {
		name: 'TabBar',
		components: {

		}
	}
</script>

<style>
	.tabbar {
		display: flex;
		height: 49px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		text-align: center;
		background-color: #f6f6f6;
		box-shadow: 0px -3px 2px rgba(0,0,0,0.09);
	}
</style>

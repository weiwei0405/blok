<template>
  <div
    class="tabbar-item"
    @click="itemClick()"
  >
    <div
      class="tabbar-item-icon-active"
      v-if="isActive"
    >
      <slot name="itemiconactive" />
    </div>
    <div
      class="tabbar-item-icon"
      v-else
    >
      <slot name="itemicon" />
    </div>
    <div
      class="tabbar-item-text"
      :style="acTiveClass"
    >
      <slot name="itemtext" />
    </div>
  </div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			acClass: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			acTiveClass() {
				return this.isActive ? {
					color: this.acClass
				} : '';
			}
		},
		methods: {
			itemClick() {
				return this.$router.replace(this.path)
			}
		}

	}
</script>

<style>
	.tabbar-item {
		flex: 1;
		font-size: 14px;
	}

	.tabbar-item img {
		width: 22px;
		height: 22px;
 
		margin-top: 3px;
	}
</style>

<template>
  <div id="nav">
    <nav-top />
				 
    <slot name="nav-midd">
      <nav-midd />
    </slot>
				
				
    <slot name="nav-bottom" />
  </div>
</template>

<script>
	import NavTop from './NavTop.vue'
	import NavMidd from './NavMidd.vue'
	export default {
		name:"MainNav",
		components:{
			NavTop,
			NavMidd
		}
	}
</script>

<style scoped="scoped">
 	.nav-midd,.nav-bottom-content{width: var(--width); margin: 0 auto; display: flex;flex: 1;}
	.nav-bottom{background-color: #2ab2b7; height: 44px; line-height: 44px;}
		
</style>

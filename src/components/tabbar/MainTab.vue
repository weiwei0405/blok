<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template #itemicon>
        <img src="../../assets/tabbar/f-homeicon.png">
      </template>
      <template #itemiconactive>
        <img src="../../assets/tabbar/f-homeiconhover.png">
      </template>
      <template #itemtext>
        首页
      </template>
    </tab-bar-item>
    <tab-bar-item path="/caty">
      <template #itemicon>
        <img src="../../assets/tabbar/f-proicon.png">
      </template>
      <template #itemiconactive>
        <img src="../../assets/tabbar/f-gwciconhover.png">
      </template>
      <template #itemtext>
        分类
      </template>
    </tab-bar-item>
    <tab-bar-item path="/about">
      <template #itemicon>
        <img src="../../assets/tabbar/f-usericon.png">
      </template>
      <template #itemiconactive>
        <img src="../../assets/tabbar/f-usericonhover.png">
      </template>
      <template #itemtext>
        关于
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
	import TabBar from './TabBar.vue'
	import TabBarItem from './TabBarItem.vue'
	export default {
		name: 'MainTab',
		components: {
      TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>

<template>
  <div class="nav-top">
    <div class="nav-top-center">
      <ul>
        <li><a href="/"><i class="fa fa-home" />网站首页</a></li>
        <li><a href=""><i class="fa fa-book" />我的书架</a></li>
        <li><a href="">点击榜</a></li>
        <li><a href="">推荐榜</a></li>
        <li><a href="">收藏榜</a></li>
        <li><a href=""><i class="fa fa-search" />站内搜索</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
	export default{
		name:"NavTop"
	}
</script>

<style scoped="scoped">
	.nav-top{background-color: var(--background-color);}
	.nav-top-center{width: var(--width); margin: 0 auto; line-height: 35px; }
	ul{display: flex;}
	ul li{display: inline-block;flex: 1 1; text-align: center; }
	ul li a{color: #FFF;font-size: 18px;text-decoration: none;}
	ul li a i{margin-right: 6px;}
	ul li:hover{background-color: #FFFFFF;}
	ul li:hover a{color: #2C3E50;}
	@media (max-width:750px) {
		.nav-top-center{ width: 100%;}
		ul li a{font-size: 12px;}
	}
</style>

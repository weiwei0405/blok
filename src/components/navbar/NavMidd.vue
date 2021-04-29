<template>
  <div class="nav-midd">
    <div class="logo">
      <img src="../../assets/logo.png">
    </div>
    <div class="title">
      精品小说网
    </div>
    <div class="search">
      <input
        type="text"
        class="form-control"
        value=""
        id="key"
      >
      <button class="btn btn-primary">
        全站搜索
      </button>
    </div>
  </div>
</template>

<script>
	export default{
		name:"NavMidd"
	}
</script>

<style scoped="scoped">
 	.nav-midd{width: var(--width); margin: 0 auto; display: flex;}
	.logo{display: inline-block; width: 100px; flex: 1;}
	.logo img{width: 100%;}
	.title{display: inline-block; flex: 4; margin-left: 15px; margin-top:10px; font-size: 2rem; font-weight: bold;}
	.search{display: flex; flex: 5; height: 38px; margin: 20px;}
	.form-control{flex: 2 1;}
	.btn{flex: 1;}
@media (max-width:750px) {
	.nav-midd{width: 100% !important; display: block !important;}
	.title{font-size: 1.5rem;}
	.search{}
	
}	
</style>

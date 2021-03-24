<template>
	<h2>我是首页</h2>

	<!-- Swiper -->
	<swiper :slides-per-view="1" :autoplay='false' :loop='true' :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
	 navigation :pagination="{ clickable: true }">
		<swiper-slide><img src="../assets/banner/1.jpg">

			<div class="slide-title">这是一个标题</div>
		</swiper-slide>
		<swiper-slide><img src="../assets/banner/2.jpg">
			<div class="slide-title">这是一个标题2</div>
		</swiper-slide>

	</swiper>

	<ul>
		<li><a href="#">asdffasdf</a></li>
		<li><a href="#">123123</a></li>
		<li><a href="#">43434</a></li>
	</ul>
	<div class="count" data-num1='2000' data-num2='100'>400</div>
	<div class="footer"></div>
</template>
<script>
	import {
		request
	} from '../network/request.js'
	import SwiperCore, {
		Navigation,
		Pagination,
		Autoplay
	} from 'swiper';
	import {
		Swiper,
		SwiperSlide
	} from 'swiper/vue';
	import 'swiper/swiper-bundle.min.css';
	import $ from 'jquery'
	// @ is an alias to /src
	SwiperCore.use([Navigation, Pagination, Autoplay]);
	export default {
		name: 'Home',
		data() {
			return {
				isshow: false
			}
		},
		mounted() {
			$('ul li').each(function(value,index,arr) {
			// console.log($(this).click())
				  $(this).click()
			})
			console.log($("ul li:first").click())
			$('ul li').bind("click",function(){
				$(this).addClass('aa')
			}) 
		},
		methods: {
			onSwiper(swiper) {
				//console.log(swiper);
			},
			onSlideChange(swiper) {
				var cruu = swiper.activeIndex
				var title = $(document).find('.slide-title')[cruu]
				$(document).find('.slide-title').removeClass('active')
				$(title).addClass('active')

			},
		},
		components: {
			Swiper,
			SwiperSlide,
		},
	}
</script>
<style>
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
	}

	img {
		width: 100%;
	}

	.swiper-container {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.swiper-slide img {
		width: 100%;
	}

	.slide-title {
		position: absolute;
		top: 10%;
		left: 20%;
	}

	.active {
		animation-name: dis;
		animation-duration: 0.5s;
	}

	.count {
		font-size: 40px;
		margin: 20px auto;
		text-align: center;
	}

	.footer {
		height: 80px;
		background-color: #2C3E50;
	}

	@keyframes dis {
		from {
			top: 50%;
			opacity: 0;
		}

		to {
			top: 10%;
			opacity: 1;
		}
	}
</style>

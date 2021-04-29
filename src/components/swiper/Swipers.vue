<template>
  <swiper
    :slides-per-view="PerView"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="../../assets/banner/1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/banner/2.jpg">
    </swiper-slide>
  </swiper>
</template>

<script>
	import {
		Swiper,
		SwiperSlide
	} from 'swiper/vue';
	import 'swiper/swiper-bundle.css';
	export default {
		name: "Swipers",
		props:{
			  PerView:{
					type:Number,
					default:1
				}
		},
		components: {
			Swiper,
			SwiperSlide
		},
		methods: {
			onSwiper(swiper) {
				//console.log(swiper);
			},
			onSlideChange() {
				console.log('slide change');
			},
		},

	}
</script>

<style>
</style>

<template>
		<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for="item in swiperInfo" :key="item.id">
					<router-link :to="item.link">
						<div class="swiper-img-container">
								<img class="swipe-img" :src="item.imgUrl" alt="去哪儿门票" style="opacity: 1;">
						</div>
					</router-link>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
		</swiper>

</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				swiperOption: {
					autoplay: 3000,
					direction: 'horizontal',
					autoHeight: true,
					pagination: '.swiper-pagination',
					observeParents: true
				}
			}
		},
		computed: {
			swiperInfo() {
				return this.$store.state.home.swiperInfo;
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>
<style scoped>
	.swiper-img-container {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	
	.swiper-img-container img {
		width: 100%;
	}
</style>
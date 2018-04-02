<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide>
			<div class="category-container">
				<div class="category-img-container" v-for="(item,index) in iconSwiperInfo" :key="item.id" v-if="index<8">
					<router-link :to= "item.link" >
						<img :src="item.imgUrl" />
						<div class="keywords">{{item.title}}</div>
					</router-link>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div>
				<div div class="category-container">
					<div class="category-img-container" v-for="(item,index) in iconSwiperInfo" :key="item.id" v-if="index>7 && index<16">
						<router-link :to= "item.link" >
							<img :src="item.imgUrl" />
							<div class="keywords">{{item.title}}</div>
						</router-link>
					</div>
				</div>
			</div>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'

	export default {
		data() {
				return {
					swiperOption: {
						direction: 'horizontal',
						autoHeight: true,
						pagination: '.swiper-pagination',
						observeParents: true,
					}
				}
		},
		computed: {
			iconSwiperInfo() {
				return this.$store.state.home.iconSwiperInfo;
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style scoped="scoped">
	.category-container {
		height: 3.7rem;
		width: 100%;
		padding-top: .1rem;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
	
	.category-img-container {
		width: 25%;
		height: 1.3rem;
	}
	
	.keywords {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: .2rem .1rem 0 .1rem;
		color: #000;
	}
	
	.category-img-container img {
		width: .66rem;
		height: .66rem;
	}
	
	.swiper-img {
		width: 100%;
	}
</style>
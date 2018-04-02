<template>
  	<div>
		<home-header />
		<home-swiper />
		<home-IconSwiper />
		<home-activity />
		<home-hotsale />
		<home-week />
	</div>
</template>
<script>
	import Header from "./components/Header";
	import Swiper from "./components/Swiper";
	import IconSwiper from "./components/IconSwiper";
	import Activity from "./components/Activity";
	import Hotsale from "./components/Hotsale";
	import WeekList from "./components/WeekList";

	export default {
		components: {
			"home-header": Header,
			"home-swiper": Swiper,
			"home-IconSwiper": IconSwiper,
			"home-activity": Activity,
			"home-hotsale": Hotsale,
			"home-week": WeekList
		},
		mounted() {
			if(this.$store.getters.shouldGetData) {
				this.$store.dispatch("getHomeData");
			}
		}
	}
</script>
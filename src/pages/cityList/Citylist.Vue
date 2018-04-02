<template>
	<div>
		<cityList-header @Change="handleChangeCity" />
		<cityList-domestic v-if="show" />
		<cityList-foreign v-else />
	</div>
  	
</template>

<script>
import Header from "./components/Header"
import Domestic from "./components/Domestic"
import Foreign from "./components/Foreign"

export default {
	data() {
		return{
			show:true
		}
	},

	components: {
		"cityList-header":Header,
		"cityList-domestic":Domestic,
		"cityList-foreign":Foreign
	},

	methods:{
		handleChangeCity:function( e ){
			this.show = e.show
		}
	},

	mounted() {
		if (this.$store.getters.shouldGetCityData) {
			this.$store.dispatch("getCityData");
		};
	}
}
</script>

<style>

</style>
<template>
	<div>
		<Domestic-Search @SearchCity="handleSearchCity" />
		<Domestic-List v-if="show" />
		<Domestic-showSearch :SearchCity="SearchCity" :show="show" v-else />
	</div>
  	
</template>

<script>
	import CitySearch from './CitySearch'
	import CityList from './DomesticCityList'
	import ShowSearchCity from './ShowSearchList'
	import { mapState } from "vuex"

	export default {

		data() {
			return {
				SearchCity:[],
				show:true
			}
		},

		components:{
			"Domestic-Search":CitySearch,
			"Domestic-List":CityList,
			"Domestic-showSearch":ShowSearchCity
		},

		computed: mapState({
            domesticCity(state) {
            	return state.city.domesticCity
            }
        }),

		methods:{
			handleSearchCity( e ) {
				if( e ){
					var reg = /^[\u4e00-\u9fa5]+$/;
					if( reg.test( e ) ){
						this.SearchCity = [];
						for( var i=0,l=this.domesticCity.length;i<l;i++ ){
							var cityList = this.domesticCity[i][1];
							for( var j=0,len=cityList.length;j<len;j++ ){
								var str = cityList[j].cityarea
								if( str.indexOf( e ) !=-1 ){
									this.SearchCity.push( str );
								}
							}
						}
					}else{
						this.SearchCity = [];
						for( var i=0,l=this.domesticCity.length;i<l;i++ ){
							var cityList = this.domesticCity[i][1];
							for( var j=0,len=cityList.length;j<len;j++ ){
								var obj = cityList[j]
								if( obj.itemName.indexOf( e ) !=-1 ){
									this.SearchCity.push( obj.cityarea );
								}
							}
						}
					}
					console.log(this.SearchCity);
					if( this.SearchCity ){
						this.show = false;
					}else{
						this.show = true;
					}
				}else{
					this.SearchCity=[];
					this.show = true;
				}
				
			}
		}
	}
</script>

<style>

</style>
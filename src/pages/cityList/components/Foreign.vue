<template>
	<div>
		<Foreign-Search @SearchCity="handleSearchCity" />
		<Foreign-List v-if="show" />
		<Foreign-showSearch :SearchCity="SearchCity" :show="show" v-else />
	</div>
  	
</template>

<script>
	import CitySearch from './CitySearch'
	import CityList from './ForeignCityList'
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
			"Foreign-Search":CitySearch,
			"Foreign-List":CityList,
			"Foreign-showSearch":ShowSearchCity
		},

		computed: mapState({
            foreignCity(state) {
            	return state.city.foreignCity
            }
        }),

        methods:{
			handleSearchCity:function( e ){
				if( e ){
					var reg = /^[\u4e00-\u9fa5]+$/;
					if( reg.test( e ) ){
						this.SearchCity = [];
						for( var i=0,l=this.foreignCity.length;i<l;i++ ){
							var cityList = this.foreignCity[i][1];
							for( var j=0,len=cityList.length;j<len;j++ ){
								var str = cityList[j].cityarea
								if( str.indexOf( e ) !=-1 ){
									this.SearchCity.push( str );
								}
							}
						}
					}else{
						this.SearchCity = [];
						for( var i=0,l=this.foreignCity.length;i<l;i++ ){
							var cityList = this.foreignCity[i][1];
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
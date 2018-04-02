import axios from 'axios'

export default {
	state:{
		hotCity:[],
		hotforeign:[],
		domesticCity:[],
		foreignCity:[],
		
	},

	actions:{
		getCityData( context ){
			axios.get( '/static/city_select.json' )
				.then( (response) =>{
					if( response.status === 200 ){
						context.commit( "changeCityData",response.data );
					}
				} )
				.catch( (err) =>{
					console.log(err);
				} )
		}
	},

	mutations:{
		changeCityData( state,data ){
			console.log(data);
			state.hotCity = data.hotcity;
			state.hotforeign = data.hotcityAbroad;
			state.domesticCity = data.china;
			state.foreignCity = data.abroad
		}
	},

	getters:{
		shouldGetCityData( state ){
			if( !state.hotCity.length &&
				!state.hotforeign.length &&
				!state.domesticCity.length &&
				!state.foreignCity.length 
				){
				return true
			}else{
				return false
			}
		}
	}
}
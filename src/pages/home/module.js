import axios from "axios"

export default {
	state:{
			swiperInfo: [],
			iconSwiperInfo: [],
			activityInfo: [],
			hotsaleInfo: [],
			weekInfo: [],
			refreshWeekInfo: []
	},
	actions:{
		getHomeData(context) {
			axios.get('/static/index.json')
				.then((response)=>{
					if(response.status === 200){
						const {data}  = response.data;
						context.commit( "changeData",data );
					}
				})
				.catch((err)=>{
					console.log(err);
				})
		}
	},
	mutations: {
		changeData(state,data ){
			state.swiperInfo = data.swiperInfo;
			state.iconSwiperInfo = data.iconSwiperInfo;
			state.activityInfo = data.activityInfo;
			state.hotsaleInfo = data.hotsaleInfo;
			state.weekInfo = data.weekInfo;
			state.refreshweekInfo = data.refreshweekInfo;
		},
		refreshInfo(state,data ){
			state.weekInfo.push(...state.refreshweekInfo);
		}
	},
	getters: {
		shouldGetData(state) {
			if( !state.swiperInfo.length && !state.iconSwiperInfo.length && !state.activityInfo.length && !state.hotsaleInfo.length && !state.weekInfo.length ){
				return true;
			}else{
				return false;
			}		
		}
	}
}
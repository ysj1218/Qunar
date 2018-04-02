import axios from 'axios'
export  default{
	state:{
		onedayInfo:[]
	},
	actions:{
		getOneDayInfo(context){
			axios.get('/static/oneDay.json')
			.then((response)=>{
				if(response.status===200){
					const{data}=response.data;
					context.commit("changeOneDayInfo",data.onedayInfo)
				}
				
			})
			
		}
	},
	mutations:{
		changeOneDayInfo(state,data) {
			state.onedayInfo=data
		},
		refreshInfo(state,data){
			state.onedayInfo.push(...state.onedayInfo);
		}
	},
	getters:{
		shouldGetOneDayInfo(state){
			if(!state.onedayInfo.length){
				return true
			}else{
				return false
			}
		}
	}
}
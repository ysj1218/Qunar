import axios from 'axios'
export default{
	state: {
		listInfo: []
	},
	actions: {
		getlistInfo(context) {
			axios.get('/static/list.json')
				.then((response) => {
					if(response.status === 200) {
						const {data} = response.data;
						context.commit("changelistInfo", data.listInfo)
					}
				})
		}
	},
	mutations: {
		changelistInfo(state, data) {
			state.listInfo = data;
		}
	},
	getters: {
		shouldGetListData(state){
			if(!state.listInfo.length){
				return true
			}
			return false
		}
	}
}
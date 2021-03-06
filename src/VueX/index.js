import Vue from 'vue'
import Vuex from 'vuex'

import home from '../pages/home/module.js'
import oneDay from '../pages/oneDay/module.js'
import list from '../pages/list/module.js'
import city from '../pages/cityList/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home:home,
		oneDay:oneDay,
		list: list,
		city:city
	}
})

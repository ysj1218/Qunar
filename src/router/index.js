import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import OneDay from '@/pages/oneDay/OneDay'
import SearchList from '@/pages/searchList/SearchList'
import List from '@/pages/list/List'
import City from '@/pages/cityList/CityList'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)//Vue使用Vue-router

export default new Router({
  routes: [
    {
    	path: '/',
      	name: 'Home',
      	component: Home
    },{
    	path:'/Oneday',
    	name:'OneDay',
    	component:OneDay
    },{
      	path: '/Searchlist',
      	name: 'List',
      	component: SearchList
  	},{
    	path:'/list',
    	name:'List',
    	component:List
  	},{
        path: '/city',
        name: 'City',
        component: City
    },{
    	path:'/detail',
    	name:'Detail',
    	component: Detail
    }
  ]
})

<template>
	<div>
		<detail-header/>
		<detail-pic :picInfo="picInfo.iconInfo"/>
		<detail-baseinfo/>
		<detail-propose/>
		<detail-ticket/>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import BaseinfoComponent from "./Baseinfo";
	import PicComponent from "./Pic";
	import ProposeComponent from "./Propose";
	import TicketComponent from "./Ticket"
	import axios from 'axios';
	export default {
		data(){
			return{
				picInfo:[]
			}
		},
		components: {
			"detail-header": HeaderComponent,
			"detail-pic":PicComponent,
			"detail-baseinfo": BaseinfoComponent,
			"detail-propose": ProposeComponent,
			"detail-ticket":TicketComponent
		},
		methods:{
			getHomeData(){
				axios.get('/static/detail.json')
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handeleGetDataErr.bind(this))
			},
			handleGetDataSucc(response){
				if(response.status===200){
					var {data}=response.data;
					this.picInfo=data;
				}
			},
			handeleGetDataErr(err){
				console.log(err)
			}
		},
		mounted(){
			this.getHomeData();
		}
	}
</script>

<style>

</style>
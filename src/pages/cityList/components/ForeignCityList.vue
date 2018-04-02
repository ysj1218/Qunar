<template>
	<div>
		<div class="location-containner">
			<h6 class="area-title">您的位置</h6>
			<div class="location">
				<div class="location-city CitySelect">北京</div>
			</div>
		</div>
		<div class="hotCity-containner">
			<h6 class="area-title">热门城市</h6>
			<div class="hotCity location">
				<div class="hotCity-city  location-city" v-for="(item,index) in hotforeign">{{item.city}}</div>
			</div>
		</div>
		<div class="foreignCityList-container">
			<div v-for="foreignCityItem in foreignCity" :ref="foreignCityItem[0]">
				<h6 class="area-title">{{foreignCityItem[0]}}</h6>
				<div class="Inland-cityList" v-for="item in foreignCityItem[1]">{{item.cityarea}}</div>
			</div>
		</div>
		<div class="indexes"  @touchstart="handleIndexesListTouch" ref="aside">
			<h5 class="indexesItem" v-for="foreignCityItem in foreignCity">{{foreignCityItem[0]}}</h5>
		</div>
	</div>
  	
</template>

<script>
	import { mapState } from "vuex"

	export default {

		computed: mapState({
            hotforeign(state) {
                return state.city.hotforeign
            },
            foreignCity(state) {
            	return state.city.foreignCity
            }
        }),

        methods: {
        	handleIndexesListTouch( e ) {
        		this.target = e.target;
        		const name = this.target.innerHTML
        		if( document.documentElement.scrollTop ){
        			document.documentElement.scrollTop = this.$refs[name][0].offsetTop-44
        		}else{
        			document.body.scrollTop = this.$refs[name][0].offsetTop-44;
        		}
        		document.addEventListener("touchmove",this.handleMoveTouch, false);
        		document.addEventListener("touchend",this.handleMoveEnd, false)
        	},

        	handleMoveTouch(event) {
        		event.preventDefault();      	 	
        		const height = event.touches[0].clientY;
        	 	for( let i=0,l=this.aside.length;i<l-1;i++ ){
        	 		let min = this.aside[i];
        	 		let max = this.aside[i+1];
        	 		if( height>min && height<max ) {
    	 				const name = this.foreignCity[i][0];
    					if( document.documentElement.scrollTop ){
		        			document.documentElement.scrollTop = this.$refs[name][0].offsetTop-44
		        		}else{
		        			document.body.scrollTop = this.$refs[name][0].offsetTop-44;
		        		}
    					break;
        	 		}
        	 	}
        	 },

        	handleMoveEnd() {
        		document.removeEventListener("touchmove", this.handleMoveTouch);
        		document.removeEventListener("touchend", this.handleMoveEnd);
        	}
        },

        mounted() {
        	setTimeout(() =>{
        		this.aside=[];
        		const asideTop = parseInt( window.getComputedStyle( this.$refs.aside ).top );
        		const asideHeight = parseInt( window.getComputedStyle( this.$refs.aside ).height );
        		const len = this.foreignCity.length
	        	for( var i=0;i<len;i++ ){
	        		this.aside.push( asideTop+parseInt(asideHeight/len)*i )
	        	}
        	},10)
        }
    }

</script>

<style scoped>
	.area-title{
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    background: #f5f5f5;
	}
	.location{
		padding: .04rem .5rem .26rem .2rem;
    	overflow: hidden;
	    background: #fff;
	}
	.location-city{
		box-sizing: border-box;
	    width: 30%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	  	margin-top: .2rem;
    	color: #212121;
	    line-height: .56rem;
	    text-align: center;
	    border: .02rem solid #c9cccd;
	    border-radius: .06rem;
	}
	.CitySelect{
		border-color: #00afc7;
		color: #00afc7;
	}
	.hotCity{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.area-title{
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    background: #f5f5f5;
	}
	.Inland-cityList{
		line-height: .76rem;
	    padding-left: .2rem;
	    font-size: .28rem;
	    color: #212121;
	    border-top: 1px solid #f5f5f5;
	    width: 100%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.indexes{
		position: fixed;
		top: 25%;
		right: 0;
	}
	.indexesItem{
		width: .32rem;
	    line-height: .32rem;
	    padding-left: .2rem;
	    color: #00afc7;
	    font-size: .24rem;
	    text-align: center;
	}
</style>
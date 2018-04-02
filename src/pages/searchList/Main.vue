<template>
	<div>
		<div v-show="historyItemArr.length" class="history">
			<div class="history-title">
				<span>搜索历史</span>
				<span class="history-del">
					<span class="iconfont icon-shanchu1"></span>
					<span @click="hendleDelClick">清除</span>
				</span>
			</div>
			<div class="history-content">
				<ul class="history-List">
					<li class="historyListItem" v-for="item in historyItemArr">{{item}}</li>
				</ul>
			</div>
		</div>
		<div class="hot">
			<div class="hot-title history-title">
				<span>热门搜索</span>
				<span class="hot-change history-del">
					<span class="iconfont icon-huanyipi"></span>
					<span @click="handlechangeClick">换一换</span>
				</span>
			</div>
			<div class="hot-content">
				<div class="hot-spot">
					<div class="hot-icon">
						<div>
							<span class="iconfont icon-iconset0210"></span>
						</div>
					</div>
					<div class="hot-spot-list" ref="spot">
						<ul @click="handleClick">
							<li class="spotlistItem" v-for="item in spotarr">{{item}}</li>
						</ul>
					</div>
				</div>
				<div class="hot-city">
					<div class="hot-icon">
						<div>
							<span class="iconfont icon-chengshi city-icon"></span>
						</div>
					</div>
					<div class="hot-city-list" ref="city">
						<ul>
							<li class="citylistItem" v-for="item in cityarr">{{item}}</li>
						</ul>
					</div>
				</div>
				<div class="list-search">
					<div class="list-searchNearBy">搜索身边的景点</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>	
	export default {
		data: function(){
			var spotarr = ["天坛公园","西湖雪山滑雪场","古北水镇","玉龙雪山","慈城古镇","华山","乌镇西山","都江堰","圆明园","泰山","成都欢乐谷","武汉欢乐谷","泸沽湖","常州环球动漫嬉戏谷","宋城千古情","故宫","张家界大峡谷","颐和园","鼓浪屿往返轮渡","天坛公园","西湖雪山滑雪场","古北水镇","玉龙雪山","慈城古镇","华山","乌镇西山","都江堰","圆明园","泰山","成都欢乐谷","武汉欢乐谷","泸沽湖","常州环球动漫嬉戏谷","宋城千古情","故宫","张家界大峡谷","颐和园","鼓浪屿往返轮渡"];
			var cityarr = [ "西安","南京","深圳","宁波","厦门","重庆","成都","天津" ];
			var show = true;
			var historyItemArr = [];
			var s = new Set();
			return {
				spotarr,
				cityarr,
				show,
				historyItemArr,
				s
			}
		},
		mounted:function(){
			var spot_top = parseInt( window.getComputedStyle(this.$refs.spot).top );
			var spot_height = window.getComputedStyle(this.$refs.spot).height;
			var spot_step = Math.floor( parseInt(spot_height)/86 );
			this.spot_stepArr = [];
			for( var i=0;i<spot_step;i++ ){
				spot_top=-86*i; 
				this.spot_stepArr.push( spot_top );
			}
			var city_top = parseInt( window.getComputedStyle(this.$refs.city).top );
			var city_height = window.getComputedStyle(this.$refs.city).height;
			var city_step = Math.floor( parseInt(city_height)/43 );
			this.city_stepArr = [];
			for( var i=0;i<city_step;i++ ){
				city_top=-43*i; 
				this.city_stepArr.push( city_top );
			}
		},
		methods:{
			handlechangeClick:function(){
				var spot_ind = Math.floor(Math.random() * this.spot_stepArr.length)
				this.$refs.spot.style.top = this.spot_stepArr[spot_ind]+"px"
				var city_ind = Math.floor(Math.random() * this.city_stepArr.length)
				this.$refs.city.style.top = this.city_stepArr[city_ind]+"px"
			},
			handleClick:function( e ){
				var historyItem = e.target;
				this.s.add( historyItem.innerHTML );
				this.historyItemArr=Array.from(this.s);
			},
			hendleDelClick:function(){
				this.historyItemArr=[];
			}
		}
	}
</script>

<style>
	.history-title{
	    height: .64rem;
	    line-height: .64rem;
	    padding: 0 .2rem;
	    background-color: #f0f5f6;
	    display:flex;
	    flex-direction:row;
	    justify-content:space-between;
	}
	.history-title span{
	    font-size: .26rem;
    	color: #888;
	}
	.history-del span{
		color:#00afc7;
	}
	.history-del span.iconfont{
		font-size: .26rem;
		color:#00afc7;
	}
	.history-content{
	    height: 1.24rem;
	    width: 100%;
	    overflow: auto;
	    background-color: #fff;
	    border-top: 1px solid #dce5e7;
	    border-bottom: 1px solid #dce5e7;
	}
	.history-List{
		overflow: auto;
		width: 50rem;
	}
	 .historyListItem{
    	max-width: 2.89rem;
	    height: .6rem;
	    font-size: .26rem;
	    color: #333;
	    background-color: #fff;
	    line-height: .6rem;
	    padding: 0 .15rem;
	    text-align: center;
	    float: left;
	    margin-left: .2rem;
	    border: 1px solid #c9cccd;
	    border-radius: 3px;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    margin-top: .3rem;
    }
	.hot-spot{
		position:relative;
	    border-top: 1px solid #dce5e7;
	    height:1.8rem;
	    background:#fff;
	    padding-left:.74rem;
	    overflow:hidden
	}
	.hot-icon{
		position:absolute;
	    width: .74rem;
	    height: 100%;
	    overflow: hidden;
	    line-height: 100%;
	    text-align: center;
	    left:0;
	    top:0;
	}
	.hot-icon div{
		position:absolute;
	    width: .72rem;
	    height: 70%;
	    top:15%;
	    border-right: 1px solid #dce5e7;
	}
	.hot-icon div span{
		display:block;
		margin-top:50%;
	}
	.hot-spot-list{
		position:absolute;
		top: 0;
	}
	.spotlistItem{
		float: left;
	    height: .36rem;
	    max-width: 2.89rem;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    padding-left: .3rem;
	    padding-right: .3rem;
	    border-right: 1px dashed #c9cccd;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-top: .25rem;
	    margin-bottom: .25rem;
	}
	.spotlistItem a{
		color: #333;
	}
	.hot-city{
		position:relative;
	    border-top: 1px solid #dce5e7;
	    height:.94rem;
	    background:#fff;
	    padding-left:.74rem;
	    overflow:hidden
	}
	.hot-city .city-icon{
		margin-top:25%;
	}
	.hot-city-list{
		position:absolute;
		top: 0;
	}
	.citylistItem{
	    float: left;
	    height: .36rem;
	    width: 24.5%;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-top: .25rem;
	    margin-bottom: .25rem;
	}
    .citylistItem a{
    	color:#333;
    }
    .list-search{
    	padding:.2rem;
    	background:#fff;
    	border-top: 1px solid #dce5e7;
    	border-bottom: 1px solid #dce5e7;
    	box-shadow:0 1px 1px black
    }
    .list-searchNearBy{
	    height: .72rem;
	    line-height: .72rem;
	    background-color: #fff;
	    text-align: center;
	    font-size: .26rem;
	    color: #333;
	    border: 1px solid #dde1e3;
	    border-radius: 2px;
    }
</style>
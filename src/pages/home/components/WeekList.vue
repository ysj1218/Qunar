<template>
	<div>
		<div class="week-list-container">
			<h2 class="week-list-title">周末去哪儿</h2>
			<div id="wrapper">
				<div id="scroller">
					<div v-if="ShowLoading_down" class="loose-loading">松开加载</div>
					<ul class="product-item" v-for="item in weekInfo" :key="item.id">
						<li>
							<div class="product-imgcontainer">
								<img :src="item.imgUrl" alt="北京温泉排行榜">
							</div>
							<div class="product-info">
								<p class="product-name" ref="weekLoaded">{{item.title}}</p>
								<p class="product-desc">{{item.tip}}</p>
							</div>
						</li>
					</ul>
					<div v-if="ShowLoading_up" class="loose-loading">松开加载</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	require("../../../utils/iscroll-probe.js");
	export default {
		data() {
			return {
				'ShowLoading_down': false,
				'ShowLoading_up': false,
				'flag': false,
				'loading': false
			}
		},
		computed: {
			weekInfo() {
				return this.$store.state.home.weekInfo;
			}
		},
		mounted() {
			this.myScroll = new IScroll('#wrapper', {
				mouseWheel: true,
				probeType: 2
			});
			this.myScroll.on("scroll",this.handlescroll.bind(this));
			this.myScroll.on("scrollEnd",this.handlescrollEnd.bind(this));
		},
		methods: {
			handlescroll: function(){
				if(!this.loading) {
					if(this.myScroll.y > 85) {
						this.flag = true;
						this.ShowLoading_down = true;
					}
					if(this.myScroll.y < -150) {
						this.flag = true;
						this.ShowLoading_up = true;
					}
				}else{
					this.ShowLoading_down = false;
					this.ShowLoading_up = false;
				}
			},
			handlescrollEnd: function(){
				if(this.flag) {
					this.loading = true;
					this.flag = false;
					this.$store.commit("refreshInfo");
				}
			}
		},
		updated() {
			setTimeout(() => {
				this.ShowLoading_down = false;
				this.ShowLoading_up = false;
				this.loading = false;
				this.myScroll.refresh();
			}, 1000);
		}
	}
</script>

<style scoped>
	.week-list-container {
		position: relative;
		width: 100%;
		height: auto;
		background: #f5f5f5;
	}
	
	#wrapper {
		position: absolute;
		top: .8rem;
		bottom: 0;
		height: 8rem;
		overflow: hidden;
		background: #f5f5f5;
	}
	
	.loose-loading {
		width: 100%;
		text-align: center;
		padding: .3rem 0;
	}
	
	.week-list-title {
		line-height: .8rem;
		padding-left: .3rem;
		font-size: .3rem;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.product-item {
		width: 100%;
		height: auto;
		margin-bottom: .2rem;
		background: #fff;
	}
	
	.product-imgcontainer {
		width: 100%;
		height: 2.47rem;
	}
	
	.product-imgcontainer img {
		width: 100%;
		height: 100%;
	}
	
	.product-info {
		height: 0.64rem;
		padding: .2rem .3rem .4rem;
		font-family: "微软雅黑";
	}
	
	.product-info p {
		padding-bottom: .15rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.product-name {
		font-size: .3rem;
		color: #000;
	}
	
	.product-desc {
		font-size: .24rem;
		color: #333;
	}
</style>
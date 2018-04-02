<template>
	<div>
		<div class="mp-border-bottom"></div>
		<div class="mp-ticket-group mp-border-bottom">
			<h3 class="mp-ticket-type">
			    <span class="mp-boeder-rad"><span class="iconfont icon-menpiao1"></span></span>
			         故宫成人票
			</h3>
		</div>
		<div class="mp-ticket-list">
			<div class="mp-ticket-type-info ">
				<h5 class="mp-ticket-type-name">【当日票】
							<span class="mp-ticket-come">凭身份证入园</span>
						</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info">
				<h5 class="mp-ticket-type-name">【当日票】
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info" v-if="none">
				<h5 class="mp-ticket-type-name mp--ticket-more" @touchstart="handleIsShow1" :class="{ ClickchangeStyle : isChange1 }">
					查看剩余产品
				</h5>
			</div>
			<div class="mp-ticket-type-info mp-ticket-none" v-show="isshow1">
				<h5 class="mp-ticket-type-name ">故宫+珍宝塔+钟表馆
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>60</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
		</div>
		<div class="mp-border-bottom"></div>
		<div class="mp-ticket-group mp-border-bottom">
			<h3 class="mp-ticket-type">
			    <span class="mp-boeder-rad"><span class="iconfont icon-menpiao1"></span></span>
			         故宫学生票
			</h3>
		</div>
		<div class="mp-ticket-list">
			<div class="mp-ticket-type-info ">
				<h5 class="mp-ticket-type-name">【当日票】
							<span class="mp-ticket-come">凭身份证入园</span>
						</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info">
				<h5 class="mp-ticket-type-name">【当日票】
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info" v-if="none">
				<h5 class="mp-ticket-type-name mp--ticket-more" @touchstart="handleIsShow1" :class="{ ClickchangeStyle : isChange1 }">
					查看剩余产品
				</h5>
			</div>
			<div class="mp-ticket-type-info mp-ticket-none" v-show="isshow1">
				<h5 class="mp-ticket-type-name ">故宫+珍宝塔+钟表馆
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>60</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
		</div>	
		<div class="mp-border-bottom"></div>
		<div class="mp-ticket-group mp-border-bottom">
			<h3 class="mp-ticket-type">
			    <span class="mp-boeder-rad"><span class="iconfont icon-menpiao1"></span></span>
			         故宫老人票
			</h3>
		</div>
		<div class="mp-ticket-list">
			<div class="mp-ticket-type-info ">
				<h5 class="mp-ticket-type-name">【当日票】
							<span class="mp-ticket-come">凭身份证入园</span>
						</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info">
				<h5 class="mp-ticket-type-name">【当日票】
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info" v-if="none">
				<h5 class="mp-ticket-type-name mp--ticket-more" @touchstart="handleIsShow1" :class="{ ClickchangeStyle : isChange1 }">
					查看剩余产品
				</h5>
			</div>
			<div class="mp-ticket-type-info mp-ticket-none" v-show="isshow1">
				<h5 class="mp-ticket-type-name ">故宫+珍宝塔+钟表馆
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>60</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
		</div>
		
		<div class="mp-border-bottom"></div>
		<div class="mp-ticket-group mp-border-bottom">
			<h3 class="mp-ticket-type">
			    <span class="mp-boeder-rad"><span class="iconfont icon-menpiao1"></span></span>
			         热销套餐组合
			</h3>
		</div>
		<div class="mp-ticket-list">
			<div class="mp-ticket-type-info mp-ticket-none">
				<h5 class="mp-ticket-type-name">
					上午场成人票+自助导览器
					<span class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info mp-ticket-none">
				<h5 class="mp-ticket-type-name">【大内御讲 9：00场】蓝琪儿格格带您穿越故宫
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>40</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
			<div class="mp-ticket-type-info" v-if="none">
				<h5 class="mp-ticket-type-name mp--ticket-more" @touchstart="handleIsShow1" :class="{ ClickchangeStyle : isChange1 }" >
					查看剩余产品
				</h5>
			</div>
			<div class="mp-ticket-type-info mp-ticket-none" v-show="isshow1">
				<h5 class="mp-ticket-type-name ">上午场学生票+自助导览器
					<span  class="mp-ticket-come">凭身份证入园</span>
				</h5>
				<div class="mp-ticket-type-price">
					<em class="mp-price-num"><i  class="price-fh">¥</i>60</em>
					<span class="mp-ticket-numword">起</span>
					<span class="iconfont icon-jiantouxia"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data: function() {
			var isshow1 = false;
			var isChange1 = false;
			return {
				isshow1,
				isChange1,
				none:true
			}
		},

		methods: {
			handleIsShow1: function() {
				this.isshow1 = !this.isshow1;
				this.isChange1 = !this.isChange1;
				this.none=false;
			}

		}
	}
</script>
<style scoped>
	.mp-border-bottom {
		height: .2rem;
		background: #F5F5F5;
	}
	
	.mp-ticket-group {
		height: .88rem;
		background: #fff;
		color: #333;
		font-size: .32rem;
		line-height: .88rem;
		padding-left: .2rem;
		border-bottom: 1px solid #CACACA;
	}
	
	.mp-boeder-rad {
		padding: .02rem;
		width: .2rem;
		height: .2rem;
		background: #00BCD4;
		border-radius: 50%;
		padding-top: .05;
	}
	
	.icon-menpiao1 {
		color: #FFFFFF;
		font-size: .1rem;
	}
	
	.mp-ticket-group {
		background: #fff;
	}
	
	.mp-ticket-type-info {
		height: .88rem;
		background: #fff;
		color: #333;
		font-size: .32rem;
		line-height: .88rem;
		padding-left: .2rem;
		border-bottom: 1px solid #CACACA;
		display: flex;
	}
	
	.mp--ticket-more {
		text-align: center;
	}
	
	.mp-ticket-type-name {
		width: 4.5rem;
	}
	
	.mp-ticket-none {
		height: 1.6rem;
	}
	
	.mp-ticket-type-info {
		display: flex;
		justify-content: space-between;
	}
	
	.mp-ticket-come {
		color: #999999;
		font-size: .2rem;
	}
	
	.price-fh {
		font-size: .1rem;
	}
	
	.mp-price-num {
		color: #FF9800;
	}
	
	.mp-ticket-numword {
		font-size: .2rem;
		color: #999999;
	}
	
	.icon-jiantouxia {
		color: #999999;
		padding-right: .2rem;
	}
</style>
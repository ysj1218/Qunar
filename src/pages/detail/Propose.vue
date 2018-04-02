<template>
	<div class="detail-propose-com">
		<div class="detail-space"></div>
		<span class="detail-yuan">
			<span class="iconfont icon-dianzan11"></span>
		</span>
		<div class="detail-propose">
			<h3 class="detail-propose-title">去哪儿推荐</h3>
		</div>
		<div class="detail-propose-come-com">
			<div class="detail-propose-am">
				<h6>【上午场】故宫成人票凭身份证入园游玩</h6>
				<ul class="detail-ticket-com">
					<span class="propose-ticket-desctage">
							<span class=" iconfont icon-shijianzhongbiao" ></span>可订明日
					</span>
					<span class="propose-ticket-desctage">
							<span class="iconfont icon-tiaojian"></span>条件退
					</span>
				</ul>
			</div>
			<div class="propose-ticket-price">
				<strong class="propose-sale">
					¥<em>40</em>
				</strong>
				<router-link to="/detail/order">
					<em class="propose-yd">预订</em>
				</router-link>
			</div>
		</div>
		
		
		<div class="detail-propose-come-com">
			<div class="detail-propose-am">
				<h6>【上午场】故宫成人票+故宫全景手绘地图</h6>
				<ul class="detail-ticket-com">
					<span class="propose-ticket-desctage">
							<span class=" iconfont icon-shijianzhongbiao" ></span>可订11月9日
					</span>
					<span class="propose-ticket-desctage">
							<span class="iconfont icon-gantanhao"></span>不可退
					</span>
				</ul>
			</div>
			<div class="propose-ticket-price">
				<strong class="propose-sale">
					¥<em>50</em>
				</strong>
				<em class="propose-yd">预订</em>
			</div>
		</div>
		<div class="detail-propose-come-com">
			<div class="detail-propose-am detail-propose-five">
				<h6>【五大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</h6>
				<ul class="detail-ticket-com">
					<span class="propose-ticket-desctage">
							<span class=" iconfont icon-shijianzhongbiao" ></span>可订11月9日
					</span>
					<span class="propose-ticket-desctage">
							<span class="iconfont icon-tiaojian"></span>无购物
					</span>
					<span class="propose-ticket-desctage">
							<span class="iconfont icon-tiaojian"></span>无自费
					</span>
				</ul>
			</div>
			<div class="propose-ticket-price">
				<strong class="propose-sale">
					¥<em>148起</em>
				</strong>
				<em class="propose-yd">查看</em>
			</div>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.detail-space {
		background: #F5F5F5;
		height: .2rem;
	}
	
	.detail-propose-com h3 {
		height: .88rem;
		background: #FFFFFF;
		color: #333;
		font-size: .32rem;
		line-height: .88rem;
		padding-left: .88rem;
	}
	
	.detail-propose-com .detail-yuan {
		margin-top: .2rem;
		padding: .1rem;
		width: .26rem;
		height: .26rem;
		background: #F1441A;
		border-radius: 50%;
		position: absolute;
		left: .2rem;
	}
	
	.icon-dianzan11 {
		color: #FFFFFF;
	}
	
	.detail-propose-come-com {
		display: flex;
		padding: .2rem .2rem .24rem .2rem;
		width: 100%;
		height: 1.2rem;
		border-top: 1px solid #CACACA;
	}
	
	.detail-propose-title {
		margin-right: .1rem;
		line-height: .52rem;
		font-size: .3rem;
	}
	
	.detail-ticket-com {
		padding-top: .1rem;
	}
	
	.propose-ticket-desctage {
		color: #616161;
		font-size: .24rem;
		line-height: .32rem;
		padding-left: .2rem;
	}
	
	.icon-shijianzhongbiao {
		padding-right: .1rem;
		font-size: .2rem;
	}
	
	.icon-tiaojian {
		padding-right: .1rem;
		font-size: .2rem;
	}
	
	.detail-propose-am {
		flex: 2;
		
		line-height: .42rem;
		border-right: 1px solid #CACACA;
	}
	
	.propose-ticket-price {
		display: flex;
		margin-right: .4rem;
		flex-direction: column;
		text-align: center;
	}
	
	.propose-sale {
		margin-left: .04rem;
		font-size: .32rem;
		line-height: .3rem;
		color: #ff9800;
		padding-bottom: .1rem;
	}
	
	.propose-yd {
		display: inline-block;
		height: .6rem;
		line-height: .6rem;
		padding: 0 .3rem;
		text-align: center;
		background: #ff9800;
		color: #fff;
		font-size: .28rem;
		line-height: .5rem;
		border-radius: .05rem;
		margin-left: .2rem;
	}
	.icon-gantanhao{
		color:#F67353;
		font-size: .2rem;
		padding-right: .1rem;
	}
</style>
<template>
	<div class="list">
		<div class="list-container">
			<div>
				<div>
					<ul>
						<li class="list-con" v-for="item in listInfo" :key="item.id">
							<div>
								<div class="list-top">
									<div class="list-img-con">
										<img :src="item.imgUrl" alt="故宫" class="list-img">
										<span class="list-today" v-if="item.listtoday===true">
									<span class="list-today-act" >可订今日</span>
										</span>
									</div>
									<div class="list-right">
										<h3 class="list-title">{{item.title}}</h3>
										<span class="list-hot" v-if="item.hot===true">热</span>
										<span class="list-price">{{item.pricecon}}<em>{{item.price}}</em>
									<span class="list-price-after">&nbsp;{{item.priceafter}}</span>
										</span>
										<div class="list-comments">
											<span class="comments-con">
									<span class="iconfont icon-star" ></span><span class="iconfont icon-star"></span><span class="iconfont icon-star"></span><span class="iconfont icon-star"></span><span class="iconfont icon-star"></span>
											</span>
											<span class="list-totalnum">{{item.totalnum}}</span>
										</div>
										<div class="list-location">
											<span>{{item.position}}</span>
										</div>
									</div>
								</div>
								<div class="list-ticket list-border-top">
									<h4 class="list-ticket-name">{{item.ticketday}}</h4>
									<span class="list-ticket-qunarprice">{{item.pricecon}}<em>{{item.ticketprice}}</em></span>
								</div>
								<div class="list-ticket">
									<h4 class="list-ticket-name">{{item.ticket}}</h4>
									<span class="list-ticket-qunarprice">{{item.pricecon}}<em>{{item.preferentialprice}}</em></span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="list-moreinfo">
			<div>
				<div class="list-pagination">
					<a class="page-prev">上一页</a>
					<span class="pagenum">1</span>
					<a class="page-next">下一页</a>
				</div>
				<div class="list-text">去哪儿门票</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			listInfo() {
				return this.$store.state.list.listInfo;
			}
		}
	}
</script>

<style scoped="scoped">
	.list {
		background: #f5f5f5
	}
	.list-container {
		color: #212121;
		font-size: .28rem;
	}
	.list-con {
		margin-bottom: .2rem;
		background: #FFFFFF;
	}
	
	.list-top {
		padding: .2rem;
	}
	
	.list-img-con {
		position: relative;
		float: left;
		width: 1.6rem;
		height: 1.6rem
	}
	
	.list-img {
		width: 1.6rem;
		height: 1.6rem
	}
	
	.list-today {
		position: absolute;
		left: -.04rem;
		top: -.04rem;
		height: .24rem;
		padding: .02rem;
		color: #fff;
		background: #fa8514;
		line-height: .24rem;
	}
	
	.list-today-act {
		display: block;
		font-size: .24rem;
	}
	
	.list-today-act::after {
		content: "";
		position: absolute;
		top: 0;
		right: -.1rem;
		width: 0;
		height: 0;
		border-top: .14rem solid #fa8514;
		border-bottom: .14rem solid #fa8514;
		border-right: .1rem solid transparent;
	}
	
	.list-right {
		position: relative;
		overflow: hidden;
		padding-left: .2rem;
		height: 1.6rem;
	}
	
	.list-title {
		float: left;
		overflow: hidden;
		max-width: 60%;
		color: #212121;
		font-size: .32rem;
		line-height: .36rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: normal;
	}
	
	.list-hot {
		overflow: hidden;
		display: inline-block;
		margin-left: .06rem;
		width: .3rem;
		height: .3rem;
		background: #ff1200;
		color: #fff;
		font-size: .24rem;
		line-height: .3rem;
		text-align: center;
	}
	
	.list-price {
		position: absolute;
		top: 0;
		right: 0;
		height: .36rem;
		color: #ff8300;
		font-size: .2rem;
	}
	
	.list-price em {
		font-size: .36rem
	}
	
	.list-price-after {
		color: #9e9e9e;
	}
	
	.list-comments {
		position: absolute;
		top: .3rem;
		margin-top: .38rem;
		width: 100%;
		height: .64rem;
		line-height: .64rem;
	}
	
	.icon-star {
		font-size: 0.24rem;
		color: #00BCD4;
	}
	
	.list-totalnum {
		position: relative;
		top: -.04rem;
		margin-left: .06rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	
	.list-location {
		position: absolute;
		bottom: 0;
		color: #9e9e9e;
		font-size: .24rem;
		white-space: nowrap;
	}
	
	.list-ticket {
		position: relative;
		height: .9rem;
		margin: 0 .2rem;
		border-top: 1px dashed #c9cccd;
	}
	
	.list-ticket-name {
		overflow: hidden;
		margin-right: 1.2rem;
		color: #212121;
		font-size: .28rem;
		line-height: .9rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.list-ticket-qunarprice {
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		width: 1.2rem;
		height: .9rem;
		color: #ff8300;
		font-size: .2rem;
		line-height: .9rem;
		text-align: right;
	}
	
	.list-moreinfo {
		color: #00afc7;
		line-height: .82rem;
		text-align: center;
		padding-bottom: .2rem;
	}
	
	.list-pagination {
		height: .7rem;
		line-height: .7rem;
	}
	
	.page-prev,
	.page-next {
		display: inline-block;
		width: 1.4rem;
		line-height: .6rem;
		border-radius: .06rem;
	}
	
	.page-prev {
		background: #bdbdbd;
		color: #fff;
		border: 0;
	}
	
	.page-next {
		border: .02rem solid #00afc7;
		background: #fff;
		color: #00afc7;
	}
	
	.pagenum {
		color: #212121;
		line-height: .6rem;
		padding: 0 15px;
	}
	
	.list-text {
		padding-top: .2rem;
		line-height: .3rem;
		font-size: .3rem;
	}
</style>
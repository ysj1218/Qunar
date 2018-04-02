<template>
	<div class="scenery-list">
		<div class="scenery-list-con">
			<h2 class="scenery-list-title">热销推荐</h2>
		</div>
			<div v-for="item in hotsaleInfo" :key="item.id">
				<ul>
					<li class="scenery-list-prod">
						<div class="scenery-list-img">
							<img :src="item.imgUrl">
						</div>
						<div class="scenery-list-info">
							<div class="scenery-list-site">{{item.title}}</div>
							<div class="scenery-list-desc">{{item.tip}}</div>
						</div>
						<div class="scenery-list-price">
							¥<em class="scenery-price-num">{{item.price}}</em>
							<span class="scenery-price-text">起</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="scenery-more">
				<router-link to="/list">
					<a href="#">查看所有产品</a>
				</router-link>
			</div>
	</div>
</template>

<script>
	export default{
		computed: {
			hotsaleInfo() {
				return this.$store.state.home.hotsaleInfo;
			}
		}
		
	}
</script>

<style scoped>
	.scenery-list-title {
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
		background:#f5f5f5;
	}
	.scenery-list-prod{
		position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	    border-bottom:1px solid #f5f5f5;
	}
	.scenery-list-img{
		position: absolute;
	    top: .24rem;
	    left: .24rem;
	    background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) no-repeat;
	    background-size: contain;
	    width: 1.4rem;
	    height: 1.4rem;
	}
	.scenery-list-img img{
		vertical-align: top;
	    width: 1.4rem;
	    height: 1.4rem;	
	}
	.scenery-list-info{
	    margin-left: 1.6rem;
	}
	.scenery-list-desc{
	    overflow: hidden;
	    margin-bottom: .1rem;
	    height: .4rem;
	    line-height: .4rem;
	    color: #9e9e9e;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.scenery-list-site{
		overflow: hidden;
	    margin-top: .04rem;
	    margin-bottom: .1rem;
	    color: #212121;
	    font-size: .3rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.scenery-list-price{
		margin-left: 1.6rem;
		color: #ff8300;
	}
	.scenery-list-price .scenery-price-num{
	    font-size: .36rem;
	    padding: 0 .04rem
	}
	.scenery-list-price .scenery-price-text{
	    color: #9e9e9e;
    	font-size: .24rem;
	}
	.scenery-more{
	    height: .88rem;
	    color: #00afc7;
	    line-height: .88rem;
	    text-align: center
	}
	.scenery-more a{
	    color: #00afc7;
    	text-decoration: none;
	}
</style>
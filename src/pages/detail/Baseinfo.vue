<template>
	<div class="baseinfo-container">
		<div class="baseinfo-address">
			<p class="baseinfo-address-txt">
				<span class="iconfont icon-dingwei"></span> 北京市东城区景山前街4号
				<span class="iconfont icon-gengduo"></span>
			</p>
			<p class="baseinfo-intor-txt">
				<span class="iconfont icon-tupian"></span> 查看景点开放及简介
				<span class="iconfont icon-gengduo"></span>
			</p>
		</div>
		<div class="commentsinfo-con">
			<span class="iconfont icon-fa-headphones"></span>
			<span class="iocnfont-com">
				<i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i>	
			</span>
			<span class="comments-good">5.0分</span>
			<span class="comments-totalnum">147314评论&nbsp;
					<span class="iconfont icon-gengduo"></span>
			</span>
		</div>
		<div class="announce-con">
			<div class="announce-inner">
				<span class="iconfont icon-laba2"></span> 因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.baseinfo-container {
		background: #f5f5f5;
	}
	
	
	.baseinfo-address {
		position: relative;
		border-top: 1px solid #CACACA;
		border-radius: .15rem .15rem 0rem 0rem;
		background: #FFFFFF;
		margin-bottom: .1rem;
		padding-left: .2rem;
	}
	
	.baseinfo-address-txt {
		width: 100%;
		height: 1.1rem;
		border-bottom: 1px solid #CACACA;
		line-height: 1.1rem;
	}
	
	.icon-gengduo {
		float: right;
		padding-right: .2rem;
	}
	
	.baseinfo-intor-txt {
		width: 100%;
		height: 1.1rem;
		line-height: 1.1rem;
	}
	/**************评价******************/
	
	.commentsinfo-con {
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		margin-bottom: .2rem;
		background: #FFFFFF;
	}
	.icon-fa-headphones{
		padding-left: .2rem;
	}
	.icon-fa-headphones {
		color: #00BCD4;
		width: .36rem;
		height: .36rem;
		padding-right: .2rem;
	}
	
	.iocnfont-com .icon-star {
		color: #00BCD4;
	}
	
	.comments-good {
		color: #00BCD4;
		padding-left: .1rem;
	}
	
	.comments-totalnum {
		color: #999999;
	}
	
	.icon-gengduo {
		color: #333333;
		padding-right: .2rem;
	}
	/**************活动******************/
	
	.announce-con {
		width: 100%;
		background-color: #fdeede;
		color: #f1441a;
		height: .88rem;
		line-height: .88rem;
		padding-left: .23rem;
	}
	
	.announce-inner {
		
		padding-right: .6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		position: relative;
		color: #f67353;
		margin-right: .1rem;
	}
	
	.icon-laba2 {
		color: #f67353;
		padding-right: .2rem;
	}
	
	.announce-con .icon-gengduo {
		position: absolute;
		top: 6.85rem;
		left: 5.5rem;
	}
</style>
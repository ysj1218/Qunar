<template>
  	<header class="header">
		<div class="header-left iconfont icon-return"></div>
		<div class="header-title">
			<input placeholder="请输入城市或景点" class="header-search"/>
		</div>
		<div class="header-right">
			<span>搜索</span>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style scoped>
	.header{
		height: .88rem;
		background: #00bcd4;
	}
	.header-left{
		float: left;
		width: .4rem;
		padding: 0 .1rem;
		line-height: .88rem;
		color: #fff;
		font-size: .5rem;
	}
	.header-title{
		position: absolute;
		left:.8rem;
		right: 1.28rem;
		top: .14rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		padding-left: .2rem;
		color: #999;
	}
	.header-search{
		border:none;
		width:100%;
	}
	.header-right{
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
</style>
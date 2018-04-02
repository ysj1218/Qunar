<template>
	<header class="header">
		<div class="header-left iconfont icon-return" @click="handlelistBackClick"></div>
		<div class="header-title">
			北京
		</div>
		<div class="header-right">
				<span class="header-city">搜索</span>
		</div>
	</header>
</template>

<script>
	export default{
		methods: {
			handlelistBackClick: function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	.header{
		height: .88rem;
		background: #00bcd4;
		overflow: hidden;
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
	.header-right{
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	.header-city{
		width:1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
	}
	
</style>
<template>
	<header class="header">
		<div class="header-left iconfont icon-return"></div>
		<router-link to="/Searchlist">
			<div class="header-title">
				输入城市/景点/游玩主题
			</div>
		</router-link>
		<div class="header-right">
			<router-link to="/city">
				<div class="header-city-wrapper">
					<span class="header-city">北京</span>
				</div>
			</router-link>
		</div>
	</header>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
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
	.header-city-wrapper{
		position: relative;
		padding-right: .3rem;
	}
	.header-city{
		width:1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
		color: #fff;
	}
	.header-city::after{
		content: "\0020";
		position: absolute;	
		top: .4rem;
		right: .14rem;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #fff;
		margin-left: .2rem;
	}
</style>
<template>
	<div class="detail-pic-con" >
		<div v-for="item in picInfo" :key="item.id">
			<img :src="item.imgUrl">
		</div>
		<div @click="handleReturnClick" class="detail-gengduo"><span class="iconfont icon-iconfont0104"></span>
			
		</div>
		<div class="detail-pic-title-AA">故宫(AAAAA景区)</div>
		<div class="detail--pic-logo">
			<span class="iconfont icon-tupian"></span>
			<em>10</em>
		</div>
	</div>
</template>

<script>
	export default {
		props:["picInfo"],

		methods: {
			handleReturnClick() {
				this.$router.go(-1);
			}
		}

	}
	
</script>

<style scoped>
	.detail-pic-con {
		position: relative;
	}
	.detail-gengduo{
		width: .7rem;
		height: .7rem;
		background:rgba(0,0,0,.5);
		border-radius: 50%;
		text-align: center;
		line-height: .7rem;
		position: absolute;
		top: .1rem;
		left: .2rem;
	}
	.icon-iconfont0104{
		width: .5rem;
		height: .5rem;
		color: #FFFFFF;
	}
	.detail-pic-con img {
		width: 100%;
	}
	
	.detail-pic-title-AA {
		position: absolute;
		z-index: 10;
		bottom: .2rem;
		left: .2rem;
		color: #FFFFFF;
		font-size: .32rem;
	}
	.detail--pic-logo {
		position: absolute;
		bottom: .2rem;
		right:.2rem;
		width: 1.2rem;
		height: .4rem;
		background: rgba(0, 0, 0, .5);
		border-radius: .2rem;
		font-size: .24rem;
		color: #fff;
		line-height: .4rem;
		text-align: center;
	}
</style>
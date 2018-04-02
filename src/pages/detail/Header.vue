<template>
	<header class="detail-header" ref="det">
		<div @click="handleReturnClick" class="detail-header-left iconfont icon-return"></div>
		<div class="detail-header-title">故宫</div>
	</header>

</template>

<script>
	export default {
		data: function() {
			return {
				scrollTop: 0
			}
		},
		methods: {
			handleScroll: function() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
					if(this.scrollTop >= 206) {

					} else {
						this.$refs.det.style.opacity = this.scrollTop / 206;
					}
			},

			handleReturnClick(){
				this.$router.go(-1);
			}
		},
		mounted: function() {
			window.addEventListener('scroll', this.handleScroll);
		}
	}
</script>

<style scoped>
	.detail-header {
		position: fixed;
		top: 0;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		z-index: 10;
		opacity: 0;
	}
	
	.detail-header-left {
		float: left;
		width: .4rem;
		padding: 0 .1rem;
		line-height: .88rem;
		color: #fff;
		font-size: .5rem;
	}
	
	.detail-header-title {
		position: absolute;
		left: .8rem;
		right: 1.28rem;
		top: .14rem;
		line-height: .6rem;
		color: #FFFFFF;
		text-align: center;
	}
</style>
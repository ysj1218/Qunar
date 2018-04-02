<template>
	<div class="location-container">
		<ul class="location">
			<li class="location-list locationleft ">
				<span class="iconfont icon-dingwei"></span>定位失败
			</li>
			<li class="location-list locationright">
				<span class="iconfont icon-diqiu"></span>5折泡温泉
			</li>
		</ul>
		<ul class="activity">
			<li class="activity-list activity-left"></li>
			<li class="activity-list acactivity-right"></li>
		</ul>

	</div>

</template>

<script>
	export default {
		computed: {
			activityInfo() {
				return this.$store.state.home.activityInfo;
			}
		}
	}
</script>

<style scoped="scoped">
	.location-container {
		background: #fff;
		width: 100%;
	}
	
	.icon-dingwei,
	.icon-diqiu {
		margin-right: .05rem;
		color: #616161;
		font-size: .32rem;
	}
	
	.location {
		overflow: hidden;
		display: flex;
		width: 100%;
		border-top: 1px solid #f5f5f5;
	}
	
	.location-list {
		box-sizing: border-box;
		overflow: hidden;
		width: 50%;
		height: .98rem;
		font-size: .28rem;
		color: #000;
		line-height: .98rem;
		text-align: center;
	}
	
	.locationleft {
		border-right: 1px solid #f5f5f5;
	}
	
	.activity {
		overflow: hidden;
		display: flex;
		width: 100%;
		margin-top: .2rem;
		background: #FFFFFF;
		border-top: 1px solid #f5f5f5;
	}
	
	.activity-list {
		box-sizing: border-box;
		position: relative;
		width: 50%;
		height: 1.4rem;
		line-height: 1.4rem;
		color: #212121;
		font-size: .28rem;
	}
	
	.activity-left {
		background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
		background-size: auto 100%;
		border-right: 1px solid #f5f5f5;
	}
	
	.acactivity-right {
		background: url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;
		background-size: auto 100%;
	}
</style>
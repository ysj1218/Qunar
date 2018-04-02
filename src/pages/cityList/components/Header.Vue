<template>
		<div class="header-container">
			<header class="header">
				<div class="header-left iconfont icon-return" @click="handleReturnClick"></div>
				<div class="header-title" @click="handelSelectClick">
					<div class="areaSwitch inland" :class="{select:IsSelect==='inland'}">国内</div>
					<div class="areaSwitch foreign" :class="{select:IsSelect==='foreign'}">国外</div>
				</div>
			</header>
		</div>
</template>

<script>

	export default {

		data() {
			return {
				IsSelect:'inland',
				ind:0,
				show:true
			}
		},

		methods:{
			
			handelSelectClick(e) {
				var elem = e.target;
				if( elem.innerHTML==="国内" ){
					this.IsSelect = 'inland';
					this.show = true;
				}else{
					this.IsSelect = 'foreign';
					this.show = false;
				}
				var show = this.show;
				document.documentElement.scrollTop = 0;
    			this.$emit('Change',{
    				show
    			})
			},

			handleReturnClick() {
				this.$router.go(-1);
			},

		}

	}

</script>

<style scoped>
	.header-container{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .88rem;
		background: #00bcd4
	}
	.header{
		height: .88rem;
		overflow: hidden;
		text-align: center;
		background: #00bcd4;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.header-left{
		width: .4rem;
		position: absolute;
		top: 0;
		left: 0;
		padding: 0 .1rem;
		line-height: .88rem;
		color: #fff;
		font-size: .5rem;
	}
	.header-title{
		height: .56rem;
		width: 4.04rem;
		color: #fff;
		display: flex;
		flex-direction: row;
	}
	.areaSwitch{
		width: 2rem;
		border: 1px solid #fff;
		line-height: .54rem;
	}
	.inland{
		border-top-left-radius: 0.1rem;
		border-bottom-left-radius: 0.1rem;
	}
	.foreign{
		border-top-right-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	.select{
		color: #00bcd4;
		background: #fff;
	}
</style>
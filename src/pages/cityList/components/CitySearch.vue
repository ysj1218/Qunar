<template>
	<div class="SearchArea">
		<input @click="handleSearchInput" @keyup="handleSearch" class="SearchInput" type="search" placeholder="输入城市名或拼音" ref="SearchInput" />
	</div>
  	
</template>

<script>

	export default {
		methods: {
			handleSearchInput:function(){
				this.$refs.SearchInput.style.textAlign='left';
				this.$refs.SearchInput.placeholder='';
			},

			handleSearch:function(e){
				var input = e.target;
				var content = input.value;
				this.$emit("SearchCity",content)
			}
		}
		
	}
</script>

<style>
	.SearchArea{
		margin-top: .88rem;
	    padding: .06rem .2rem .1rem .2rem;
	    background: #00bcd4;
	    font-size: .26rem;
	    color: #9e9e9e;
	}
	.SearchInput{
		display: block;
	    width: 100%;
	    line-height: .3rem;
	    padding: .16rem 0 .16rem .1rem;
	    background: #fff;
	    border: 0;
	    border-radius: .06rem;
	    text-align: center;
	}

</style>
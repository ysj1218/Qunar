<template>
	<div>
		<div class="SearchCityList" v-for="item in SearchCity">{{item}}</div>
	</div>
	
</template>

<script>

	export default {
		props:["SearchCity","show"],

		methods: {
		}
		
	}
</script>

<style>
	.SearchCityList{
		line-height: .76rem;
	    padding-left: .2rem;
	    font-size: .28rem;
	    color: #212121;
	    border-top: 1px solid #f5f5f5;
	    width: 100%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}

</style>
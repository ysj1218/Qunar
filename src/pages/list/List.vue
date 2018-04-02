<template>
	<div>
		<list-header />
		<list-nav />
		<list-con />
	</div>
</template>

<script>
	import ListHeaderComponent from "./ListHeader";
	import listNavComponent from "./listnav";
	import ListConComponent from "./ListCon";
	
	
	export default {
		components: {
			"list-header": ListHeaderComponent,
			"list-nav": listNavComponent,
			"list-con": ListConComponent
		},
		methods: {
		},
		mounted() {
			if(this.$store.getters.shouldGetListData){
				this.$store.dispatch("getlistInfo");
			}
			
		}
	}
</script>

<style scoped>
	.list-page{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f5f5f5;
	}
</style>
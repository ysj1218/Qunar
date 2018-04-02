<template>
	<div class="list-page">
		<list-header />
		<list-main />
	</div>
  	
</template>

<script>
import HeaderComponent from "./Header";
import MainComponent from "./Main";

export default {
	components: {
		"list-header": HeaderComponent,
		"list-main":MainComponent
	}
}
</script>

<style>
	.list-page{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f5f5f5;
	}
</style>
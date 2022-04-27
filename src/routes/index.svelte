<script>
	import { images } from '../store/store';
	console.log($images);
</script>

<svelte:head>
	<title>dbrandon</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">For now, a list of images of Europa.</h1>

{#each $images as image}
	<div class="flex justify-center w-full my-4">
		<img src={image.links[0].href} alt={image.data[0].description_508} />
	</div>
	<br />
{/each}

<style>
</style>

<script>
    import {images} from '../store/store';
    console.log($images);
</script>

<svelte:head>
    <title>dbrandon</title>
</svelte:head>

<h1 class='text-3xl font-bold underline'>For now, a list of images of Europa.</h1>

{#each $images as image}
    <div>
        <img src="{image.links[0].href}" alt="{image.data[0].description_508}" />
    </div>
    <br/>
{/each}

<style>

</style>

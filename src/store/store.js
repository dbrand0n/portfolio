import { writable } from 'svelte/store';

export const images = writable([]);
const fetchImages = async () => {
	const url = 'https://images-api.nasa.gov/search?q=Europa';
	const res = await fetch(url);
	const data = await res.json();
	images.set(data.collection.items);
};
fetchImages();

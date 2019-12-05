<template>
	<div class="fixed-center text-center">
		<p>
			<img :src="gifUrl" />
		</p>
		<p class="text-faded">Sorry, nothing here to see here...<strong>(404)</strong></p>
		<q-btn color="secondary" style="width:200px;" to="/" label="Go back" />
	</div>
</template>

<script>
export default {
	name: 'Error404',
	data() {
		return {
			gifUrl: ''
		};
	},
	created() {
		this.getGif();
	},
	methods: {
		getGif() {
			const BASE_URL = '//api.giphy.com/v1/gifs/random?';
			const API_KEY = 'eaa99PCLn9YA7skAuKyGY8PQFSsdhFAR';
			const LIMIT = 1;
			const SEARCH = 'vaporwave';
			const RATING = 'pg';

			this.$axios.get(BASE_URL + 'tag=' + SEARCH + '&limit=' + LIMIT + '&rating=' + RATING + '&api_key=' + API_KEY).then(response => {
				this.gifUrl = response.data.data.images.original.url;
			});
		}
	}
};
</script>

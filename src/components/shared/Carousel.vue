<template>
	<q-carousel
		animated
		v-model="slide"
		arrows
		navigation
		infinite
		autoplay
		transition-prev="slide-right"
		transition-next="slide-left"
		height="700px"
	>
		<q-carousel-slide
			:name="1"
			img-src="https://images.unsplash.com/photo-1533003505519-6a9b92ed4911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
		/>
		<q-carousel-slide
			:name="2"
			img-src="https://images.unsplash.com/photo-1553509874-b1b318d46673?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2930&q=80"
		/>
		<q-carousel-slide
			:name="3"
			img-src="https://images.unsplash.com/photo-1531278520962-fcf47a2faea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80"
		/>
		<q-carousel-slide
			:name="4"
			img-src="https://images.unsplash.com/photo-1546435107-91bf5fab68cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
		/>
	</q-carousel>
</template>

<script>
export default {
	data() {
		return {
			slide: 1
		};
	}
};
</script>

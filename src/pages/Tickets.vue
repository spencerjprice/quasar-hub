<template>
	<q-page>
		<div class="text-center">
			<h1>Support Tickets</h1>
		</div>
		<div class="flex flex-center dark-btn-container">
			<q-btn :color="buttonBackgroundColor" :text-color="buttonTextColor" size="xs" @click="toggleDarkMode">What's this?</q-btn>
		</div>
	</q-page>
</template>

<script>
export default {
	computed: {
		buttonBackgroundColor() {
			return !this.$q.dark.isActive ? 'black' : 'white';
		},
		buttonTextColor() {
			return this.$q.dark.isActive ? 'black' : '';
		}
	},
	methods: {
		toggleDarkMode() {
			this.$q.dark.set(!this.$q.dark.isActive);
		}
	}
};
</script>

<style lang="scss">
.dark-btn-container {
	margin-top: 100px;
}
</style>

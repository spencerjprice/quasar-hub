<template>
	<q-page class="index">
		<Carousel />

		<q-btn color="primary" style="display: block; margin: 300px auto;" @click.prevent="showNotification">Receive P1 Ticket</q-btn>

		<q-dialog v-model="seamless" seamless position="right">
			<q-card style="width: 350px;">
				<q-card-section>
					<div class="row justify-between">
						<p class="notification__title">{{ title }}</p>
						<q-btn flat round icon="close" v-close-popup />
					</div>
					<p class="notification__body">
						{{ body }}
					</p>
					<q-btn color="secondary" style="display: block; margin: 0 auto;" @click.prevent="$router.push('/tickets')">View Ticket</q-btn>
				</q-card-section>
			</q-card>
		</q-dialog>
	</q-page>
</template>

<script>
import Carousel from '../components/shared/Carousel';

export default {
	name: 'PageIndex',
	data() {
		return {
			title: 'New P1 Ticket',
			body: 'My computer is literally on fire, please help!',
			seamless: false
		};
	},
	components: {
		Carousel
	},
	methods: {
		showNotification() {
			// If electron, we can use native notifications
			if (process.env.MODE === 'electron') {
				// Create the notification and show it to the user
				const title = this.title;
				const options = {
					body: this.body
				};

				const notification = new Notification(title, options);

				// If the user clicks the notification, take them to the ticket page
				notification.onclick = () => {
					this.$router.push('/tickets');
				};
			} else {
				this.seamless = true;
			}
		}
	}
};
</script>

<style lang="scss">
.notification {
	&__title {
		margin: 0;
		padding: 0;
		font-weight: bold;
		line-height: 42px;
		font-size: 18px;
	}

	&__body {
		margin-top: 10px;
	}
}

.fixed-right {
	bottom: unset;
}
</style>

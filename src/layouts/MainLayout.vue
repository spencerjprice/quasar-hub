<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark'">
				<q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" aria-label="Menu" />

				<q-toolbar-title>
					{{ routeName }}
				</q-toolbar-title>

				<router-link to="/account">
					<q-avatar :size="'36px'">
						<q-img
							src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2744&q=80"
							:ratio="1"
						/>
					</q-avatar>
				</router-link>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" show-if-above bordered>
			<q-list>
				<router-link to="/" class="blenderbottle-logo">
					<BlenderBottleLogo :fill="$q.dark.isActive ? 'white' : 'black'" />
				</router-link>
				<q-separator />

				<!-- Loop through all of the links for the drawer -->
				<div v-for="link in drawerLinks" :key="link">
					<!-- Show a dropdown item if it is one -->
					<q-expansion-item v-if="link.sublinks" :content-inset-level="0.5">
						<template v-slot:header>
							<q-item-section avatar>
								<q-icon color="primary" :name="link.icon" />
							</q-item-section>

							<q-item-section>
								{{ link.name }}
							</q-item-section>
						</template>
						<!-- The sublinks -->
						<q-item
							v-for="(sublink, index) in link.sublinks"
							:key="index"
							:class="{ active: routePath === sublink.url }"
							clickable
							tag="a"
							:href="sublink.url"
						>
							<q-item-section avatar>
								<q-icon :name="sublink.icon" color="primary" />
							</q-item-section>
							<q-item-section>
								<q-item-label>{{ sublink.name }}</q-item-label>
							</q-item-section>
						</q-item>
					</q-expansion-item>
					<!-- Otherwise show a normal link -->
					<q-item v-else :class="{ active: routePath === link.url }" clickable tag="a" :href="link.url">
						<q-item-section avatar>
							<q-icon :name="link.icon" color="primary" />
						</q-item-section>
						<q-item-section>
							<q-item-label>{{ link.name }}</q-item-label>
						</q-item-section>
					</q-item>
				</div>
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import BlenderBottleLogo from '../components/shared/BlenderBottleLogo';

export default {
	name: 'MyLayout',
	data() {
		return {
			leftDrawerOpen: false,
			drawerLinks: [
				{ url: '/', icon: 'fas fa-home', name: 'Home', color: 'red' },
				{ url: '/tickets', icon: 'fas fa-ticket-alt', name: 'Tickets', color: 'pink' },
				{
					url: '/employee',
					icon: 'fas fa-user',
					name: 'Employee',
					color: 'purple',
					sublinks: [
						{ url: '/adp', icon: 'fas fa-clock', name: 'ADP' },
						{ url: '/above-and-beyond', icon: 'fas fa-thumbs-up', name: 'Above and Beyond' },
						{ url: '/bottle-log', icon: 'fas fa-shopping-cart', name: 'Bottle Log' },
						{ url: '/maps', icon: 'fas fa-map', name: 'Building Maps' },
						{ url: '/directory', icon: 'fas fa-shopping-cart', name: 'Bottle Log' }
					]
				},
				{ url: '/company-forms', icon: 'fas fa-pen-square', name: 'Company Forms', color: 'deep-purple' },
				{ url: '/customer-service', icon: 'fas fa-life-ring', name: 'Customer Service', color: 'indigo' },
				{ url: '/executive', icon: 'fas fa-compass', name: 'Exec', color: 'blue' },
				{ url: '/bt', icon: 'fab fa-pied-piper-hat', name: 'Business Technology', color: 'light-blue' },
				{ url: '/logistics', icon: 'fas fa-chart-bar', name: 'Logistics', color: 'cyan' }
			]
		};
	},
	components: {
		BlenderBottleLogo
	},
	computed: {
		routeName() {
			return this.$route.name;
		},
		routePath() {
			return this.$route.path;
		}
	}
};
</script>

<style lang="scss" scoped>
.blenderbottle-logo {
	height: 49px;
	display: flex;
	align-items: center;
	padding: 0 20px;
	svg {
		height: 50%;
		width: auto;
	}
}
.active {
	background: rgba($accent, 0.1) !important;
	color: $primary;
}
</style>

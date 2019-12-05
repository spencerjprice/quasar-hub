<template>
	<q-page :padding="true">
		<div class="themes">
			<h6>Themes</h6>
			<div class="cards q-gutter-md">
				<div class="card" v-for="theme in themes" :key="theme.name" @click="onSubmit(theme.colors)">
					<h7>{{ theme.name }}</h7>
					<div class="card__colors">
						<div v-for="(color, index) in theme.colors" :key="index" :style="{ background: color.hex }"></div>
					</div>
				</div>
			</div>
		</div>

		<form @submit.prevent.stop="onSubmit(colors)">
			<div class="q-gutter-md inputs">
				<q-input
					v-for="(color, index) in colors"
					:key="index"
					class="input"
					v-model="color.hex"
					standout
					stack-label
					dense="dense"
					:label="color.name"
				>
					<template v-slot:before>
						<div :class="'input__box' + ' bg-' + color.value" />
					</template>
				</q-input>
			</div>

			<q-btn label="Submit" type="submit" color="secondary" class="form__button" />
		</form>
	</q-page>
</template>

<script>
import { colors } from 'quasar';

export default {
	data() {
		return {
			colors: [
				{ name: 'Primary', value: 'primary', hex: colors.getBrand('primary') },
				{ name: 'Secondary', value: 'secondary', hex: colors.getBrand('secondary') },
				{ name: 'Accent', value: 'accent', hex: colors.getBrand('accent') },
				{ name: 'Dark', value: 'dark', hex: colors.getBrand('dark') },
				{ name: 'Positive', value: 'positive', hex: colors.getBrand('positive') },
				{ name: 'Negative', value: 'negative', hex: colors.getBrand('negative') },
				{ name: 'Info', value: 'info', hex: colors.getBrand('info') },
				{ name: 'Warning', value: 'warning', hex: colors.getBrand('warning') }
			],
			themes: [
				{
					name: 'Vaporwave',
					colors: [
						{ value: 'primary', hex: '#94d0ff' },
						{ value: 'secondary', hex: '#ff6ad5' },
						{ value: 'accent', hex: '#ad8cff' },
						{ value: 'dark', hex: '#1d1d1d' }
					]
				},
				{
					name: 'Honey Bee',
					colors: [
						{ value: 'primary', hex: '#E6CD30' },
						{ value: 'secondary', hex: '#F0D041' },
						{ value: 'accent', hex: '#DB6668' },
						{ value: 'dark', hex: '#1A1D21' }
					]
				},
				{
					name: 'Grimace',
					colors: [
						{ value: 'primary', hex: '#FC6D26' },
						{ value: 'secondary', hex: '#FCA326' },
						{ value: 'accent', hex: '#e24329' },
						{ value: 'dark', hex: '#643685' }
					]
				},
				{
					name: 'Murica',
					colors: [
						{ value: 'primary', hex: '#ff5c57' },
						{ value: 'secondary', hex: '#57c7ff' },
						{ value: 'accent', hex: '#ffffff' },
						{ value: 'dark', hex: '#282a36' }
					]
				}
			]
		};
	},
	methods: {
		onSubmit(newColors) {
			console.log('yee');
			newColors.forEach(color => colors.setBrand(color.value, color.hex));
		}
	}
};
</script>

<style lang="scss" scoped>
.themes {
	margin-bottom: 60px;
	.cards {
		display: flex;
		.card {
			cursor: pointer;
			transition: all 200ms ease;
			&__colors {
				min-width: 200px;
				border-radius: 10px;
				overflow: hidden;
				box-shadow: $shadow-1;
				div {
					height: 20px;
					background: red;
				}
			}
			&:hover {
				transform: translateY(-10px);
				.card__colors {
					box-shadow: $shadow-10;
				}
			}
		}
	}
}
.form {
	&__button {
		margin-top: 40px;
	}
}
.inputs {
	display: flex;
	flex-wrap: wrap;
	.input {
		width: 100%;
		max-width: 30%;
		&__box {
			width: 60px;
			height: 100%;
			border-radius: 5px;
		}
	}
}
</style>

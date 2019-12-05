<template>
	<q-page :padding="true">
		<form @submit.prevent.stop="onSubmit">
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
			]
		};
	},
	methods: {
		onSubmit() {
			this.colors.forEach(color => colors.setBrand(color.value, color.hex));
		}
	}
};
</script>

<style lang="scss" scoped>
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

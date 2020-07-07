window.globalComponents = window.globalComponents || {};

const FormComponent = {
	props: {
		title: String,
		sections: {
			type: Array,
			default() {
				return [];
			}
		},
		buttons: {
			type: Array,
			default() {
				return [];
			}
		},
		data: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	components: window.globalComponents,
	template: `
		<form>
			<h1 v-if="title">{{title}}</h1>
			<component v-for="section in sections" v-bind="section" v-bind:data="data"></component>
			<p>
				<template v-for="({ label = 'Submit', ...button }, index) in buttons">
					<button v-bind="button">{{label}}</button>{{ index < buttons.length -1 ? ' ': '' }}
				</template>
			</p>
		</form>
	`
};

/* exported FormComponent */

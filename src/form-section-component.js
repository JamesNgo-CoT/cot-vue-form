window.globalComponents = window.globalComponents || {};

const FormSectionComponent = {
	props: {
		title: String,
		fields: {
			type: Array,
			default: []
		},
		data: {
			type: Object,
			default: {}
		}
	},
	components: window.globalComponents,
	template: `
		<div>
			<h2 v-if="title">{{title}}</h2>
			<template v-for="{ bindto, ...field } in fields">
				<component v-if="bindto" v-bind="field" v-model="data[bindto]"></component>
				<component v-else v-bind="field"></component>
			</template>
		</div>
	`
};

/* exported FormSectionComponent */

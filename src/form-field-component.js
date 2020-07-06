const FormFieldComponent = {
	idCounter: 0,
	props: {
		id: {
			type: String,
			default() {
				return `form-field-${FormFieldComponent.idCounter++}`;
			}
		},
		label: {
			type: String,
			default: 'Unlabelled'
		},
		attributes: {
			type: Object,
			default() {
				return {};
			}
		},
		value: [Number, String]
	},
	methods: {
		onInput($event) {
			this.$emit('input', $event.target.value);
		}
	},
	components: {},
	template: `
		<p>
			<label v-bind:for="id">{{label}}</label>
			<input v-bind:id="id" v-bind:value="value" v-bind="attributes" v-on:input="onInput">
		</p>
	`
};

/* exported FormFieldComponent */

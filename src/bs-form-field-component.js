/* global FormFieldComponent */

const BsFormFieldComponent = Object.assign({}, FormFieldComponent, {
	components: {},
	template: `
		<div class="form-group">
			<label v-bind:for="id">{{label}}</label>
			<input class="form-control" v-bind="attributes" v-bind:id="id" v-bind:value="value" v-on:input="onInput">
		</div>
	`
});

/* exported BsFormFieldComponent */

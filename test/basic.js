/* global Vue */
/* global FormComponent FormSectionComponent FormFieldComponent */

Object.assign(FormSectionComponent.components, {
	'form-field-component': FormFieldComponent
});
Object.assign(FormComponent.components, {
	'form-section-component': FormSectionComponent
});

new Vue({
	data: {
		form: {
			id: 'form1',
			action: 'http://www.toronto.ca/',
			method: 'GET',
			title: 'FORM 1',
			sections: [
				{
					is: 'form-section-component',
					id: 'section1',
					title: 'SECTION 1',
					fields: [
						{
							is: 'form-field-component',
							label: 'LABEL 1',
							attributes: {
								class: {
									'className': true,
								},
								type: 'text'
							},
							bindto: 'field1'
						},
						{
							is: 'form-field-component',
							label: 'LABEL 2',
							bindto: 'field2'
						},
						{
							is: 'form-field-component',
							label: 'LABEL 3',
							bindto: 'field3'
						}
					]
				},
				{
					is: 'form-section-component',
					id: 'section2',
					title: 'SECTION 2',
					fields: [
						{
							is: 'form-field-component',
							label: 'LABEL 1',
							attributes: {
								class: {
									'className': true,
								},
								type: 'text'
							},
							bindto: 'field1',
							col: {
								class: {
									'col-sm-4': true
								}
							}
						},
						{
							is: 'form-field-component',
							label: 'LABEL 2',
							bindto: 'field2',
							col: {
								class: {
									'col-sm-4': true
								}
							},
							w100: {
								class: {
									'd-sm-none': true
								}
							}
						},
						{
							is: 'form-field-component',
							label: 'LABEL 3',
							bindto: 'field3',
							col: {
								class: {
									'col-sm-4': true
								}
							},
							w100: {
								class: {
									'd-sm-none': true
								}
							}
						}
					]
				}
			],
			buttons: [
				{
					label: 'Save',
					class: {
						'btn-lg': true
					}
				},
				{
					label: 'Other',
					class: {
						'btn-lg': true
					}
				}
			]
		},
		data: {
			field3: 123
		}
	},
	watch: {
		data: {
			handler(val) {
				console.log('DATA', val); // eslint-disable-line no-console
			},
			deep: true
		}
	},
	components: {
		'form-component': FormComponent
	},
	template: `
		<div class="row">
			<div class="col-sm-8">
				<form-component v-bind="form" v-bind:data="data"></form-component>
			</div>
			<div class="col">
				<pre>{{ JSON.stringify(data, null, '  ') }}</pre>
			</div>
		</div>
	`,
	el: '#app'
});

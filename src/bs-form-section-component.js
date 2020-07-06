/* global FormSectionComponent */

const BsFormSectionComponent = Object.assign({}, FormSectionComponent, {
	components: {},
	template: `
		<div class="card">
			<div class="card-header" v-if="title">
				{{title}}
			</div>
			<div class="card-body">
				<div class="row">
					<template v-for="{ w100, col, bindto, ...field } in fields">
						<div class="w-100 d-block" v-bind="w100"></div>
						<div class="col" v-bind="col">
							<component v-if="bindto" v-bind="field" v-model="data[bindto]"></component>
							<component v-else v-bind="field"></component>
						</div>
					</template>
				</div>
			</div>
		</div>
	`
});

/* exported BsFormSectionComponent */

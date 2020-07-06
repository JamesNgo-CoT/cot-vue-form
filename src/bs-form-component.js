/* global FormComponent */

const BsFormComponent = Object.assign({}, FormComponent, {
	components: {},
	template: `
		<form>
			<h1 v-if="title">{{title}}</h1>
			<component v-for="section in sections" v-bind="section" v-bind:data="data"></component>
			<p>
				<template v-for="({ label = 'Submit', ...button }, index) in buttons">
					<button
						class="btn"
						v-bind="button"
						v-bind:class="Object.assign({'btn-primary': index === 0, 'btn-secondary': index !== 0}, button.class)"
						v-bind:type="button.type !== undefined ? button.type : (index === 0 ? null : 'button')"
					>{{label}}</button>{{ index < buttons.length -1 ? ' ': '' }}
				</template>
			</p>
		</form>
	`
});

/* exported BsFormComponent */

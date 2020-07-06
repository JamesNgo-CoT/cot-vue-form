"use strict";

/* global FormComponent */
var BsFormComponent = Object.assign({}, FormComponent, {
  components: {},
  template: "\n\t\t<form>\n\t\t\t<h1 v-if=\"title\">{{title}}</h1>\n\t\t\t<component v-for=\"section in sections\" v-bind=\"section\" v-bind:data=\"data\"></component>\n\t\t\t<p>\n\t\t\t\t<template v-for=\"({ label = 'Submit', ...button }, index) in buttons\">\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass=\"btn\"\n\t\t\t\t\t\tv-bind=\"button\"\n\t\t\t\t\t\tv-bind:class=\"Object.assign({'btn-primary': index === 0, 'btn-secondary': index !== 0}, button.class)\"\n\t\t\t\t\t\tv-bind:type=\"button.type !== undefined ? button.type : (index === 0 ? null : 'button')\"\n\t\t\t\t\t>{{label}}</button>{{ index < buttons.length -1 ? ' ': '' }}\n\t\t\t\t</template>\n\t\t\t</p>\n\t\t</form>\n\t"
});
/* exported BsFormComponent */
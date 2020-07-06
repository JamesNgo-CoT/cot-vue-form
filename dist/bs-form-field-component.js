"use strict";

/* global FormFieldComponent */
var BsFormFieldComponent = Object.assign({}, FormFieldComponent, {
  components: {},
  template: "\n\t\t<div class=\"form-group\">\n\t\t\t<label v-bind:for=\"id\">{{label}}</label>\n\t\t\t<input class=\"form-control\" v-bind=\"attributes\" v-bind:id=\"id\" v-bind:value=\"value\" v-on:input=\"onInput\">\n\t\t</div>\n\t"
});
/* exported BsFormFieldComponent */
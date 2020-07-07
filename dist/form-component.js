"use strict";

window.globalComponents = window.globalComponents || {};
var FormComponent = {
  props: {
    title: String,
    sections: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    buttons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    data: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  components: window.globalComponents,
  template: "\n\t\t<form>\n\t\t\t<h1 v-if=\"title\">{{title}}</h1>\n\t\t\t<component v-for=\"section in sections\" v-bind=\"section\" v-bind:data=\"data\"></component>\n\t\t\t<p>\n\t\t\t\t<template v-for=\"({ label = 'Submit', ...button }, index) in buttons\">\n\t\t\t\t\t<button v-bind=\"button\">{{label}}</button>{{ index < buttons.length -1 ? ' ': '' }}\n\t\t\t\t</template>\n\t\t\t</p>\n\t\t</form>\n\t"
};
/* exported FormComponent */
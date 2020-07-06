"use strict";

var FormSectionComponent = {
  props: {
    title: String,
    fields: {
      type: Array,
      "default": []
    },
    data: {
      type: Object,
      "default": {}
    }
  },
  components: {},
  template: "\n\t\t<div>\n\t\t\t<h2 v-if=\"title\">{{title}}</h2>\n\t\t\t<template v-for=\"{ bindto, ...field } in fields\">\n\t\t\t\t<component v-if=\"bindto\" v-bind=\"field\" v-model=\"data[bindto]\"></component>\n\t\t\t\t<component v-else v-bind=\"field\"></component>\n\t\t\t</template>\n\t\t</div>\n\t"
};
/* exported FormSectionComponent */
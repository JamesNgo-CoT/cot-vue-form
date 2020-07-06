"use strict";

/* global FormSectionComponent */
var BsFormSectionComponent = Object.assign({}, FormSectionComponent, {
  components: {},
  template: "\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\" v-if=\"title\">\n\t\t\t\t{{title}}\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<template v-for=\"{ w100, col, bindto, ...field } in fields\">\n\t\t\t\t\t\t<div class=\"w-100 d-block\" v-bind=\"w100\"></div>\n\t\t\t\t\t\t<div class=\"col\" v-bind=\"col\">\n\t\t\t\t\t\t\t<component v-if=\"bindto\" v-bind=\"field\" v-model=\"data[bindto]\"></component>\n\t\t\t\t\t\t\t<component v-else v-bind=\"field\"></component>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
});
/* exported BsFormSectionComponent */
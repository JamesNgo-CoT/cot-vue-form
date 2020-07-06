"use strict";

var FormFieldComponent = {
  idCounter: 0,
  props: {
    id: {
      type: String,
      "default": function _default() {
        return "form-field-".concat(FormFieldComponent.idCounter++);
      }
    },
    label: {
      type: String,
      "default": 'Unlabelled'
    },
    attributes: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    value: [Number, String]
  },
  methods: {
    onInput: function onInput($event) {
      this.$emit('input', $event.target.value);
    }
  },
  components: {},
  template: "\n\t\t<p>\n\t\t\t<label v-bind:for=\"id\">{{label}}</label>\n\t\t\t<input v-bind:id=\"id\" v-bind:value=\"value\" v-bind=\"attributes\" v-on:input=\"onInput\">\n\t\t</p>\n\t"
};
/* exported FormFieldComponent */
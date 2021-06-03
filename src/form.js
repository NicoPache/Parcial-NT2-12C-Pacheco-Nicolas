import Vue from "vue";
import VueForm from "vue-form";

const options = {
  validators: {
    "no-espacios": function(value) {
      return !value.includes(" ");
    },
    "no-numero": function(value) {
      const regex = /\d/g;
      return !regex.test(value);
    },

    "solo-numeros": function(value) {
      const regex = /^[0-9]*$/;
      const onlyNumbers = regex.test(value);
      return onlyNumbers;
    },
    "dni-max-length": function(value) {
      const lengthMax = 8;
      const result = value.length == lengthMax;
      return result;
    },
  },
};

Vue.use(VueForm, options);

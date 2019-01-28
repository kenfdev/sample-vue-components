import Vue from 'vue';
import AppButton from './atoms/AppButton/index.vue';

const Components: { [key: string]: any } = {
  AppButton,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;

<template>
  <div id="app">
    <app-button>Button</app-button>
  </div>
</template>

<script>
import Vue from "vue";
import AppButton from "@/components/atoms/AppButton";

export default Vue.extend({
  components: {
    AppButton
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

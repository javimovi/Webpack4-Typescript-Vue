import Vue from "vue";
import App from "./App.vue";

Vue.component("App", App)

let v = new Vue({
    el: "#app",
    template: `<div class="javi"><app/></div>`
});
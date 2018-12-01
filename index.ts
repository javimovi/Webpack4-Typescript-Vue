import Vue from "vue";
import App from "./App.vue";

let v = new Vue({
    el: "#app",
    template: `<div class="javi"><app/></div>`,
    data: { name: "World" },
    components: { App }
});
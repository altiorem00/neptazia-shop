import Vue from "vue";
import firebase from "firebase/app";
import VueTheMask from "vue-the-mask";
import App from "./App.vue";
import router from "@/router";
import store from "./store";
import "firebase/analytics";

Vue.use(VueTheMask);
const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

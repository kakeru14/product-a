import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyChWMI4VyV3isqUNg31X7Eek_cDENWDLzw",
  authDomain: "ec-build-bf04a.firebaseapp.com",
  projectId: "ec-build-bf04a",
  storageBucket: "ec-build-bf04a.appspot.com",
  messagingSenderId: "622765150176",
  appId: "1:622765150176:web:ca051a53bf94ec1dc62585",
  measurementId: "G-RE1E5GNRM0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

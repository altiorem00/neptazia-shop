import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      cart: [],
      userKey: null,
    },
    products: [],
  },
  mutations: {
    updateCart(state, cart) {
      state.userData.cart = cart;
    },
    addItemToCart(state, item) {
      state.userData.cart.unshift(item);
    },
    updateProducts(state, response) {
      response.forEach((doc) => {
        state.products.push(doc.data());
      });
    },
    updateUserKey(state, userKey) {
      state.userData.userKey = userKey;
    },
    removeCartItem(state, item) {
      const pos = state.userData.cart.findIndex((el) => el.id === item.id);
      state.userData.cart.splice(pos, 1);
    },
  },
  getters: {
    cartTotalPrice(state) {
      return state.userData.cart.reduce((acc, item) => item.price + acc, 0);
    },
  },
  actions: {
    loadAppData(context) {
      const userAccessKey = localStorage.getItem("userKey");
      const db = firebase.firestore();

      // cart
      if (!userAccessKey) {
        db.collection("users")
          .add({
            cart: [],
          })
          .then((docRef) => {
            localStorage.setItem("userKey", docRef.id);
            context.commit("updateUserKey", docRef.id);
          });
      } else {
        db.collection("users")
          .doc(userAccessKey)
          .get()
          .then((docRef) => {
            context.commit("updateCart", docRef.data().cart);
            context.commit("updateUserKey", userAccessKey);
          });
      }

      // products
      db.collection("product")
        .orderBy("order", "asc")
        .get()
        .then((querySnapshot) => {
          context.commit("updateProducts", querySnapshot);
        });
    },
    addToCart(context, product) {
      context.commit("addItemToCart", product);
      firebase.firestore().collection("users").doc(context.state.userData.userKey).update({
        cart: context.state.userData.cart,
      });
    },
    deleteItemInCart(context, item) {
      context.commit("removeCartItem", item);
      firebase.firestore().collection("users").doc(context.state.userData.userKey).update({
        cart: context.state.userData.cart,
      });
    },
  },
});

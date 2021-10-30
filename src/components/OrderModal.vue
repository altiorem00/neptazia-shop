<template>
  <div class="order__inner" :class="{ show: modalShow }">
    <form class="order" @submit.prevent="sendForm">
      <h2 v-show="!success" class="order__title">Оформление заказа</h2>
      <h2 v-show="success" class="order__title">Заказ оформлен</h2>

      <div
        class="order__form-shell"
        :class="{ show: !success && modalShow }"
        style="width: 100%"
      >
        <div class="order__fields">
          <div class="order__fields-item">
            <input type="text" name="name" required v-model="orderInfo.name" />
            <span class="bar"></span>
            <label>Имя</label>
          </div>
          <div class="order__fields-item">
            <input type="text" required v-model="orderInfo.surname" />
            <span class="bar"></span>
            <label>Фамилия</label>
          </div>
          <div class="order__fields-item">
            <input type="text" required v-model="orderInfo.middleName" />
            <span class="bar"></span>
            <label>Отчество</label>
          </div>

          <div class="order__fields-item" v-if="!delivery">
            <input
              type="text"
              name="country"
              required
              v-model="orderInfo.country"
            />
            <span class="bar"></span>
            <label>Страна</label>
          </div>
          <div class="order__fields-item" v-if="!delivery">
            <input type="text" name="city" required v-model="orderInfo.city" />
            <span class="bar"></span>
            <label>Город</label>
          </div>
          <div class="order__fields-item" v-if="!delivery">
            <input
              type="text"
              name="address"
              required
              v-model="orderInfo.home"
            />
            <span class="bar"></span>
            <label>Улица и дом</label>
          </div>
          <div class="order__fields-item" v-if="!delivery">
            <the-mask
              mask="###-###"
              value=""
              type="tel"
              :masked="true"
              placeholder=""
              name="index"
              required
              v-model="orderInfo.index"
            ></the-mask>
            <span class="bar"></span>
            <label>Индекс</label>
          </div>
        </div>
        <button class="order__btn" type="submit">Готово</button>
      </div>
      <div class="order__success-shell" :class="{ show: success && modalShow }">
        <div class="order__success">
          Для получения и оплаты просто отправьте нам номер заказа в
          <a target="_blank" href="https://www.instagram.com/neptazia_wear/"
            >instagram</a
          >
          или <a target="_blank" href="https://vk.com/neptazia">VK</a>
        </div>
        <div class="order__number">
          номер заказа:
          <span>{{ orderNumber }}</span>
        </div>
      </div>
      <span class="close" @click="close"></span>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import { TheMask } from "vue-the-mask";

export default {
  name: "OrderModal",
  props: ["modalShow"],
  components: { TheMask },
  data() {
    return {
      success: false,
      orderNumber: null,
      orderInfo: {},
      countryData: null,
      delivery: false,
    };
  },
  methods: {
    close() {
      this.$emit("update:modalShow", false);
      this.success = false;
    },
    sendForm() {
      this.success = true;
      this.orderNumber += 1;
      let postText;
      postText = `${this.orderNumber}

      Кто: ${this.orderInfo.name} ${this.orderInfo.surname} ${this.orderInfo.middleName}

      Откуда: ${this.orderInfo.country} ${this.orderInfo.city} ${this.orderInfo.home}

      индекс: ${this.orderInfo.index}

      Корзина:\n`;

      this.$store.state.userData.cart.forEach((el) => {
        postText += ` ${el.name.toUpperCase()} размера: ${el.size.toUpperCase()}\n`;
      });

      async function postData(url = "", data = {}) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        await response.json();
      }

      postData("https://api.telegram.org/bot/sendMessage", {
        chat_id: 123,
        text: postText,
      });

      firebase.firestore().collection("orders").doc("orderCount").update({
        value: this.orderNumber,
      });
    },
  },
  created() {
    firebase
      .firestore()
      .collection("orders")
      .doc("orderCount")
      .get()
      .then((docRef) => {
        this.orderNumber = docRef.data().value;
      });
  },
};
</script>

<style lang="scss">
.order {
  &__fields {
    margin: -20px;
    display: flex;
    flex-wrap: wrap;
    padding: 45px 0px;

    & > * {
      margin: 20px;
      width: calc(50% - 40px);
    }
  }

  &__inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    display: flex;
    justify-content: center;
    overscroll-behavior: contain;
    z-index: 9999;

    &::-webkit-scrollbar {
      width: 0px;
    }

    visibility: hidden;
    transition: visibility 0s ease-in-out 0.5s;
  }
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  width: 80vw;
  position: relative;
  padding: 30px 56px;
  background: rgba(255, 255, 255, 0);
  box-shadow: none;
  backdrop-filter: blur(0px);
  border-radius: 20px;
  transition: all 0.2s ease-in-out 0.2s;

  &__title,
  &__fields,
  &__btn,
  & .close {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    visibility: hidden;
  }

  &__inner.show {
    visibility: visible;
    transition: visibility 0s ease-in-out 0s;

    .order {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.14);
      backdrop-filter: blur(7.5px);
      transition: all 0.2s ease-in-out;

      &__title,
      &__fields,
      &__btn,
      & .close {
        opacity: 1;
        transition: all 0.2s ease-in-out 0.2s;
        visibility: visible;
      }
    }
  }

  &__form-shell {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    z-index: 20;
    visibility: hidden;

    & > * {
      opacity: 0 !important;
      visibility: hidden !important;
    }

    &.show {
      opacity: 1;
      visibility: visible;

      & > * {
        opacity: 1 !important;
        visibility: visible !important;
      }
    }
  }

  &__number {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: auto;
    margin-bottom: auto;

    span {
      margin-top: 26px;
      font-weight: bold;
      font-size: 56px;
    }
  }

  &__success {
    opacity: 0.8;
    font-size: 18px;
    line-height: 22px;
    &-shell {
      opacity: 0;
      transition: all 0.2s ease-in-out 0.2s;
      position: absolute;
      padding: 46px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-shell.show {
      opacity: 1;
    }

    a {
      opacity: 1;
      border-bottom: 1px solid #0d0d0d;
      transition: all 0.2s ease-in-out;

      &:hover {
        border-color: transparent;
      }
    }
  }

  .close {
    content: "";
    position: absolute;
    display: block;
    top: 26px;
    right: 24px;
    width: 19px;
    height: 19px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z'/%3E%3C/svg%3E%0A");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  &__btn {
    display: block;
    padding: 16px 32px;
    background: #0d0d0d;
    border: none;
    border-radius: 4px;
    color: #fefffe;
    outline: none;
    min-width: 250px;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 auto;

    &:hover {
      filter: brightness(1.1);
      background: #212121;
    }
  }

  &__title {
    margin: 26px auto;
    font-size: 26px;
    margin-top: 0px;
  }

  &__fields {
    &-item {
      position: relative;
      margin-bottom: 35px;
    }
  }

  input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid #757575;
    border-radius: 0px;
  }

  input:focus {
    outline: none;
  }

  label {
    color: #0d0d0d;

    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  /* active state */
  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #0d0d0d;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    will-change: width;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #0d0d0d;
    transition: 0.2s ease-in-out all;
    -moz-transition: 0.2s ease-in-out all;
    -webkit-transition: 0.2s ease-in-out all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  /* active state */
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  @media (max-width: 735px) {
    margin-top: 0px;
    width: 100vw;
    transition: all 0.2s ease-in-out 0.2s;
    padding: 0px;
    padding-top: 55px;
    &__fields {
      flex-direction: column;
      width: 100%;
      padding: 0px;

      & > * {
        width: 100%;
      }
    }
    &__form-shell {
      padding: 0px 25px;
    }
    &__success {
      text-align: center;
      max-width: 309px;

      &-shell {
        padding-right: 0px;
        padding-left: 0px;
      }
    }
    &__inner.show {
      visibility: visible;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(7.5px);
      transition: all 0.2s ease-in-out;

      .order {
        background: transparent;
        box-shadow: none;
        backdrop-filter: blur(0px);
        transition: all 0.2s ease-in-out;

        &__title,
        &__fields,
        &__btn,
        & .close {
          opacity: 1;
          transition: all 0.2s ease-in-out 0.2s;
          visibility: visible;
        }
      }
    }
    &__inner {
      background: rgba(255, 255, 255, 0);
      box-shadow: none;
      backdrop-filter: blur(0px);
      transition: all 0.2s ease-in-out 0.2s;
      visibility: hidden;
      padding-bottom: 150px;
    }
  }
}
</style>

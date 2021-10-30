<template>
  <div class="cart-item">
    <div class="cart-item__img">
      <img :src="item.img" :alt="item.name" />
    </div>
    <div class="cart-item__info">
      <div class="cart-item__remove" @click="deleteItemInCart(item)">
        Убрать из корзины
      </div>
      <div class="cart-item__info-name">
        {{ item.name }}
      </div>
      <div class="cart-item__info-detail">
        <p>
          Цена: <span>{{ item.price | numberFormat }}</span
          >₽
        </p>
        <p>
          Размер: <span style="text-transform: uppercase">{{ item.size }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import numberFormat from "@/helpers/numberFormat";

export default {
  name: "CartItem",
  props: ["item", "index"],
  filters: {
    numberFormat,
  },
  methods: {
    ...mapActions(["deleteItemInCart"]),
  },
};
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  margin-top: 56px;
  padding: 0px 10px;
  max-width: 860px;
  border-right: 1px solid #0d0d0d;
  padding-right: 20px;

  & + & {
    margin-top: 100px;
  }

  &__remove {
    position: absolute;
    cursor: pointer;
    opacity: 0.7;
    padding-right: 20px;
    font-size: 14px;
    top: 0px;
    right: 0px;
    height: 18px;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 12px;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z'/%3E%3C/svg%3E%0A");
  }

  &__info {
    width: 70%;
    position: relative;

    &-name {
      text-transform: uppercase;
      font-size: 26px;
      margin-bottom: 6px;
      color: #0078d6;
    }

    &-detail {
      p {
        margin: 6px 0px;
      }

      span {
        font-size: 19px;
        margin-right: 2px;
      }
    }
  }

  &__img {
    width: 35%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 735px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 291px;
    margin-top: 32px;
    & + & {
      margin-top: 32px;
    }
    &__img {
      width: 100%;
    }
    &__remove {
      color: transparent;
    }
    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: initial;

      &-name {
        text-align: center;
      }

      &-detail {
        text-align: center;
      }
    }
  }
}
</style>

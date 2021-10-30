<template>
  <main class="cart">
    <div class="container">
      <router-link class="cart__back-link" :to="{ name: 'main' }"
        >Назад к выбору</router-link
      >
      <div v-if="cart.length > 0" class="cart__shell">
        <div class="cart__list">
          <cart-item
            v-for="(item, index) in cart"
            :key="index"
            :item="item"
            :index="index"
          ></cart-item>
        </div>
        <div class="cart__order">
          <div class="cart__order-sum">
            Итого: <span>{{ this.cartTotalPrice | numberFormat }}</span>
            <div class="currency" style="margin-bottom: 3px">руб.</div>
          </div>
          <button class="cart__order-btn" @click="modalState = true">
            Оформить заказ
          </button>
        </div>
        <OrderModal :modal-show.sync="modalState" />
      </div>
      <div v-else class="cart__null"><span>:(</span> Корзина пуста</div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import OrderModal from "@/components/OrderModal.vue";
import CartItem from "@/components/CartItem.vue";
import numberFormat from "@/helpers/numberFormat";

export default {
  name: "Cart",
  components: {
    CartItem,
    OrderModal,
  },
  filters: {
    numberFormat,
  },
  data() {
    return {
      modalState: false,
    };
  },
  computed: {
    ...mapGetters(["cartTotalPrice"]),
    cart() {
      return this.$store.state.userData.cart;
    },
  },
};
</script>

<style scoped lang="scss">
.cart {
  &__order {
    padding: 48px;

    &-sum {
      display: flex;
      font-size: 26px;
      align-items: flex-end;
      margin-bottom: 16px;

      span {
        margin-right: 4px;
        margin-left: 10px;
        opacity: 0.8;

        & + div {
          font-size: 20px;
        }
      }
    }

    &-btn {
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

      &:hover {
        filter: brightness(1.1);
        background: #212121;
      }
    }
  }

  &__null {
    margin-top: 46px;
    font-size: 26px;
    display: flex;
    align-items: center;

    span {
      background: #000;
      padding: 5px;
      padding-top: 2px;
      font-size: 20px;
      text-align: center;
      color: #fff;
      transform: rotate(90deg);
      display: flex;
      margin-right: 14px;
      align-items: center;
      justify-content: center;
    }
  }

  &__back-link {
    font-size: 17px;
    border-bottom: 2px solid #0d0d0d;
    padding-bottom: 3px;
  }

  &__shell {
    display: flex;
  }

  &__list {
    width: 65%;
  }

  &__order {
    width: 35%;
    position: sticky;
    top: 0;
  }

  @media (max-width: 1200px) {
    &__shell {
      flex-direction: column;
    }
    &__list {
      width: 100%;
    }
    &-item {
      border-right: none;
    }
    &__item-img {
      width: 45%;
    }
    &__order {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      padding: 20px;
    }
  }
  @media (max-width: 735px) {
    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>

<template>
  <div class="product__item">
    <div class="product__img">
      <img :src="product.img" alt="" />
    </div>
    <div class="product__name">
      {{ product.name }}
      <span>{{ product.sub }}</span>
    </div>
    <div class="product__price">
      {{ product.price | numberFormat }} ₽
      <span>{{ product.oldPrice | numberFormat }}</span>
    </div>
    <div class="product__sizes-shell">
      <select v-model="currentSize" class="product__sizes">
        <option
          v-for="(item, index) in product.sizes"
          :value="index"
          :key="index"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <div class="product__desc">
      <p v-for="(item, index) in product.desc" :key="index + item">
        {{ item }}
      </p>
    </div>
    <button
      class="product__button"
      :class="{ lock: lockState }"
      @click.prevent="addProduct(product)"
    >
      <span v-show="!lockState">Добавить в корзину</span>
      <span v-show="lockState">Добавлено</span>
    </button>
    <router-link
      :to="{ name: 'cart' }"
      v-show="lockState"
      class="product__link"
    >
      Перейти в корзину
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import numberFormat from "@/helpers/numberFormat";

export default {
  props: ["product", "index"],
  name: "ProductItem",
  filters: {
    numberFormat,
  },
  data() {
    return {
      currentSize: 0,
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    addProduct(item) {
      this.addToCart({
        ...item,
        id: this.index,
        size: this.product.sizes[this.currentSize],
      });
    },
  },
  computed: {
    lockState() {
      const availabilityInCart = this.$store.state.userData.cart.findIndex(
        (el) => el.id === this.index
      );
      return availabilityInCart !== -1;
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  &__item {
    width: max-content;

    & + & {
      margin-top: 110px;
    }

    margin: 0 auto;
  }

  &__desc {
    font-size: 16px;
    text-align: center;
    margin: 8px auto;

    p {
      margin: 0px;
      margin-top: 6px;
    }
  }

  &__img {
    width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__name {
    text-align: center;
    width: 100%;
    margin-top: 16px;
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #0078d6;

    span {
      opacity: 0.7;
      font-size: 14px;
      margin-top: 4px;
      color: #0d0d0d;
    }
  }

  &__price {
    text-align: center;
    width: 100%;
    font-size: 1.45em;
    margin-top: 16px;
    span {
      font-size: 14px;
      opacity: 0.5;
      text-decoration: line-through;
    }
  }

  &__sizes {
    width: 100%;
    height: 100%;
    display: block;
    padding: 10px;
    text-transform: uppercase;
    border: 1px solid #000;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 16px;
    appearance: none;

    &-shell {
      position: relative;
      width: 250px;
      height: 44px;
      margin: 20px auto;
    }
  }

  &__link {
    border-bottom: 1px solid #0d0d0d;
    padding-bottom: 1px;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
    margin: -5px auto;
    display: block;
    width: max-content;

    &:hover {
      border-color: transparent;
    }
  }

  &__button {
    display: block;
    margin: 20px auto;
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

    &.lock {
      opacity: 0.7;
      pointer-events: none;
    }

    &:hover {
      filter: brightness(1.1);
      background: #212121;
    }
  }

  @media (max-width: 735px) {
    &__img {
      width: 80vw;
      height: 300px;
      margin: 0 auto;
    }
    &__price {
      font-size: 1.25em;
    }
    &__item {
      width: 100%;
    }

    &__name {
      font-size: 1.5em;
    }
  }
}
</style>

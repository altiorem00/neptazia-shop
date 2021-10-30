<template>
  <main class="product__list">
    <product-item
      v-for="(item, index) in products"
      :product="item"
      :index="index"
      :key="index"
    />
  </main>
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  name: "MainPage",
  components: { ProductItem },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
</style>

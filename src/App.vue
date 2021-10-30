<template>
  <div id="app">
    <header class="header">
      <router-link :to="{ name: 'main' }">
        <img
          class="header__logo"
          src="@/assets/Logo_dlya_Andryuxi.svg"
          alt=""
        />
      </router-link>
    </header>
    <router-link
      class="footer__cart"
      :to="{ name: 'cart' }"
      aria-label="Корзина с товарами"
    >
      <span>{{ cartQuantity }}</span>
    </router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
    <footer class="footer">
      <a target="_blank" class="footer__vk" href="https://vk.com/neptazia"></a>
      <a
        target="_blank"
        class="footer__inst"
        href="https://www.instagram.com/neptazia_wear/"
      ></a>
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    cartQuantity() {
      return this.$store.state.userData.cart.length;
    },
  },
  methods: {
    ...mapActions(["loadAppData"]),
  },
  created() {
    this.loadAppData();
  },
  mounted() {
    const img = document.getElementsByClassName("preloader")[0];
    setTimeout(() => {
      img.style.display = "none";
    }, 3500);
    setTimeout(() => {
      img.classList.add("hide");
      document.body.style.overflow = "auto";
    }, 2500);
  },
};
</script>

<style lang="scss">
$black: #0d0d0d;
$white: #fefffe;
@font-face {
  font-family: "SegoeUISemiBold";
  src: url("/fonts/SegoeUISemiBold.woff") format("woff");
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: "SegoeUISemiBold";
  src: url("/fonts/SegoeUISemiBold.woff") format("woff");
  font-style: normal;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: $black;
}

.footer {
}

* {
  box-sizing: border-box;
}

body {
  background: $white;
  margin: 0px;
  padding-top: 120px;
  padding-bottom: 50px;

  &::-webkit-scrollbar {
    width: 0px;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  font-family: "SegoeUISemiBold", monospace;
}

.container {
  width: 80vw;
  margin: 0 auto;
}

.header {
  padding: 11px 0px;
  height: 87px;
  border-bottom: #333;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.45);
  -webkit-backdrop-filter: blur(4.5px);
  backdrop-filter: blur(2px);

  &__logo {
    height: 100%;
    transform: scale(3);
    object-position: center;
    transform-origin: center;
  }
}

.footer {
  width: 30%;
  padding: 10px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;

  &__cart {
    position: fixed;
    cursor: pointer;
    bottom: 12px;
    right: 22px;
    width: 42px;
    height: 42px;
    display: flex;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg fill='%230078d6' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z'/%3E%3C/svg%3E ");

    span {
      position: absolute;
      top: 4px;
      left: 0px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #0078d6;
      color: #fefffe;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__vk,
  &__inst {
    display: block;
    width: 32px;
    height: 27px;
    margin: 4px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__vk {
    background-image: url("data:image/svg+xml,%3Csvg fill='%230078d6' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath class='st0' d='M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z'/%3E%3C/svg%3E%0A");
  }

  &__inst {
    background-image: url("data:image/svg+xml,%3Csvg fill='%230078d6' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E%0A");
  }
}

@media (max-width: 735px) {
  .container {
    width: 100%;
    padding: 0px 15px;
    margin: 0 auto;
  }
  .header {
    padding: 12px 0px;
    height: 66px;

    &__logo {
      width: 72px;
    }
  }
  body {
    padding-top: 80px;
  }
  .footer {
    bottom: initial;
    top: 5px;
    z-index: 999;
  }
  .footer__cart span {
    width: 12px;
    height: 12px;

    font-size: 11px;
  }
  .footer__cart {
    width: 36px;
    height: 36px;
    right: 10px;
    bottom: initial;
    top: 15px;
    z-index: 999;
  }
}
</style>

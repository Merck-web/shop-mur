<template>
  <section class="navbar">
    <div class="container">
      <nav class="nav">
        <div class="left-nav">
          <div class="logo"><img src="../static/img/Logo.png" alt="1" /></div>
          <div
            :class="{ active: catalog }"
            @click="catalogToggle"
            class="catalog"
          >
            Catalog
          </div>
        </div>
        <div class="right-nav">
          <div class="profile">Profile</div>
          <div @click="openBasket" class="basket">Basket({{ this.count }})</div>
        </div>
      </nav>
    </div>
    <div v-if="basket" class="basket-open">
      <div class="background"></div>
      <div class="basket-window">
        <Basket />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      catalog: false,
      count: 2,
      basket: false,
    };
  },
  methods: {
    catalogToggle() {
      this.catalog = !this.catalog;
    },
    openBasket() {
      this.basket = !this.basket;
      let html = document.querySelector("html");
      if (this.basket == true) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "auto";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.basket-open {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  .background {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7);
  }
  .basket-window {
    position: fixed;
    top: 0;
    right: 0;
    width: 455px;
    height: 780px;
    background-color: white;
  }
}
.navbar {
  width: 100%;
}
.active {
  color: #ff6b00;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding: 35px 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  .left-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 422px;
    width: 100%;
    .logo {
      cursor: pointer;
    }
    .catalog {
      cursor: pointer;
    }
  }
  .right-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    .profile {
      margin-right: 43px;
      cursor: pointer;
    }
    .basket {
      cursor: pointer;
    }
  }
}
@media (max-width: 640px) {
  .nav .left-nav {
    justify-content: flex-start;
    .logo {
      margin-right: 10px;
    }
  }
}
@media (max-width: 420px) {
  .nav .right-nav {
    flex-direction: column;
  }
  .nav .right-nav {
    align-items: flex-start;
  }
  .nav .right-nav .profile {
    margin-right: 0;
  }
}
</style>
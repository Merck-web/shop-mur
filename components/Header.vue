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
          <div class="basket">Basket(2)</div>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      catalog: false,
    };
  },
  methods: {
    catalogToggle() {
      this.catalog = !this.catalog;
    },
  },
};
</script>
<style lang="scss" scoped>
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
<template>
  <div class="basket-cards">
    <div v-for="basketCard in card" :key="basketCard.id" class="card-bs">
      <div class="photo"><img :src="basketCard.product.photo" /></div>
      <div class="info-card">
        <div class="name">{{ basketCard.product.name }}</div>
        <div class="prise">
          {{ basketCard.product.price }} X
          <span>{{ basketCard.quantity }}</span>
        </div>
        <div
          @click.prevent="removeThisProduct(basketCard.product)"
          class="btn-delete"
        >
          Remove
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // basketCards: [
      //   {
      //     id: "1",
      //     name: "Converse Chuck 70 Renew High Top",
      //     photo: "img/cards/1.png",
      //     prise: "$50.99",
      //   },
      //   {
      //     id: "2",
      //     name: "Converse Chuck 70",
      //     photo: "img/cards/2.png",
      //     prise: "$49.99",
      //   },
      // ],
    };
  },
  computed: {
    card() {
      return this.$store.state.cart;
    }
  },
  methods: {
    removeThisProduct(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
  },
};
</script>
<style lang="scss" scoped>
.card-bs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;
}
.photo {
  margin-right: 10px;
  img {
    width: 100px !important;
    height: 100px !important;
  }
}
.info-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  .name {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #818181;
    max-width: 151px;
  }
  .prise {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-top: 5px;
  }
  .btn-delete {
    cursor: pointer;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #000000;
    margin-top: 19px;
  }
}
</style>
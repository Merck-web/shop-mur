<template>
  <div class="basket-wrapper">
    <div class="text-info">
      <h1>TOTAL</h1>
      <div class="subTotal">
        <p>Subtotal:</p>
        <p>$ 99.99</p>
      </div>
      <div class="sale">
        <p>Sale:</p>
        <p>$ 34.00</p>
      </div>
      <div class="contentRemove">
        <p>Content:</p>
        <p>Remove all</p>
      </div>
      <div class="order">
        <div class="order-total">
          <p>Order Total:</p>
          <p>$ {{ cardTotalPrice }}</p>
        </div>
      </div>
      <div class="basket-items">
        <BasketCards />
      </div>
    </div>
    <div class="basket-footer">
      <p>Checkout</p>
      <div class="icon">></div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    cardTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
};
</script>
<style lang="scss" scoped>
.basket-footer {
  padding: 30px 100px 30px 40px;
  background-color: #000000;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.order {
  margin-top: 60px;
}
.order-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  position: relative;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  p + p {
    text-align: right;
  }
}
.order-total::before,
.order-total::after {
  content: "";
  position: absolute;
  width: 450px;
  height: 1px;
  background: #bdbdbd;
  left: calc(0px - 40px);
}
.order-total::before {
  top: 37px;
}
.order-total::after {
  bottom: 37px;
}
.basket-wrapper {
  font-family: Inter;
  font-style: normal;
  color: #000000;
}
.text-info {
  margin-top: 94px;
  padding-top: 20px;
  border-top: 1px solid #bdbdbd;
  padding-left: 40px;
  padding-right: 100px;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .subTotal,
  .sale,
  .contentRemove {
    display: flex;
    justify-content: space-between;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
  }
  .subTotal p,
  .sale p,
  .contentRemove p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #000000;
  }
  .contentRemove {
    p + p {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
@media (max-width: 455px) {
  .text-info {
    padding: 20px 15px;
  }
}
</style>
<template>
  <div class="basket-wrapper">
    <div class="text-info">
      <h1>TOTAL</h1>
      <div class="subTotal">
        <p>Subtotal:</p>
        <p>1</p>
      </div>
      <div class="sale">
        <p>Sale:</p>
        <p>1</p>
      </div>
      <div class="contentRemove">
        <p>Content:</p>
        <p>Remove all</p>
      </div>
      <div class="order-total">
        <p>Order Total:</p>
        <p>1</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.order-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  position: relative;
}
.order-total::before,
.order-total::after{
    content: '';
    position: absolute;
    width: 450px;
    height: 1px;
    background: #BDBDBD;
    left: calc(0px - 40px);
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
  .contentRemove {
    p + p {
      text-decoration: underline;
    }
  }
}
</style>
<template>
  <section>
    <div class="best">
      <p>
        Bestsellers: <br />
        <span>34</span>
      </p>
      <div class="best-one">
        <BestsellersCard />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.best {
  font-family: Inter;
  padding-top: 120px;
  position: relative;
  p {
    position: absolute;
    top: 120px;
    left: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    text-transform: uppercase;
    color: #000000;
  }
}
</style>
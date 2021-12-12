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
@media (max-width: 1400px) {
  .best {
    margin-top: 120px;
  }
  .best-one {
    margin-top: 100px;
  }
}
@media (max-width: 360px) {
  .best {
    p {
      font-size: 35px;
      line-height: 40px;
    }
  }
  .best-card:nth-child(3) {
    grid-column: span 1;
    order: -1;
    grid-gap: 175px;
  }
}
</style>
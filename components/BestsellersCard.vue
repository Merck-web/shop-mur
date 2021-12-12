<template>
  <section>
    <div class="best-box">
      <div class="best">
        <div v-for="card in cards" :key="card.id" class="best-card">
          <div class="photo"><img :src="card.photo" /></div>
          <div class="name">
            <p>{{ card.name }}</p>
          </div>
          <div class="price">
            <p>
              {{ card.price }} <span>{{ card.oldprise }}</span>
            </p>
          </div>
          <div @click="addToBasket" class="btn">
            <b-button
              :rounded="false"
              :class="{ active: btnIsActive }"
              type="is-dark"
              :icon-right="active ? 'check' : 'plus'"
              ><p>Add to basket</p></b-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          photo: "img/cards/1.png",
          name: "Converse Kids 70",
          price: "$49.99",
          oldprise: "",
        },
        {
          id: 2,
          photo: "img/cards/2.png",
          name: "Converse Kids 70",
          price: "$49.99",
          oldprise: "$84.99",
        },
        {
          id: 3,
          photo: "img/cards/3.png",
          name: "Converse Chuck 70 Renew High Top ",
          price: "$50.99",
          oldprise: "",
        },
        {
          id: 4,
          photo: "img/cards/4.png",
          name: "Converse Pro Chuck 80",
          price: "$64.99",
          oldprise: "$99.99",
        },
        {
          id: 5,
          photo: "img/cards/5.png",
          name: "Converse Winter Chuck 70",
          price: "$79.99",
          oldprise: "$99.99",
        },
        {
          id: 6,
          photo: "img/cards/6.png",
          name: "Converse Winter Chuck 70 Full Black",
          price: "$129.99",
          oldprise: "",
        },
        {
          id: 7,
          photo: "img/cards/7.png",
          name: "Converse Winter Chuck 70 Black/White",
          price: "$99.99",
          oldprise: "",
        },
      ],
      btnIsActive: false,
    };
  },
  methods: {
    addToBasket() {
      this.btnIsActive = !this.btnIsActive;
    },
  },
};
</script>
<style lang="scss" scoped>
.best {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 20px;
  .best-card {
    .name {
      margin-top: 15px;
    }
    .name,
    .price {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    }
    .price {
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 15px;
      span {
        position: relative;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #b7b7b7;
        margin-left: 10px;
      }
      span:before {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        height: 1px;
        background: #000000;
      }
    }
  }
}
.best-card:nth-child(3) {
  grid-column: span 2;
  grid-row: span 1;
}
.best-card:nth-child(1),
.best-card:nth-child(2) {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.btn {
  button {
    width: 335px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    border-radius: 0px;
  }
  button .active {
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
  }
}
</style>
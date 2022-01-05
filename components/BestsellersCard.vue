<template>
  <section>
    <div class="best-box">
      <div class="best">
        <div v-for="card in cards" :key="card.id" class="best-card">
          <div class="photo">
            <div class="photo-card">
              <img :src="card.photo" />
              <div v-if="card.sale" class="sale-icon">
                Sale {{ card.sale }}%
              </div>
            </div>
          </div>
          <div class="name">
            <p>{{ card.name }}</p>
          </div>
          <div class="price">
            <p>
              {{ card.price }} <span>{{ card.oldprise }}</span>
            </p>
          </div>
          <div
            @click="addToBasket(card)"
            :class="{ active: card.added }"
            class="btn"
          >
            <b-button
              :rounded="false"
              :class="{ active: card.added }"
              :type="card.added ? 'is-light' : 'is-dark'"
              :icon-right="card.added ? 'check' : 'plus'"
              ><p v-if="card.added">Added</p>
              <p v-if="!card.added">Add to basket</p></b-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
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
          sale: "",
          quantity: 1,
          added: false,
        },
        {
          id: 2,
          photo: "img/cards/2.png",
          name: "Converse Kids 70",
          price: "$49.99",
          oldprise: "$84.99",
          sale: "",
          quantity: 1,
          added: false,
        },
        {
          id: 3,
          photo: "img/cards/3.png",
          name: "Converse Chuck 70 Renew High Top ",
          price: "$50.99",
          oldprise: "",
          sale: "-40",
          quantity: 1,
          added: false,
        },
        {
          id: 4,
          photo: "img/cards/4.png",
          name: "Converse Pro Chuck 80",
          price: "$64.99",
          oldprise: "$99.99",
          sale: "-35",
          quantity: 1,
          added: false,
        },
        {
          id: 5,
          photo: "img/cards/5.png",
          name: "Converse Winter Chuck 70",
          price: "$79.99",
          oldprise: "$99.99",
          sale: "-20",
          quantity: 1,
          added: false,
        },
        {
          id: 6,
          photo: "img/cards/6.png",
          name: "Converse Winter Chuck 70 Full Black",
          price: "$129.99",
          oldprise: "",
          sale: "",
          quantity: 1,
          added: false,
        },
        {
          id: 7,
          photo: "img/cards/7.png",
          name: "Converse Winter Chuck 70 Black/White",
          price: "$99.99",
          oldprise: "",
          sale: "",
          quantity: 1,
          added: false,
        },
      ],
      btnIsActive: false,
    };
  },
  methods: {
    async addToBasket(card) {
      // card.added = !card.added;
      card.added = true;
      this.$store.dispatch('addProductToCard', {
        product: card,
        quantity: 1
      })
    }
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
    .photo-card {
      position: relative;
      max-width: 335px;
      max-height: 400px;
      .sale-icon {
        position: absolute;
        top: 25px;
        right: 25px;
        background: #ff6b00;
        padding: 12px 20px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
      }
    }
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
  .photo-card {
    position: relative;
    max-width: 690px;
    max-height: 780px;
    .sale-icon {
      position: absolute;
      top: 25px;
    }
  }
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
    transition: all 0.6s ease-in-out;
  }
  .is-light {
    color: #000000;
    border: 1px solid #000000;
  }
}
@media (max-width: 1400px) {
  .best {
    grid-template-columns: repeat(3, 1fr);
  }
  .best-card:nth-child(3) {
    grid-column: span 1;
    grid-row: span 1;
    order: -1;
  }
}
@media (max-width: 1200px) {
  .best {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 800px) {
  .best {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 360px) {
  .best-card {
    padding: 0 15px;
    width: 280px;
    height: 280px;
    margin-bottom: 170px;
    .photo-card {
      .sale-icon {
        top: 15px !important;
        right: 15px !important;
        padding: 10px 15px !important;
      }
    }
  }
  .best-card:nth-child(3) {
    margin-bottom: 400px;
  }
  .btn {
    button {
      width: 200px;
    }
  }
}
</style>
<template>
  <section>
    <div class="options">
      <div class="options-box">
        <div class="comp">
          <p class="options-name">search</p>
          <b-dropdown @change="isSearching" aria-role="list">
            <template #trigger="{ active }">
              <b-button
                class="selected"
                :label="isSearch"
                :icon-right="active ? 'close' : 'menu-down'"
              />
            </template>
            <b-dropdown-item
              v-for="optionOne in optionsTwo"
              :key="optionOne.id"
              :value="optionOne.value"
              aria-role="listitem"
              >{{ optionOne.name }}</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="comp">
          <p class="options-name">Product category</p>
          <b-dropdown @change="isProd" aria-role="list">
            <template #trigger="{ active }">
              <b-button
                class="selected"
                :label="isProduct"
                :icon-right="active ? 'close' : 'menu-down'"
              />
            </template>
            <b-dropdown-item
              v-for="optionTwo in optionsTwo"
              :key="optionTwo.id"
              :value="optionTwo.value"
              aria-role="listitem"
              >{{ optionTwo.name }}</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="comp">
          <p class="options-name">Sale</p>
          <b-dropdown @change="isSaling" aria-role="list">
            <template #trigger="{ active }">
              <b-button
                class="selected"
                :label="isSale"
                :icon-right="active ? 'close' : 'menu-down'"
              />
            </template>
            <b-dropdown-item
              v-for="optionThree in optionsThree"
              :key="optionThree.id"
              :value="optionThree.value"
              aria-role="listitem"
              >{{ optionThree.name }}</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="btn-options">
          <button>Apply</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      optionsOne: [
        { id: "1", name: "Action", value: "Action" },
        { id: "2", name: "Another action", value: "Another action" },
        { id: "3", name: "Something else", value: "Something else" },
      ],
      optionsTwo: [
        { id: "1", name: "Action", value: "Action" },
        { id: "2", name: "Another action", value: "Another action" },
        { id: "3", name: "Something else", value: "Something else" },
      ],
      optionsThree: [
        { id: "1", name: "Action", value: "Action" },
        { id: "2", name: "Another action", value: "Another action" },
        { id: "3", name: "Something else", value: "Something else" },
      ],
      isSearch: "converse",
      isProduct: "Sneakers",
      isSale: "Sale",
    };
  },
  methods: {
    isSearching(value) {
      this.isSearch = value;
    },
    isProd(value) {
      this.isProduct = value;
    },
    isSaling(value) {
      this.isSale = value;
    },
  },
};
</script>
<style lang="scss" >
.options {
  margin-top: 80px;
}
.options-box {
  display: flex;
  justify-content: space-between;
  .comp {
    max-width: 335px;
    width: 100%;
    margin-right: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    .dropdown {
      width: 100%;
      height: 84px;
      .selected {
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
      }
    }
    .button {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
      background: #f5f5f5;
      border: none;
    }
    .options-name {
      text-transform: capitalize;
      margin-bottom: 20px;
    }
  }
  .comp:last-child {
    margin-right: 0;
  }
  .btn-options {
    margin-top: 42px;
    button {
      max-width: 335px;
      width: 100%;
      border: none;
      background: #1b1b1b;
      padding: 19px 140px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
.dropdown-menu {
  width: 100%;
}
@media (max-width: 1400px) {
  .options-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    position: relative;
  }
  .btn-options {
    position: absolute;
    top: 120px;
    left: 0;
  }
}
@media (max-width: 1024px) {
  .options-box {
    grid-template-columns: repeat(2, 1fr);
  }
  .btn-options {
    top: 220px;
  }
}
@media (max-width: 700px) {
  .options-box {
    grid-template-columns: repeat(1, 1fr);
  }
  .btn-options {
    top: 350px;
    button {
      padding: 19px 70px !important;
    }
  }
}
</style>
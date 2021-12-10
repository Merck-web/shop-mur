<template>
  <section>
    <div class="options">
      <div class="options-box">
        <div v-for="option in options" :key="option.id" class="comp">
          <p>{{ option.name }}</p>
          <b-dropdown aria-role="list">
            <template #trigger="{ active }">
              <b-button
                label="option.item1"
                :icon-right="active ? 'menu-up' : 'menu-down'"
              />
            </template>

            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem"
              >Another action</b-dropdown-item
            >
            <b-dropdown-item aria-role="listitem"
              >Something else</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div class="btn">
          <button>apply</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      options: [
        { id: "1", name: "search", item1: "converse" },
        { id: "2", name: "product category", item1: "sneakers" },
        { id: "3", name: "sale", item1: "bestsellers" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
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
    }
    .button {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
      background: #F5F5F5;
      border: none;
    }
  }
  .comp:last-child {
    margin-right: 0;
  }
  .btn {
    max-width: 335px;
    width: 100%;
    button {
      border: none;
      background: #1b1b1b;
      padding: 20px 140px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
    }
  }
}
</style>
<template>
  <section>
    <div class="footer">
      <div class="container">
        <div class="content">
          <div class="logo"><img src="../static/img/Logo-w.png" alt="1" /></div>
          <div class="contact">
            <p>Copyright</p>
            <p>Contacts</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.footer {
  margin-top: 120px;
  padding: 40px 15px;
  background: #1b1b1b;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    cursor: pointer;
  }
  .contact {
    display: flex;
    justify-content: space-between;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    p + p {
      margin-left: 40px;
    }
    p {
      cursor: pointer;
    }
  }
}
@media (max-width: 400px) {
  .content .contact {
    flex-direction: column;
    p + p {
      margin-left: 0;
      margin-top: 10px;
    }
  }
}
</style>
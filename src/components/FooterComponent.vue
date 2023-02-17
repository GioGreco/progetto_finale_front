<template>
  <div class="div-footer">
    <div class="container">
      <div
        class="footer-content d-flex justify-content-around align-items-center"
      >
        <div class="footer-left">
          <div class="logo">Boolbnb 2023</div>
          <div class="address d-none d-md-block">
            Via Francesco Sforza 12,<br />
            23213 Milano<br />
            Italia
          </div>
        </div>

        <div class="credits">
          Realizzato da <router-link :to="`/credits`">Team 3</router-link>
        </div>

        <div class="footer-right">
          <a href="#"> <i class="fa-brands fa-facebook me-3"></i></a>
          <a href="#"><i class="fa-brands fa-instagram me-3"></i></a>
          <a href="#"><i class="fa-brands fa-twitter me-3"></i></a>
          <a href="#"><i class="fa-brands fa-pinterest me-3"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.div-footer {
  height: 140px;
  background-color: $emerald;
  color: $raindrop;
}

.container {
  height: 140px;
  a {
    color: $raindrop;
  }

  i {
    font-size: 1.4rem;
    &:hover {
      transform: scale(1.1);
    }
  }
}

.credits {
  a {
    $color: $white;
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: underline;
  }
}

.logo {
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  padding-bottom: 0.3rem;
  color: $white;
}
.footer-content {
  padding: 15px 0;
}
</style>

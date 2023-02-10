<template>
  <!-- <div>
    <div>
      <HighlightCarouselComponent />
    </div>

    <div>
      <CategoriesComponent />
    </div>

    <div>
      <input type="text" v-model="address" />
      <button @click="searchAddress" class="btn btn-dark">Cerca</button>
    </div>
  </div> -->

  <!-- ---------------------------------------------------------------------------------------- -->

  <!-- jumbo + navbar -->

  <div class="jumbo">
    <nav class="text-center pt-4">
      <div class="logo">
        <strong>BoolBnb</strong>
      </div>
    </nav>

    <div class="claim">Sentiti a casa. Ovunque tu sia.</div>

    <div class="searchbar">
      <input
        type="text"
        v-model="address"
        placeholder="Inserisci una destinazione..."
      />
    </div>
  </div>

  <!-- sezione apart in evidenza -->
  <section class="container">
    <div class="title text-center pb-5">
      <h1>I nostri highlights</h1>
      <p>Le nostre proposte in evidenza per te.</p>
    </div>

    <!-- slider -->
    <div>
      <HighlightCarouselComponent />
    </div>
  </section>

  <!-- sezione categorie -->
  <section>
    <CategoriesComponent />
  </section>
</template>

<script>
import HighlightCarouselComponent from "@/components/Homepage/HighlightCarouselComponent.vue";
import CategoriesComponent from "@/components/Homepage/CategoriesComponent.vue";

// import axios from "axios";

export default {
  name: "HomePage",
  components: {
    HighlightCarouselComponent,
    CategoriesComponent,
  },
  //   data() {
  //     return {
  //       address: "",
  //       addressEndpoint:
  //         "https://api.tomtom.com/search/2/geocode/4%20north%202nd%20street%20san%20jose.json?storeResult=false&lat=37.337&lon=-121.89&view=Unified&key=*****",
  //       key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
  //     };
  //   },
  //   methods: {
  //     searchAddress() {
  //       const encodedAddress = encodeURIComponent(this.address);
  //       axios
  //         .get(`https://api.tomtom.com/search/2/geocode/${encodedAddress}.json`, {
  //           params: { key: this.key },
  //         })
  //         .then((response) => {
  //           console.log(response.data);
  //         });
  //       this.address = "";
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.jumbo {
  height: 500px;
  background-image: url("/public/img/jumbo-cut.jpg");
  background-size: cover;
  background-position: center;
  color: $white;
  position: relative;
}

.logo {
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
}
.claim {
  background-color: $mauve;
  padding: 8px 8px;
  width: 450px;
  font-size: 2.2rem;
  font-weight: bolder;
  position: absolute;
  left: 50%;
  top: 32%;
  transform: translate(-50%, -32%);
  text-align: center;
}

.searchbar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;

  input {
    width: 100%;
    padding: 9px 13px;
    border-radius: 10px;
    border-style: none;
  }
}

section {
  padding: 7rem 0;
}

h1 {
  color: $rosegold;
  font-weight: 700;
  font-size: 3.5rem;
}

p {
  font-size: 1.5rem;
}
</style>

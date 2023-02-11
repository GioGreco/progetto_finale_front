<template>
  <!-- <div>
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

      <div class="nav-btns d-none d-md-block d-flex">
        <button class="me-3">Login</button>
        <button>Diventa un host</button>
      </div>
    </nav>

    <div class="claim d-block d-md-none">A casa. Ovunque.</div>
    <div class="claim d-none d-md-block">Sentiti a casa. Ovunque tu sia.</div>

    <div class="searchbar">
      <input
        type="text"
        v-model.trim="store.searchedCity"
        @keyup.enter="search"
        placeholder="Inserisci una destinazione..."
      />
    </div>
  </div>

  <!-- sezione apart in evidenza -->
  <section class="container">
    <div class="title text-center pb-5">
      <h1>I nostri highlight</h1>
      <p class="subtitle">Le nostre proposte in evidenza per te.</p>
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

  <!-- sezione content generico  -->

  <section>
    <div class="title text-center pb-5">
      <h1>Prenota e rilassati</h1>
      <p class="subtitle">pensiamo noi a tutto.</p>
    </div>

    <div class="my-container">
      <div class="row gx-md-0 d-flex">
        <div class="col-12 col-md-4 bg-mauve">
          <div class="p-container">
            <h1>
              <div class="number white">1</div>
              <div class="p-title p-bottom sangria">
                Solo alloggi selezionati
              </div>
            </h1>
            <p class="white p-bottom">
              Lorem ipsum dolor sit amet. Sed tempore cupiditate aut rerum sequi
              et minima ducimus. Sed quis quae sit doloremque rerum et error qui
              minus incidunt.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-8">
          <img
            class="img-last-sect"
            src="/public/img/last-section.jpg"
            alt="Interior design"
          />
        </div>

        <div class="col-12 col-md-4">
          <div class="p-container">
            <h1>
              <div class="number sangria">2</div>
              <div class="p-title p-bottom">La nostra garanzia</div>
            </h1>
            <p class="p-bottom">
              Lorem ipsum dolor sit amet. Sed tempore cupiditate aut rerum sequi
              et minima ducimus. Sed quis quae sit doloremque minus incidunt.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-8 bg-raindrop">
          <div class="p-container">
            <h1>
              <div class="number rosegold">3</div>
              <div class="p-title p-bottom emerald">Sempre al tuo fianco</div>
            </h1>
            <p class="white p-bottom">
              Lorem ipsum dolor sit amet. Sed tempore cupiditate aut rerum sequi
              et minima ducimus. Sed quis quae sit doloremque rerum et error qui
              minus incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HighlightCarouselComponent from "@/components/Homepage/HighlightCarouselComponent.vue";
import CategoriesComponent from "@/components/Homepage/CategoriesComponent.vue";
import { store } from "../store";

// import axios from "axios";

export default {
  name: "HomePage",
  components: {
    HighlightCarouselComponent,
    CategoriesComponent,
  },
  data() {
    return {
      // address: "",
      // addressEndpoint:
      //   "https://api.tomtom.com/search/2/geocode/4%20north%202nd%20street%20san%20jose.json?storeResult=false&lat=37.337&lon=-121.89&view=Unified&key=*****",
      // key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
      store,
    };
  },
  methods: {
    // searchAddress() {
    //   const encodedAddress = encodeURIComponent(this.address);
    //   axios
    //     .get(`https://api.tomtom.com/search/2/geocode/${encodedAddress}.json`, {
    //       params: { key: this.key },
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //     });
    //   this.address = "";
    // },
    search() {
      this.$emit("filteredApartments");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;

.jumbo {
  height: 300px;
  background-image: url("/public/img/jumbo-small.jpg");
  background-size: cover;
  background-position: center;
  color: $white;
  position: relative;
}

.nav-btns {
  position: absolute;
  top: 5%;
  right: 2%;

  button {
    background-color: rgba(0, 0, 0, 0.2);
    border-style: none;
    border-radius: 20px;
    padding: 5px 14px;
    color: $white;
    font-weight: bold;
  }
}

.logo {
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
}
.claim {
  background-color: $mauve;
  padding: 3px 6px;
  font-size: 2.2rem;
  font-weight: bolder;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -60%);
  text-align: center;
}

.searchbar {
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -90%);
  width: 50%;

  input {
    width: 100%;
    padding: 9px 13px;
    border-radius: 10px;
    border-style: none;
  }
}

section {
  padding: 5rem 0 0 0;
}

h1 {
  color: $rosegold;
  font-weight: 700;
  font-size: 3.5rem;
}

p {
  font-size: 1.8rem;
}

.bg-mauve {
  background-color: $mauve;
}

.bg-raindrop {
  background-color: $raindrop;
}

.number {
  font-size: 5rem;
  padding-bottom: 2rem;
}

.white {
  color: $white;
}

.sangria {
  color: $sangria;
}

.rosegold {
  color: $rosegold;
}
.emerald {
  color: $emerald;
}
.p-bottom {
  padding-bottom: 1.5rem;
}

.p-container {
  padding: 0 1.7rem;
}

// media queries:

@media (min-width: 600px) {
  section {
    padding: 3rem 0;
  }

  .jumbo {
    height: 500px;
    background-image: url("/public/img/jumbo-cut.jpg");
  }

  .claim {
    padding: 8px 8px;
    width: 450px;
    left: 50%;
    top: 32%;
    transform: translate(-50%, -32%);
  }

  .searchbar {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
  }

  .my-container {
    width: 55%;
    margin: auto;
  }

  .number {
    font-size: 3.5rem;
    padding-bottom: 1.5rem;
    padding-top: 1rem;
  }

  .p-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
  }
  .p-bottom {
    padding-bottom: 1.5rem;
  }
  .img-last-sect {
    width: 100%;
    height: 100%;
  }
}
</style>

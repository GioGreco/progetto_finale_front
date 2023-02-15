<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>

  <main>
    <!-- main diviso in risultati + filtri -->
    <div class="container py-5">
      <div class="bottom-layer"></div>
      <div class="row">
        <div class="results-list col-md-8">
          <!-- se non si è ancora effettuata nessuna ricerca: -->
          <div v-if="this.array2.length == 0" class="col-md-8">
            <h1>Cerca un appartamento</h1>
          </div>
          <!-- risultati per solo filtro città: -->
          <div class="overflow-auto">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-cards"
            ></b-pagination>

            <div
              class="card-container"
              v-if="this.array3.length == 0 && this.varcat == 0"
              v-for="(item, index) in array2"
              :key="index"
            >
              <CardComponent
                id="my-cards"
                :apartament="item"
                :items="array2"
                :per-page="perPage"
                :current-page="currentPage"
              ></CardComponent>
              <hr class="my-4" />
            </div>

            <!-- se non ci sono risultati: -->
            <div v-else-if="this.array3.length == 0">
              <h4>Nessun risultato</h4>
            </div>
          </div>

          <!-- array mostrato se array filtri categorie attivo -->
          <div
            class="card-container"
            v-if="this.array3.length != 0"
            v-for="(item, index) in array3"
            :key="index"
          >
            <CardComponent :apartament="item"></CardComponent>
          </div>

          <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
        </div>

        <!-- colonna filtri -->
        <div class="filter-list col-12 col-md-4 pt-4">
          <div class="d-none d-md-block page-title text-center">
            <h3>Ricerca avanzata</h3>
            <hr />
          </div>

          <h4 class="d-none d-md-block">Scegli una destinazione:</h4>
          <div id="search" class="my-3"></div>

          <h4 class="d-none d-md-block">Distanza dal centro:</h4>
          <ul class="kmrange d-flex gap-3">
            <li>
              <input
                @click="setKilometers"
                type="radio"
                name="kmvar"
                id="five"
              />
              <label for="five">5km</label>
            </li>
            <li>
              <input
                @click="setKilometers"
                type="radio"
                name="kmvar"
                id="ten"
              />
              <label for="ten">10km</label>
            </li>
            <li>
              <input
                @click="setKilometers"
                type="radio"
                name="kmvar"
                id="twenty"
                checked
              />
              <label for="twenty">20km</label>
            </li>
            <li>
              <input
                @click="setKilometers"
                type="radio"
                name="kmvar"
                id="fifty"
              />
              <label for="fifty">50km</label>
            </li>
            <li>
              <input
                @click="setKilometers"
                type="radio"
                name="kmvar"
                id="hundred"
              />
              <label for="hundred">100km</label>
            </li>
          </ul>

          <h4 class="d-none d-md-block">Tipo di alloggio:</h4>

          <ul class="category d-flex flex-wrap gap-3">
            <li v-for="(category, index) in categories" :key="index">
              <input
                type="radio"
                name="categoria"
                :id="category.slug"
                @click="setCategories"
              />
              <label :for="category.slug" class="d-none d-md-inline-block">{{
                category.name
              }}</label>

              <!-- versione mobile: -->
              <span class="d-block d-md-none checkmark">
                <span class="checkedicon" v-html="category.img"></span>
              </span>
            </li>
          </ul>

          <h4 class="d-none d-md-block">Servizi aggiuntivi:</h4>
          <ul class="services d-flex flex-wrap gap-3">
            <li v-for="(service, index) in services">
              <input type="checkbox" :name="service.title" :id="service.slug" />
              <label :for="service.slug" class="d-none d-md-inline-block">{{
                service.title
              }}</label>

              <!-- versione mobile: -->
              <span class="d-block d-md-none checkmark">
                <span class="checkedicon" v-html="service.img"></span>
              </span>
            </li>
          </ul>

          <h4 class="d-none d-md-block">Stanze:</h4>
          <ul class="stanze d-flex gap-3">
            <li>
              <input type="radio" name="stanze" id="tre" />
              <label for="tre">3</label>
            </li>
            <li>
              <input type="radio" name="stanze" id="seii" />
              <label for="seii">6</label>
            </li>
            <li>
              <input type="radio" name="stanze" id="nove" />
              <label for="nove">9</label>
            </li>
            <li>
              <input type="radio" name="stanze" id="moltii" />
              <label for="moltii">più</label>
            </li>
          </ul>

          <h4 class="d-none d-md-block">Letti:</h4>
          <ul class="beds d-flex gap-3">
            <li>
              <input type="radio" name="beds" id="due" />
              <label for="due">2</label>
            </li>
            <li>
              <input type="radio" name="beds" id="quattro" />
              <label for="quattro">4</label>
            </li>
            <li>
              <input type="radio" name="beds" id="sei" />
              <label for="sei">6</label>
            </li>
            <li>
              <input type="radio" name="beds" id="molti" />
              <label for="molti">più</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
import CardComponent from "../components/AdvancedSearch/CardComponent.vue";

export default {
  name: "WorkingSearch",
  components: {
    HeaderComponent,
    CardComponent,
  },
  props: {
    apartament: Object,
  },
  data() {
    return {
      store,
      varkm: "20", //base 20km
      varcat: "",
      distanza: "",
      categories: [],
      services: [],
      array1: [],
      array2: [],
      array3: [],
      loading: true,
      latitudine: "",
      longitudine: "",
      options: {
        idleTimePress: 100,
        minNumberOfCharacters: 0,
        searchOptions: {
          //   key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
          key: store.key,
          language: "it-IT",
          limit: 5,
        },
        autocompleteOptions: {
          //   key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
          key: store.key,
          language: "it-IT",
        },
        noResultsMessage: "No results found.",
      },
      perPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    setKilometers() {
      let km5 = document.getElementById("five");
      let km10 = document.getElementById("ten");
      let km20 = document.getElementById("twenty");
      let km50 = document.getElementById("fifty");
      let km100 = document.getElementById("hundred");

      if (km5.checked) {
        //                    console.log('5km selected');
        this.varkm = 5;
        this.array2 = [];
        this.getProducts();
      } else if (km10.checked) {
        //                   console.log('10km selected');
        this.varkm = 10;
        this.array2 = [];
        this.getProducts();
      } else if (km20.checked) {
        //                   console.log('20km selected');
        this.varkm = 20;
        this.array2 = [];
        this.getProducts();
      } else if (km50.checked) {
        //                    console.log('50km selected');
        this.varkm = 50;
        this.array2 = [];
        this.getProducts();
      } else if (km100.checked) {
        //                    console.log('100km selected');
        this.varkm = 100;
        this.array2 = [];
        this.getProducts();
      }
    },
    initSearchBox() {
      // let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
      let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
      // console.log(ttSearchBox);

      let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
      document.getElementById("search").appendChild(searchBoxHTML);
      // console.log(searchBoxHTML);

      ttSearchBox.on("tomtom.searchbox.resultsfound", function (data) {
        // console.log(data);
      });

      ttSearchBox.on("tomtom.searchbox.resultselected", (data) => {
        //       console.log(data);
        let lat = data.data.result.position.lat;
        this.latitudine = lat;
        // console.log("latitudine", this.latitudine);

        let lng = data.data.result.position.lng;
        this.longitudine = lng;
        // console.log("longitudine", this.longitudine);

        this.getProducts();
        this.array2 = [];
      });
    },
    getLatLongDist(lat2, long2) {
      let unit = "K";
      var radlat1 = (Math.PI * this.latitudine) / 180; //lat1 aka latitudine mappa
      //                 console.log('radlat1',radlat1);

      var radlat2 = (Math.PI * lat2) / 180; //lat2 aka latitudine di ogni singolo appartamento
      //                  console.log('radlat2',radlat2);

      var theta = this.longitudine - long2; //long1(longitudine mappa) - long2(longitudine appartamento)
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }

      this.distanza = "";
      this.distanza = dist;
      // console.log('distanza variabile globale',this.distanza);
      return dist;
    },
    getProducts() {
      axios.get(`${this.store.apiBaseUrl}/apartments`).then((res) => {
        this.array1 = res.data.results; //array 1 chiamata tutti gli appartamenti axios
        // console.log(this.array1);
        this.array2 = [];
        this.array1.forEach((item) => {
          let lat2 = item.lat;
          // console.log('latitudine array item',lat2);
          let long2 = item.long;
          // console.log('longitudine array item',lat2);

          this.getLatLongDist(lat2, long2);

          // console.log('distanza dentro la funz',this.distanza);
          if (this.distanza <= this.varkm) {
            // console.log('sono ENTRO di 20km');
            this.array2.push(item);
          }
          this.array3 = [];
          console.log("categoria settata a:", this.varcat);
        });
        this.array2.forEach((item2) => {
          if (item2.category_id == this.varcat) {
            this.array3.push(item2);
          }
        });
        console.log("afterarray3", this.array3);
        if (this.array3.length == 0) {
        }
        this.loading = false;
      });
    },
    getServices() {
      axios.get(`${this.store.apiBaseUrl}/services`).then((res) => {
        this.services = res.data.results; //array 1 chiamata tutti gli appartamenti axios
        console.log(this.services);
      });
    },
    getCategories() {
      axios.get(`${this.store.apiBaseUrl}/categories`).then((res) => {
        this.categories = res.data.results; //array 1 chiamata tutti gli appartamenti axios
        console.log(this.categories);
      });
    },
    setCategories() {
      let openspace = document.getElementById("open-space");
      let interacasa = document.getElementById("intera-casa");
      let appartamento = document.getElementById("appartamento");
      let attico = document.getElementById("attico");
      let villadicampagna = document.getElementById("villa-di-campagna");
      let villaalmare = document.getElementById("villa-al-mare");
      let Abitazioneinstileindustriale = document.getElementById(
        "abitazione-in-stile-industriale"
      );
      let Abitazioneinstilecontemporaneo = document.getElementById(
        "abitazione-in-stile-contemporaneo"
      );
      let villainstileromano = document.getElementById("villa-in-stile-romano");

      if (openspace.checked) {
        this.varcat = "";
        console.log("openspace");
        this.varcat = 1;
        this.getProducts();
      } else if (interacasa.checked) {
        this.varcat = "";
        console.log("interacasa");
        this.varcat = 2;
        this.getProducts();
      } else if (appartamento.checked) {
        this.varcat = "";
        console.log("appartamento");
        this.varcat = 3;
        this.getProducts();
      } else if (attico.checked) {
        this.varcat = "";
        console.log("attico");
        this.varcat = 4;
        this.getProducts();
      } else if (villadicampagna.checked) {
        this.varcat = "";
        console.log("villadicampagna");
        this.varcat = 5;
        this.getProducts();
      } else if (villaalmare.checked) {
        this.varcat = "";
        console.log("villaalmare");
        this.varcat = 6;
        this.getProducts();
      } else if (Abitazioneinstileindustriale.checked) {
        this.varcat = "";
        console.log("Abitazioneinstileindustriale");
        this.varcat = 7;
        this.getProducts();
      } else if (Abitazioneinstilecontemporaneo.checked) {
        this.varcat = "";
        console.log("Abitazioneinstilecontemporaneo");
        this.varcat = 8;
        this.getProducts();
      } else if (villainstileromano.checked) {
        this.varcat = "";
        console.log("villainstileromano");
        this.varcat = 9;
        this.getProducts();
      }
    },
  },
  mounted() {
    this.getCategories();
    this.getServices();
    this.initSearchBox();
  },
  computed: {
    rows() {
      return this.array2.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.results-list {
  border: 1px solid $darkgrey;
  border-radius: 20px;
  padding: 30px 20px;
  z-index: 1000;
  background-color: $white;
  position: relative;
  top: 0px;
}

.card-container {
  width: 100%;
}

.bottom-layer {
  position: absolute;
  left: 0;
  top: 80px;
  width: 100%;
  height: 40px;
  background-color: $raindrop;
  z-index: -1;
}
.filter-list {
  padding-left: 25px;
}

h3 {
  font-weight: bold;
}

.page-title {
  hr {
    width: 40%;
    margin-left: 30%;
    margin-bottom: 50px;
  }
}

h4 {
  color: $sangria;
  margin: 30px 0;
  font-weight: bold;
}
input[type="radio"] {
  margin-right: 8px;
}

input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2.2px;
  left: -1px;
  position: relative;
  background-color: #d1d3d1;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2.2px;
  left: -1px;
  position: relative;
  background-color: $rosegold;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[type="checkbox"] {
  accent-color: $rosegold;
  margin-right: 8px;
}

@media (max-width: 600px) {
  //   input {
  //     position: absolute;
  //     opacity: 0;
  //     cursor: pointer;
  //     z-index: 100;
  //     left: 0;
  //     height: 40px;
  //     width: 40px;
  //     border-radius: 50%;
  //   }

  // style navbar mobile
  //   .checkmark {
  //     position: absolute;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     top: 0;
  //     left: 0;
  //     height: 40px;
  //     width: 40px;
  //     border-radius: 50%;
  //     background-color: $white;
  //     border: 4px solid $grey;
  //   }
  //   .checkedicon {
  //     font-size: 1.2rem;
  //     // display: none;
  //     color: $grey;
  //     text-align: center;
  //     transition: all 200ms;
  //   }

  //   .emerald input:checked ~ .checkmark {
  //     background-color: $emerald;
  //     border: 4px solid $emerald;
  //   }
}
</style>

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
          <div
            class="card-container"
            v-if="this.array3.length == 0 && this.varcat == 0"
            v-for="(item, index) in array2"
            :key="index"
          >
            <CardComponent :apartament="item"></CardComponent>
            <hr class="my-4" />
          </div>

          <!-- se non ci sono risultati: -->
          <div v-else-if="this.array3.length == 0">
            <h4>Nessun risultato</h4>
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
        </div>

        <!-- colonna filtri -->
        <div class="filter-list col-12 col-md-4 pt-4">
          <div class="page-title text-center">
            <h3>Ricerca avanzata</h3>
            <hr />
          </div>

          <h4>Scegli una destinazione:</h4>
          <div id="search" class="my-3"></div>

          <h4>Distanza dal centro:</h4>
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

          <h4>Tipo di alloggio:</h4>

          <ul class="category d-flex flex-wrap gap-3">
            <li v-for="(category, index) in categories" :key="index">
              <input type="radio" name="categoria" :id="category.slug" />
              <label :for="category.slug">{{ category.name }}</label>
            </li>
          </ul>

          <h4>Servizi aggiuntivi:</h4>
          <ul class="services d-flex flex-wrap gap-3">
            <li v-for="(service, index) in services">
              <input type="checkbox" :name="service.title" :id="service.slug" />
              <label :for="service.slug">{{ service.title }}</label>
            </li>
          </ul>

          <h4>Stanze:</h4>
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

          <h4>Letti:</h4>
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
          key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
          language: "it-IT",
          limit: 5,
        },
        autocompleteOptions: {
          key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
          language: "it-IT",
        },
        noResultsMessage: "No results found.",
      },
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
    // initSearchBoxsmart() {
    //   // let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
    //   let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
    //   // console.log(ttSearchBox);

    //   let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
    //   document.getElementById("searchsmart").appendChild(searchBoxHTML);
    //   // console.log(searchBoxHTML);

    //   ttSearchBox.on("tomtom.searchbox.resultsfound", function (data) {
    //     // console.log(data);
    //   });

    //   ttSearchBox.on("tomtom.searchbox.resultselected", (data) => {
    //     console.log(data);
    //     let lat = data.data.result.position.lat;
    //     this.latitudine = lat;
    //     //      console.log("latitudine", this.latitudine);

    //     let lng = data.data.result.position.lng;
    //     this.longitudine = lng;
    //     //     console.log("longitudine", this.longitudine);

    //     this.getProducts();
    //     this.array2 = [];
    //   });
    //},
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
  },
  mounted() {
    this.getCategories();
    this.getServices();
    this.initSearchBox();
    // this.initSearchBoxsmart();
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
</style>

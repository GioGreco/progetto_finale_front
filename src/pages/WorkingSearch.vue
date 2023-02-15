<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>

  <main>
    <!-- main diviso in risultati + filtri -->
    <div class="container maincont">
      <div class="row">
        <div class="results-list col-12 col-md-8">
          <div class="col" v-for="(item, index) in array1" :key="index">
            <CardComponent :apartament="item"></CardComponent>
          </div>
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
    initSearchBoxsmart() {
      // let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
      let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
      // console.log(ttSearchBox);

      let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
      document.getElementById("searchsmart").appendChild(searchBoxHTML);
      // console.log(searchBoxHTML);

      ttSearchBox.on("tomtom.searchbox.resultsfound", function (data) {
        // console.log(data);
      });

      ttSearchBox.on("tomtom.searchbox.resultselected", (data) => {
        console.log(data);
        let lat = data.data.result.position.lat;
        this.latitudine = lat;
        //      console.log("latitudine", this.latitudine);

        let lng = data.data.result.position.lng;
        this.longitudine = lng;
        //     console.log("longitudine", this.longitudine);

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
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
</style>

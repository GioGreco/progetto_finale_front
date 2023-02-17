<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>

  <main>
    <!-- main diviso in risultati + filtri -->
    <div class="container py-5">
      <div class="bottom-layer"></div>
      <div class="row">
        <!-- comparsa filtri in alto in mobile e a sx in desktop -->

        <div class="filter-list col-md-4 pt-4">
          <div class="d-none d-md-block page-title text-center">
            <h3>Ricerca avanzata</h3>
            <hr />
          </div>

          <!-- contenitore nav a scomparsa mobile ? -->

          <h4 class="d-none d-md-block">Scegli una destinazione:</h4>
          <div id="search" class="my-3"></div>

          <div id="navheig">
            <h4 class="d-none d-md-block">Distanza dal centro:</h4>
            <input
              @change="setKilometers2"
              type="range"
              class="d-block mb-md-3 mt-md-4"
              id="range"
              name="range"
              min="5"
              max="100"
              value="20"
              oninput="this.nextElementSibling.value = this.value"
            />
            <output>20</output> km
            <h4>Tipo di alloggio:</h4>
            <ul class="category d-flex flex-wrap gap-3 my-4">
              <li
                class="rosegold"
                v-for="(category, index) in categories"
                :key="index"
              >
                <input
                  @click="setCategories(category.id)"
                  type="radio"
                  name="categoria"
                  :id="'category_' + category.id"
                />
                <label :for="category.slug" class="d-none d-md-inline-block">{{
                  category.name
                }}</label>
                <!-- versione mobile: -->
                <span class="d-block d-md-none checkmark2">
                  <span class="checkedicon" v-html="category.img"></span>
                </span>
              </li>
            </ul>
            <h4>Servizi aggiuntivi:</h4>
            <ul class="d-flex flex-wrap gap-3 my-4">
              <li class="rosegold" v-for="(service, index) in services">
                <input
                  type="checkbox"
                  :name="service.title"
                  :id="'service_' + service.id"
                  @click="setServices(service.id)"
                />
                <label :for="service.title" class="d-none d-md-inline-block">{{
                  service.title
                }}</label>
                <!-- versione mobile: -->
                <span class="d-block d-md-none checkmark3">
                  <span class="checkedicon2" v-html="service.img"></span>
                </span>
              </li>
            </ul>
            <h4>Stanze:</h4>
            <ul class="stanze d-flex gap-3 my-4">
              <li>
                <input
                  @click="setRooms"
                  type="radio"
                  name="stanze"
                  id="rooms1-3"
                />
                <label for="tre">1-3</label>
              </li>
              <li>
                <input
                  @click="setRooms"
                  type="radio"
                  name="stanze"
                  id="rooms4-6"
                />
                <label for="seii">4-6</label>
              </li>
              <li>
                <input
                  @click="setRooms"
                  type="radio"
                  name="stanze"
                  id="rooms7-9"
                />
                <label for="nove">7-9</label>
              </li>
              <li>
                <input
                  @click="setRooms"
                  type="radio"
                  name="stanze"
                  id="rooms10"
                />
                <label for="moltii">10+</label>
              </li>
            </ul>
            <h4>Posti letto:</h4>
            <ul class="beds d-flex gap-3 my-4">
              <li>
                <input @click="setBeds" type="radio" name="beds" id="beds1-2" />
                <label for="due">1-2</label>
              </li>
              <li>
                <input @click="setBeds" type="radio" name="beds" id="beds3-4" />
                <label for="quattro">3-4</label>
              </li>
              <li>
                <input @click="setBeds" type="radio" name="beds" id="beds5-6" />
                <label for="sei">5-6</label>
              </li>
              <li>
                <input @click="setBeds" type="radio" name="beds" id="beds7" />
                <label for="molti">7+</label>
              </li>
            </ul>
          </div>

          <div class="btnopen">
            <div class="contain3">
              <input
                @click="functionOpener3()"
                type="checkbox"
                name="filter_open_closer"
                id="filter_open_closer"
              />
              <span class="checkmark3down"
                ><i class="fa-solid fa-chevron-down"></i
              ></span>
              <span class="checkmark3upper"
                ><i class="fa-solid fa-chevron-up"></i
              ></span>
            </div>
          </div>
        </div>

        <div class="results-list col-12 col-md-8">
          <!-- se non si è ancora effettuata nessuna ricerca: -->
          <div
            v-if="this.array2.length == 0 && this.sponsored.length == 0"
            class="col-md-8"
          >
            <h1 class="d-none d-md-block">Cerca un appartamento</h1>
            <div class="bg-icon d-none d-md-block">
              <i class="fa-solid fa-earth-americas"></i>
            </div>
          </div>

          <!-- risultati per solo filtro città: -->
          <div>
            <div
              class="card-container sponsored"
              v-show="this.sponsored.length > 0"
              v-for="(item, index) in sponsored"
              :key="index"
            >
              <CardCarousel :apartament="item"> </CardCarousel>
              <div class="d-flex justify-content-end">
                Contenuto sponsorizzato
              </div>
              <hr class="mt-2 mb-5" />
            </div>

            <div
              class="card-container"
              v-if="this.array2.length > 0"
              v-for="(item, index) in array2"
              :key="index"
            >
              <CardComponent id="my-cards" :apartament="item"></CardComponent>
              <hr class="my-4" />
            </div>

            <!-- se non ci sono risultati: -->
            <div v-if="this.array2.length == 0 && this.varcat != null">
              <h5 class="mt-5">
                Purtroppo al momento non sono disponibili soluzioni
                corrispondenti alla tua ricerca.
              </h5>
            </div>
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
import FilterLargeComponent from "../components/FilterLargeComponent.vue";
import CardCarousel from "../components/Homepage/CardCarousel.vue";

export default {
  name: "AdvancedSearchPage",
  components: {
    HeaderComponent,
    CardComponent,
    FilterLargeComponent,
    CardCarousel,
  },
  data() {
    return {
      store,
      varroom: "",
      varkm: "20", //base 20km
      varcat: null,
      distanza: "",
      categories: [],
      services: [],
      filteredServices: [],
      filteredServicesVerification: [],
      servicesWaitingRoom: [],
      minRooms: null,
      minBeds: null,
      maxBeds: null,
      array1: [],
      array2: [],
      array3: [],
      sponsored: [],
      noresults: false,
      loading: true,
      latitudine: "",
      longitudine: "",
      options: {
        idleTimePress: 100,
        minNumberOfCharacters: 0,
        searchOptions: {
          key: "h7cAdo65F2uuetiST0o1pnUygRaWDuuX",
          language: "it-IT",
          limit: 5,
        },
        autocompleteOptions: {
          key: "h7cAdo65F2uuetiST0o1pnUygRaWDuuX",
          language: "it-IT",
        },
        noResultsMessage: "No results found.",
      },
    };
  },
  methods: {
    functionOpener3() {
      document.getElementById("filter_open_closer").onchange = (a) => {
        let checked = a.target.checked;
        if (checked) {
          document.getElementById("navheig").style.opacity = "1";
          document.getElementById("navheig").style.height = "630px";
        } else {
          document.getElementById("navheig").style.opacity = "0";
          document.getElementById("navheig").style.height = "0px";
        }
      };
    },
    setKilometers2() {
      let range = document.getElementById("range");
      console.log(parseInt(range.value));
      this.varkm = parseInt(range.value);
      this.array2 = [];
      this.getProducts();
    },
    setCategories(category) {
      let addCategory = document.getElementById(`category_${category}`);
      console.log(addCategory);

      if (addCategory.checked) {
        this.varcat = category;
        this.getProducts();
      }
    },
    setServices(service) {
      let addService = document.getElementById(`service_${service}`);
      console.log(addService);
      if (addService.checked) {
        let serviceArr = { ...this.services.filter((el) => el.id == service) };
        let serviceObj = serviceArr[0];
        this.filteredServices.push(serviceObj.id);
        this.getProducts();
        // this.filtriServizi();
      } else if (!addService.checked) {
        let serviceArr = { ...this.services.filter((el) => el.id == service) };
        let serviceObj = serviceArr[0];
        this.filteredServices.splice(
          this.filteredServices.indexOf(serviceObj),
          1
        );
        // this.filtriServizi();
        this.getProducts();
      }
      console.log(this.filteredServices);
    },
    setRooms() {
      const rooms3 = document.getElementById("rooms1-3");
      const rooms6 = document.getElementById("rooms4-6");
      const rooms9 = document.getElementById("rooms7-9");
      const rooms00 = document.getElementById("rooms10");

      rooms3.checked ? (this.minRooms = 2) : "";
      rooms6.checked ? (this.minRooms = 5) : "";
      rooms9.checked ? (this.minRooms = 8) : "";
      rooms00.checked ? (this.minRooms = 10) : "";

      // rooms00.checked ? this.minRooms = 3 : '';

      console.log(this.minRooms);
      this.getProducts();
    },
    setBeds() {
      const beds3 = document.getElementById("beds1-2");
      const beds6 = document.getElementById("beds3-4");
      const beds9 = document.getElementById("beds5-6");
      const beds00 = document.getElementById("beds7");

      beds3.checked ? (this.minBeds = 2) : "";
      beds6.checked ? (this.minBeds = 4) : "";
      beds9.checked ? (this.minBeds = 6) : "";
      beds00.checked ? (this.minBeds = 7) : "";

      console.log(this.minBeds);
      this.getProducts();
    },
    functionOpener() {
      document.getElementById("filter_open_closer").onchange = (e) => {
        let checked = e.target.checked;
        if (checked) {
          document.getElementById("smartnavop").style.opacity = "1";
          document.getElementById("smartnavop").style.height = "269px";
        } else {
          document.getElementById("smartnavop").style.opacity = "0";
          document.getElementById("smartnavop").style.height = "0px";
        }
      };
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
        // this.array2 = [];
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
      //                 console.log('distanza variabile globale',this.distanza);
      // return dist;
    },
    getProducts() {
      axios.get(`${this.store.apiBaseUrl}/apartments`).then((res) => {
        this.array1 = [];
        this.array2 = [];
        this.array1 = res.data.results; //array 1 chiamata tutti gli appartamenti axios
        this.array1.forEach((item) => {
          let lat2 = item.lat;
          let long2 = item.long;

          this.getLatLongDist(lat2, long2);
          if (this.distanza <= this.varkm) {
            this.array2.push(item);
          }
        });
        console.log(this.array2);
        //filter by category
        if (!(this.varcat == null)) {
          console.log("sei entrato nel filtro Categoria");
          this.array2 = this.array2.filter(
            (item) => item.category_id == this.varcat
          );
        }
        //filter by services
        if (this.filteredServices.length > 0) {
          console.log("sei entrato nel filtro Servizi");
          // this.array2 = this.filterServices(this.array2, this.filteredServices);
          this.array2.forEach((item) => {
            this.filteredServicesVerification = [];
            item.services.forEach((el) => {
              this.filteredServicesVerification.push(el.id);
            });
            // console.log(this.filteredServices);
            // console.log(this.filteredServices);
            // console.log(this.filteredServicesVerification);
            let verification = this.filteredServices.every((elem) =>
              this.filteredServicesVerification.includes(elem)
            );
            // console.log(verification);
            if (verification) {
              this.servicesWaitingRoom.push(item);
            }
          });
          console.log(this.servicesWaitingRoom);
          this.array2 = this.servicesWaitingRoom;
          this.servicesWaitingRoom = [];
        }

        //filter by rooms
        if (!(this.minRooms == null) && this.minRooms < 10) {
          console.log("sei entrato nel filtro Camere");
          console.log(this.array2);
          this.array2 = this.array2.filter(
            (item) =>
              item.room_number == this.minRooms ||
              item.room_number == this.minRooms + 1 ||
              item.room_number == this.minRooms - 1
          );
        } else if (this.minRooms == 10) {
          this.array2 = this.array2.filter(
            (item) => item.room_number >= this.minRooms
          );
        }

        //filter by beds
        if (!(this.minBeds == null) && this.minBeds < 7) {
          console.log("sei entrato nel filtro Letti");
          console.log(this.array2);
          this.array2 = this.array2.filter(
            (item) =>
              item.bed_number == this.minBeds ||
              item.bed_number == this.minBeds - 1
          );
        } else if (this.minBeds == 7) {
          this.array2 = this.array2.filter(
            (item) => item.bed_number >= this.minBeds
          );
        }

        if (this.array2.length == 0) {
          this.noresults = true;
        }
        this.getFilteredSponsored();
        this.loading = false;
      });
    },
    getFilteredSponsored() {
      //applica i filtri agli sponsorizzati e li rimuove dall'array2 per non farli visualizzare due volte in pagina
      this.sponsored = [];
      this.sponsored = this.array2.filter((item) => item.sponsors.length > 0);
      this.array2 = this.array2.filter((item) => !(item.sponsors.length > 0));
      // this.array2.forEach((item) => {
      //   if (item.sponsors.length > 0) {
      //     item.sponsors.forEach((el) => {
      //       // console.log(el);
      //       if (el.id == 1 || el.id == 2 || el.id == 3) {
      //         this.sponsored.push(item);
      //         const itemIndex = this.array2.indexOf(item);
      //         const deleted = this.array2.splice(itemIndex, 1);
      //       }
      //     });
      //   }
      //   // console.log(item.sponsors);
      // });
      console.log(this.sponsored);
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
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.results-list {
  padding: 30px 20px;
  background-color: $white;
  position: relative;
  top: 0px;
}

@media screen and (max-width: 800px) {
  #navheig {
    overflow: hidden;
    height: 0px;
    transition: ease-in-out 250ms all;
  }
}

@media screen and (min-width: 800px) {
  .btnopen {
    display: none;
  }
}

//classi bottone opener
.btnopen {
  height: 20px;
  width: 300px;
  margin: 0 auto;
  padding: 0;
  border-radius: 0px 0px 20px 20px;
  transition: all 200ms;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);
  a {
    color: $grey;
    width: 100%;
  }
  .contain3 {
    justify-content: center;
    height: 20px;
    width: 100%;
    display: flex;
    position: relative;
    // border-radius: 50%;
    background-color: $emerald;
    transition: all 200ms;

    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    #filter_open_closer {
      opacity: 0;
      cursor: pointer;
      z-index: 100;
      left: 0;
      height: 300px;
      width: 300px;
    }

    .checkmark3down {
      position: absolute;
      left: auto;
      top: -2px;
      color: $white;
      transition: all 200ms;
    }
    .checkmark3upper {
      position: absolute;
      left: auto;
      top: -2;
      opacity: 0;
      color: $white;
      transition: all 200ms;
    }
  }
}

.contain3 input:checked ~ .checkmark3upper {
  opacity: 1;
}
.contain3 input:checked ~ .checkmark3down {
  opacity: 0;
}

.results-wrapper {
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
  transition: ease-in-out 200ms;
  animation-name: cardapartment;
  animation-duration: 1s;
}

@keyframes cardapartment {
  0% {
    opacity: 0;
    width: 500px;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
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
  padding-right: 25px;
  border-right: 1px solid $raindrop;
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

// style range

input[type="range"] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 60%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: $sangria;
  border-radius: 4px;
  border: 0px solid #000000;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid $rosegold;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: $rosegold;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: $sangria;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: $rosegold;
  border-radius: 4px;
  border: 0px solid #000000;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid $rosegold;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: $rosegold;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: $rosegold;
  border: 0px solid #000000;
  border-radius: 4px;
  box-shadow: 0px 0px 0px #000000;
}
input[type="range"]::-ms-fill-upper {
  background: $rosegold;
  border: 0px solid #000000;
  border-radius: 4px;
  box-shadow: 0px 0px 0px #000000;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid $rosegold;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: $rosegold;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: $rosegold;
}
input[type="range"]:focus::-ms-fill-upper {
  background: $rosegold;
}
.bg-icon {
  i {
    position: absolute;
    color: #afbdbb70;
    font-size: 20rem;
    top: 40%;
    left: 50%;
    transform: translate(-40%, -50%);
  }
}

@media (max-width: 600px) {
  .beds,
  .stanze {
    label {
      font-size: 1.5rem;
    }
  }

  //style navabar mobile Fra:
  .rosegold {
    //contenitore
    height: 35px;
    width: 35px;
    display: flex;
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
      //input
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 100;
      left: 0;
      height: 35px;
      width: 35px;
      border-radius: 50%;
    }
    .checkmark2,
    .checkmark3 {
      //contenitore span
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      background-color: $white;
      border: 4px solid $grey;
      text-align: center;
    }

    .checkmark3 {
      padding-top: 3px;
    }
    .checkedicon,
    .checkedicon2 {
      //span contenitore icona
      font-size: 1rem;
      color: $grey;
      text-align: center;
      transition: all 200ms;
    }
  }

  .rosegold input:checked ~ .checkmark2 {
    background-color: $rosegold;
    border: 4px solid $rosegold;
  }

  .rosegold input:checked ~ .checkmark3 {
    background-color: $rosegold;
    border: 4px solid $rosegold;
  }

  .rosegold input:checked ~ .checkmark2 > .checkedicon {
    display: block;
    color: $white;
  }
  .rosegold input:checked ~ .checkmark3 > .checkedicon2 {
    display: block;
    color: $white;
  }
  .btnopen {
    height: 20px;
    width: 300px;
    margin: 0 auto;
    padding: 0;
    border-radius: 0px 0px 20px 20px;
    transition: all 200ms;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0);
    a {
      color: $grey;
      width: 100%;
    }
  }
  .checkmark3down {
    position: absolute;
    left: auto;
    top: -2px;
    color: $white;
    transition: all 200ms;
  }
  .checkmark3upper {
    position: absolute;
    left: auto;
    top: -2;
    opacity: 0;
    color: $white;
    transition: all 200ms;
  }
}
</style>

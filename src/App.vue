<template>
  <header>
    <NavbarComponent></NavbarComponent>
  </header>
  <main>
    <RouterView @filteredApartments="getApartments" />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import { store } from "./store";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import axios from "axios";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApartments() {
      let options = null;
      options = {
        params: {
          cityEndpoint: store.cityEndpoint,
          key: store.key,
          query: store.searchedCity,
        },
      };

      const encodedAddress = encodeURIComponent(this.query);
      axios
        .get(
          `https://api.tomtom.com/search/2/geocode/${encodedAddress}.json`,
          options
        )
        .then((response) => {
          // console.log(response.data);
          //prendere appartamenti le cui lat e long sono uguali a quelle della città cercata (elemento 0 dell'array dei risultati): - aspettare rotte api per appartamenti
          store.apartmentsList = response.data.results[0];
          console.log(store.apartmentsList);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <router-link :to="`/apartment/${apartament.slug}`">
    <div class="card-item d-flex">
      <div class="col-4">
        <img
          :src="`${store.imgBasePath}${apartament.cover_img}`"
          :alt="apartament.title"
        />
      </div>

      <div class="info col-8 ps-4">
        <h4>
          <strong>{{ apartament.title }}</strong>
        </h4>
        <p class="utilities fs-5">
          <span>{{ apartament.room_number }} camere &bull;</span>
          <span class="ps-2">{{ apartament.bath_number }} bagni &bull;</span>
          <span class="ps-2">{{ apartament.bed_number }} posti letto</span>
        </p>
        <div>{{ apartament.address }}</div>
        <div class="cancellazione my-3">
          <i class="fa-solid fa-shield-halved pe-2"></i>Cancellazione gratuita
        </div>
        <div class="price d-flex justify-content-end pe-2">
          {{ apartament.price }} euro
          <span class="regular-txt ms-2">/ notte</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { store } from "../../store";

export default {
  name: "CardComponent",
  props: {
    apartament: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;

.card-item {
  width: 100%;
}

img {
  height: 200px;
  width: 100%;
  background-size: cover;
}

.info {
  color: $dark;
}

.cancellazione {
  color: $emerald;
  font-weight: bold;
  i {
    color: $raindrop;
  }
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
}
.regular-txt {
  font-weight: normal;
}
</style>

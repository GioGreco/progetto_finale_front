<template>
  <router-link class="btn ps-0" :to="`/apartment/${apartament.slug}`">
    <div class="card-item">
      <div class="item-inner">
        <img
          :src="`${store.imgBasePath}${apartament.cover_img}`"
          :alt="apartament.title"
        />
        <div class="paid-content rounded-pill">
          <i class="fa-solid fa-arrow-trend-up"></i>
        </div>
        <div class="info">
          <h4>
            <strong>{{ apartament.title }}</strong>
          </h4>
          <div>{{ apartament.address }}</div>
          <div class="price">{{ apartament.price }} euro / notte</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { store } from "../../store";

export default {
  name: "CardCarousel",
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
  height: 400px;
  width: 80%;
  .item-inner {
    width: 280px;
    height: 100%;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .paid-content {
      position: absolute;
      top: 15px;
      right: 10px;
      background-color: $emerald;
      padding: 4px 8px;
      color: $white;
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 15px 20px;
      width: 100%;
      color: $white;
      font-weight: bolder;
      font-size: larger;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: left;
    }
  }
}

@media (min-width: 600px) {
  .card-item {
    .item-inner {
      width: 600px;
    }
  }
}
</style>

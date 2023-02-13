<template>
  <router-link
    class="btn"
    :to="{ name: 'apartment', params: { slug: apartment.slug } }"
  >
    <div class="card-item col-8">
      <div class="item-inner">
        <img
          :src="`${store.imgBasePath}${apartment.cover_img}`"
          :alt="apartment.title"
        />
        <div class="paid-content rounded-pill">
          <i class="fa-solid fa-bullhorn"></i>
        </div>
        <div class="info">
          <h4>{{ apartment.title }}</h4>
          <p>{{ apartment.address }}</p>
          <div>
            <span class="price">{{ apartment.price }} /</span>notte
          </div>
        </div>
        <div class="layover"></div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { store } from "../store";

export default {
  name: "CardCarousel",
  props: {
    apartment: Object,
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
  width: 60%;
  .item-inner {
    height: 100%;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    .layover {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.206);
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .paid-content {
      position: absolute;
      top: 15px;
      right: 10px;
      background-color: bisque;
      padding: 4px 8px;
      color: $white;
    }
    .info {
      position: absolute;
      bottom: 15px;
      left: 15px;
      color: $white;
      font-weight: bolder;
      font-size: larger;
    }
  }
}
</style>

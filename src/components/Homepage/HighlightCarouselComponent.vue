<template>
  <div id="highlight-carousel">
    <div
      ref="box"
      class="cards-container"
      @mouseover="stopAutoplay"
      @mouseleave="autoplay"
    >
      <!-- <button class="slider-btn prev">
        <i class="fa-solid fa-angle-left"></i>
      </button> -->
      <div class="d-flex">
        <div class="col px-0" v-for="(item, index) in sponsored" :key="index">
          <CardCarousel :apartament="item"></CardCarousel>
        </div>
      </div>
      <!-- <button class="slider-btn next">
        <i class="fa-solid fa-angle-right"></i>
      </button> -->
    </div>
  </div>
</template>

<script>
import CardCarousel from "./CardCarousel.vue";
import { store } from "../../store";
import axios from "axios";

export default {
  name: "HighlightCarouselComponent",
  components: { CardCarousel },
  props: {
    apartament: Object,
  },
  data() {
    return {
      store,
      apartaments: [],
      sponsored: [],
      autoscroll: 0,
    };
  },
  methods: {
    getSponsored() {
      axios.get(`${this.store.apiBaseUrl}/apartments`).then((res) => {
        this.apartaments = res.data.results;
        this.apartaments.forEach((item) => {
          // console.log(item.sponsors);
          item.sponsors.forEach((el) => {
            // console.log(el);
            if (el.id == 1 || el.id == 2 || el.id == 3) {
              this.sponsored.push(item);
            }
          });
          // console.log(this.sponsored);
        });
      });
    },
    scrollR() {
      const element = this.$refs.box;
      if (element != null) {
        element.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      }
    },
    autoplay() {
      this.autoscroll = setInterval(() => {
        this.scrollR();
      }, 2000);
    },
    stopAutoplay() {
      clearInterval(this.autoscroll);
      this.autoscroll = null;
    },
  },
  mounted() {
    this.getSponsored();
    this.autoplay();
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;

//style carousel

#highlight-carousel {
  width: 100%;
  margin: 0 auto;
}

.cards-container {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-x: auto;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.slider-btn {
  position: absolute;
  top: 50%;
  background-color: transparent;
  border-style: none;
  font-size: 2rem;
  font-weight: bold;
  color: $white;
}

.prev {
  left: 0;
  z-index: 2000;
}
.next {
  right: 0;
}
</style>

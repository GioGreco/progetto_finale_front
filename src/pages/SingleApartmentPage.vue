<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>
  <div v-if="success" id="show-mobile">
    <div>
      <div class="cover-img">
        <img :src="this.store.imgBasePath + apartment.cover_img" alt="" />
      </div>
      <div class="address">
        <h1 class="fw-bold">{{ apartment.title }}</h1>
        <p class="utilities fs-5">
          <span>{{ apartment.room_number }} camere</span>
          <span>{{ apartment.bath_number }} bagni</span>
          <span>{{ apartment.bed_number }} posti letto</span>
        </p>
        <div class="d-flex justify-content-between">
          <div class="fs-5">
            <i class="fa-solid fa-location-dot"></i> {{ apartment.address }}
          </div>
          <div class="price">
            <h2>
              <span>{{ apartment.price }}</span> € / notte
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="gallery">
        <div class="d-flex justify-content-between gallery-tit">
          <h2 class="fw-bold">Galleria</h2>
        </div>
        <div class="img" v-if="apartment.mediabooks.length == 0">
          <p>Nessuna foto caricata</p>
        </div>
        <div class="pics row" v-else>
          <div class="pics-wrap" v-for="el in apartment.mediabooks">
            <img :src="this.store.imgBasePath + el.img" alt="" />
          </div>
        </div>
      </div>
      <div class="description">
        <h2 class="fw-bold">Descrizione</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          voluptate ratione vero, accusamus aliquam iure quo quia quam fugiat
          tenetur beatae repellat magnam. Magni accusamus, quos cupiditate ad
          voluptates vel nisi ab aliquam esse architecto ullam molestias, qui,
          quidem in!
        </div>
      </div>
      <div class="services-mobile">
        <h2 class="fw-bold mb-3">Servizi</h2>
        <div class="d-flex flex-wrap">
          <div
            v-for="(service, index) in apartment.services"
            :key="index"
            class="col-6 mb-3"
          >
            <span v-html="service.img"></span><span>{{ service.title }}</span>
          </div>
        </div>
      </div>
      <div class="location my-4">
        <MapComponent :apartmentLocation="apartment" />
      </div>
      <div class="contact-form-mobile mb-5">
        <div
          class="contact-inner d-flex flex-column justify-content-between align-items-center"
        >
          <h3 class="text-white">Necessiti di più informazioni?</h3>
          <p class="m-0">
            Non esitare a contattare l'host nel caso tu abbia domande
            sull'alloggio, la zona o i servizi offerti.
          </p>
          <span>Clicca qui per inviare un messaggio</span>
          <Transition name="contactFX">
            <div class="mail-form my-3 w-100" v-if="showContactForm">
              <ContactFormComponent :apartmentId="apartment.id" />
            </div>
          </Transition>
          <div @click="showContactForm = !showContactForm" class="showFormBtn">
            <i v-if="!showContactForm" class="fa-regular fa-envelope"></i>
            <i v-else class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="success" id="show-desktop">
    <div class="img text-center mt-5" v-if="apartment.mediabooks.length == 0">
      <img :src="this.store.imgBasePath + apartment.cover_img" alt="" />
    </div>
    <div class="photo-album" v-else>
      <div class="pic-row d-flex justify-content-between">
        <div class="pic-wrap" v-for="el in apartment.mediabooks">
          <img :src="this.store.imgBasePath + el.img" alt="" />
        </div>
      </div>
      <div class="bottom-layer"></div>
    </div>
    <div class="apartment-info row g-0 fs-5">
      <div class="info-left col-12 col-md-6">
        <h2>{{ apartment.title }}</h2>
        <p class="utilities fs-5">
          <span>{{ apartment.room_number }} camere</span>
          <span>{{ apartment.bath_number }} bagni</span>
          <span>{{ apartment.bed_number }} posti letto</span>
        </p>
        <div class="description">
          <p>{{ apartment.descrizione }}</p>
        </div>
      </div>
      <div
        class="info-right col-12 col-md-6 d-flex flex-column align-items-end justify-content-between"
      >
        <h2 class="price">
          <span>{{ apartment.price }}</span> € / notte
        </h2>
        <div class="specs">
          <div class="category">
            <i class="fa-solid fa-city me-2 fs-4"></i>
            <span>{{ apartment.category.name }}</span>
          </div>
          <!-- <div class="rating my-2">
                        <i class="fa-solid fa-star me-2 fs-4"></i> <span>5 recensioni</span>
                    </div> -->
          <div class="address">
            <i class="fa-solid fa-location-dot me-2 fs-4"></i>
            <span>{{ apartment.address }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="map-position">
      <MapComponent :apartmentLocation="apartment" />
    </div>
    <div class="row g-0 container mx-auto">
      <div class="services col-12 col-md-6">
        <h3 class="mb-4">A tua disposizione :</h3>
        <div class="row">
          <div
            v-for="(service, index) in apartment.services"
            :key="index"
            class="col-6"
          >
            <span v-html="service.img"></span><span>{{ service.title }}</span>
          </div>
        </div>
      </div>
      <div class="contact-form col-12 col-md-6">
        <div
          class="contact-inner d-flex flex-column justify-content-between align-items-center"
        >
          <h3 class="text-white">Necessiti di più informazioni?</h3>
          <p class="m-0">
            Non esitare a contattare l'host nel caso tu abbia domande
            sull'alloggio, la zona o i servizi offerti.
          </p>
          <span>Clicca qui per inviare un messaggio</span>
          <Transition name="contactFX">
            <div class="mail-form my-3 w-100" v-if="showContactForm">
              <ContactFormComponent :apartmentId="apartment.id" />
            </div>
          </Transition>
          <div @click="showContactForm = !showContactForm" class="showFormBtn">
            <i v-if="!showContactForm" class="fa-regular fa-envelope"></i>
            <i v-else class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
import MapComponent from "@/components/Map/MapComponent.vue";
import ContactFormComponent from "@/components/Mails/ContactFormComponent.vue";

export default {
  name: "SingleApartmentPage",
  components: {
    HeaderComponent,
    MapComponent,
    ContactFormComponent,
  },
  data() {
    return {
      store,
      apartment: {},
      success: false,
      showContactForm: false,
    };
  },
  methods: {
    getProduct() {
      axios
        .get(`${store.apiBaseUrl}/apartments/${this.$route.params.slug}`)
        .then((response) => {
          if (response.data.success) {
            this.apartment = response.data.results;
            console.log(this.apartment);
            this.success = true;
          } else {
            this.$router.push({ name: "not-found" });
          }
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="scss">
@use "@/assets/styles/partials/_variables.scss" as *;

#show-mobile {
  display: none;
  overflow: hidden;
  h2 {
    color: $sangria;
  }

  .cover-img {
    width: 100vw;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .address {
    width: 90vw;
    padding: 30px 0;
    margin: 0 auto;
    border-bottom: 1px solid $darkgrey;
    .utilities {
      span {
        &:not(:last-of-type)::after {
          content: "";
          display: inline-block;
          height: 5px;
          width: 5px;
          border-radius: 50%;
          background-color: $sangria;
          margin: 0 5px 2px;
        }
      }
    }
  }

  .gallery {
    padding: 30px 0;
    .gallery-tit {
      width: 90vw;
      margin: 0 auto 10px;
    }
    .pics {
      margin-left: 10px;
      flex-wrap: nowrap;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .pics-wrap {
        width: 40vw;
        height: 15vh;
        margin: 0 5px;
        border-radius: 10px;
        // overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }

  .description {
    width: 90vw;
    margin: 0 auto 25px;
  }
  .services-mobile {
    width: 90vw;
    margin: 0 auto;
    span {
      font-size: 1.2rem;
      i {
        border: 2px solid $mauve;
        border-radius: 50%;
        text-align: center;
        line-height: 26px;
        font-size: 0.9rem;
        color: $mauve;
        height: 30px;
        width: 30px;
        margin-right: 8px;
      }
    }
  }

  .contact-form-mobile {
    width: 90vw;
    margin: 0 auto;
    font-size: 1.1rem;
    .contact-inner {
      background-color: $mauve;
      padding: 20px;
      height: 100%;
      border-radius: 20px;
      text-align: center;
      color: $sangria;
      transition: all 5s ease;

      h5 {
        border-bottom: 1px solid white;
        padding-bottom: 3px;
        width: 85%;
      }
      span {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
      .mail-form {
      }
      .showFormBtn {
        font-size: 2rem;
        color: $sangria;
        background-color: $rosegold;
        margin-top: 15px;
        padding: 2px 25px;
        border-radius: 30px;
        cursor: pointer;
        &:hover {
          background-color: $sangria;
          color: $white;
        }
      }
    }
  }

  .price {
  }
}
.photo-album {
  height: 400px;
  position: relative;
  margin-bottom: 15px;
  .pic-row {
    height: 100%;
    padding: 0 50px;
    .pic-wrap {
      height: 100%;
      margin: 0 10px;
      width: calc((100% - 200px) / 4);
      cursor: pointer;
      transition: width 0.8s ease-in-out;

      &:hover {
        width: 700px;
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .bottom-layer {
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 100%;
    height: 30px;
    background-color: $raindrop;
    z-index: -1;
  }
}

.apartment-info {
  .info-left {
    padding: 60px 100px;
    h2 {
      color: $sangria;
      font-weight: bolder;
    }
    .utilities {
      span {
        &:not(:last-of-type)::after {
          content: "";
          display: inline-block;
          height: 5px;
          width: 5px;
          border-radius: 50%;
          background-color: $sangria;
          margin: 0 5px 2px;
        }
      }
    }
  }
  .info-right {
    padding: 60px 100px;
    i {
      color: $emerald;
    }
    .price {
      color: $emerald;
      font-weight: bolder;
      font-size: 2.3rem;
    }
    .specs {
      text-align: end;
    }
  }
}

.services {
  padding: 60px 100px;
  h3 {
    color: $sangria;
    font-weight: bolder;
  }
  span {
    font-size: 1.2rem;
    i {
      border: 2px solid $mauve;
      border-radius: 50%;
      text-align: center;
      line-height: 26px;
      font-size: 0.9rem;
      color: $mauve;
      height: 30px;
      width: 30px;
      margin-right: 8px;
    }
  }
  .col-6 {
    margin-bottom: 16px;
  }
}
.contact-form {
  padding: 60px 100px;
  font-size: 1.1rem;
  .contact-inner {
    background-color: $mauve;
    padding: 20px;
    height: 100%;
    border-radius: 20px;
    text-align: center;
    color: $sangria;
    transition: all 5s ease;

    h5 {
      border-bottom: 1px solid white;
      padding-bottom: 3px;
      width: 85%;
    }
    span {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .mail-form {
    }
    .showFormBtn {
      font-size: 2rem;
      color: $sangria;
      background-color: $rosegold;
      margin-top: 15px;
      padding: 2px 25px;
      border-radius: 30px;
      cursor: pointer;
      &:hover {
        background-color: $sangria;
        color: $white;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 576px) {
  #show-mobile {
    display: block;
  }
  #show-desktop {
    display: none;
  }
}

//Form animation

.contactFX-enter-from {
  transform: scale(0.3);
  height: 10px;
  opacity: 0;
}
.contactFX-enter-to {
  transform: scale(1);
  height: 385px;
  opacity: 1;
}

.contactFX-leave-from {
  transform: scale(1);
  height: 385px;
  opacity: 1;
}

.contactFX-leave-to {
  transform: scale(0.3);
  height: 10px;
  opacity: 0;
}

.contactFX-enter-active,
.contactFX-leave-active {
  transition: all 0.5s;
}
</style>

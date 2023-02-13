<template>
  <div>
    <div id="categoriesWrapper" class="d-flex flex-column vw-100">
      <div
        v-for="(category, index) in homeCategories"
        :key="index"
        class="category"
      >
        <h4 class="categoryName">
          {{ category.name }}
        </h4>
        <div class="categoryPic">
          <img :src="category.url" :alt="category.name" />
        </div>
        <div class="layoverPartial"></div>
        <div class="categoryInfo">
          <h3>{{ category.title }}</h3>
          <br />
          <p>{{ category.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesComponent",
  data() {
    return {
      homeCategories: [
        {
          name: "Open space",
          path: "#",
          url: "/img/openspace.jpg",
          title: "Spazi infiniti",
          description:
            "Aeque altera intellegam te sea, est torquatos incorrupte te. Tantas virtute appareat no mei. Justo legimus has ne, an mei eripuit fierent. Suscipit percipit persecuti ex eam, vim ad quaeque repudiandae. Sit labores luptatum dissentias cu, summo alienum recteque te sed.",
        },
        {
          name: "Intere case",
          path: "#",
          url: "/img/intera-casa.jpg",
          title: "Come a casa tua",
          description:
            "Aeque altera intellegam te sea, est torquatos incorrupte te. Tantas virtute appareat no mei. Justo legimus has ne, an mei eripuit fierent. Suscipit percipit persecuti ex eam, vim ad quaeque repudiandae. Sit labores luptatum dissentias cu, summo alienum recteque te sed.",
        },
        {
          name: "Attici",
          path: "#",
          url: "/img/attico.jpg",
          title: "Viste incredibili",
          description:
            "Aeque altera intellegam te sea, est torquatos incorrupte te. Tantas virtute appareat no mei. Justo legimus has ne, an mei eripuit fierent. Suscipit percipit persecuti ex eam, vim ad quaeque repudiandae. Sit labores luptatum dissentias cu, summo alienum recteque te sed.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;

#categoriesWrapper {
  .category {
    height: 70vh;
    position: relative;
    cursor: pointer;
    &:hover .layoverPartial {
      opacity: 1;
    }

    &:hover .categoryName {
      opacity: 0;
    }

    &:hover .categoryInfo {
      display: block;
    }
    .categoryName {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400px;
      text-align: center;
      transform: translate(-50%, -50%);
      background-color: $mauve;
      color: white;
      z-index: 250;
      padding: 14px 24px;
      transition: opacity 0.5s ease-out;
      font-size: 2.5rem;
      letter-spacing: 0.4rem;
      font-weight: bold;
    }
    .categoryPic {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 240;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .layoverPartial {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        300deg,
        rgba(0, 0, 0, 0.2231267507002801) 20%,
        $mauve 65%
      );
      z-index: 245;
      opacity: 0;
      transition: opacity 0.5s ease-out;
    }
    .categoryInfo {
      display: none;
      z-index: 1000;
      width: 80%;
      color: $white;
      position: absolute;
      top: 12%;
      left: 6%;
      h3 {
        font-size: 5vh;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: left;
        font-size: 1.7rem;
      }
    }
  }
}

// media queries:

@media (min-width: 600px) {
  #categoriesWrapper {
    .category {
      .categoryInfo {
        width: 30%;
        position: absolute;
        top: 25%;
        left: 6%;
        p {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>

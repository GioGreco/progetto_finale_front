<template>
  <router-link class="btn ps-0" :to="`/apartment/${apartament.slug}`">
    <div class="card-item">
      <div class="item-inner">
        <img
          :src="`${store.imgBasePath}${apartament.cover_img}`"
          :alt="apartament.title"
        />
        <div class="info">
          <h4>
            <strong>{{ apartament.title }}</strong>
          </h4>
          <div>{{ apartment.category.name }}</div>
          <div>{{ apartament.address }}</div>
          <div>Cancellazione gratuita</div>
          <div class="price">{{ apartament.price }} euro / notte</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardComponent",
};
</script>

<style lang="scss" scoped></style>

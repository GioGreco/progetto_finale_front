<template>
  <div id="highlight-carousel" class="row g-5">
    <div class="car-item col-8">
      <div class="item-inner">
        <img
          src="https://www.travelplusstyle.com/wp-content/uploads/2021/01/g-02-patina-maldives-1.jpg"
          alt=""
        />
        <div class="paid-content rounded-pill">
          <i class="fa-solid fa-bullhorn"></i>
        </div>
        <div class="info">
          <h4>Il mio appartamento</h4>
          <p>Torino / Italia</p>
          <div><span class="price">€ 2.300 /</span>notte</div>
        </div>
        <div class="layover"></div>
      </div>
    </div>

    <div class="car-item col-8">
      <div class="item-inner">
        <img
          src="https://www.travelplusstyle.com/wp-content/uploads/2021/01/g-02-patina-maldives-1.jpg"
          alt=""
        />
        <div class="paid-content rounded-pill">
          <i class="fa-solid fa-bullhorn"></i>
        </div>
        <div class="info">
          <h4>Il mio appartamento</h4>
          <p>Torino / Italia</p>
          <div><span class="price">€ 2.300 /</span>notte</div>
        </div>
        <div class="layover"></div>
      </div>
    </div>

    <div class="car-item col-8">
      <div class="item-inner">
        <img
          src="https://www.travelplusstyle.com/wp-content/uploads/2021/01/g-02-patina-maldives-1.jpg"
          alt=""
        />
        <div class="paid-content rounded-pill">
          <i class="fa-solid fa-bullhorn"></i>
        </div>
        <div class="info">
          <h4>Il mio appartamento</h4>
          <p>Torino / Italia</p>
          <div><span class="price">€ 2.300 /</span>notte</div>
        </div>
        <div class="layover"></div>
      </div>
    </div>

    <div class="car-item col-8">
      <div class="item-inner">
        <img
          src="https://www.travelplusstyle.com/wp-content/uploads/2021/01/g-02-patina-maldives-1.jpg"
          alt=""
        />
        <div class="paid-content rounded-pill">
          <i class="fa-solid fa-bullhorn"></i>
        </div>
        <div class="info">
          <h4>Il mio appartamento</h4>
          <p>Torino / Italia</p>
          <div><span class="price">€ 2.300 /</span>notte</div>
        </div>
        <div class="layover"></div>
      </div>
    </div>

    <div class="car-item col-8">
      <div class="item-inner">
        <img
          src="https://www.travelplusstyle.com/wp-content/uploads/2021/01/g-02-patina-maldives-1.jpg"
          alt=""
        />
        <div class="paid-content rounded-pill">
          <i class="fa-solid fa-bullhorn"></i>
        </div>
        <div class="info">
          <h4>Il mio appartamento</h4>
          <p>Torino / Italia</p>
          <div><span class="price">€ 2.300 /</span>notte</div>
        </div>
        <div class="layover"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HighlightCarouselComponent",
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;

#highlight-carousel {
  flex-wrap: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  //da spostare in component CardCarousel
  .car-item {
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
}
</style>

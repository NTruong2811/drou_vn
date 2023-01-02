<template>
  <sliderComponent></sliderComponent>
  <div class="categories">
    <h3>Trending Categories</h3>
    <Carousel :settings="settings" :wrap-around="true">
      <Slide v-for="item in categories" :key="item">
        <div>
          <img :src="item.img" alt="" /> <br />
          <span>{{ item.name }}</span>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
<style>
.categories {
  margin-top: 200px;
}
</style>
<script>
// component
import SliderComponent from "../components/SliderComponent.vue";

// library

import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      categories: [
        {
          name: "Mini speakers",
          img: "../images/cate_1.jpg",
        },
        {
          name: "Tablets",
          img: "../images/cate_2.jpg",
        },
        {
          name: "Headphones",
          img: "../images/cate_3.jpg",
        },
        {
          name: "Laptop",
          img: "../images/cate_4.jpg",
        },
        {
          name: "Accessories",
          img: "../images/cate_5.jpg",
        },
        {
          name: "Watch",
          img: "../images/cate_6.jpg",
        },
        {
          name: "iPhone",
          img: "../images/cate_7.jpg",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    SliderComponent,
    Carousel,
    Slide,
    Navigation,
  },
  setup() {},
};
</script>

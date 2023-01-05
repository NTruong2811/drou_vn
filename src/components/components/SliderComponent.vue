<template>
  <div class="slider">
    <swiper
      :effect="'fade'"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="item"
        v-for="item in listSlide"
        :key="item"
        v-bind:style="{ backgroundImage: 'url(/images/' + item.img + ')' }"
      >
        <div class="content container">
          <h4 class="title">{{ item.title }}</h4>
          <h1 class="name">{{ item.name }}</h1>
          <p class="description">
            {{ item.description }}
          </p>
          <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button></div
      ></swiper-slide>
    </swiper>
  </div>
</template>
<style>
.slider {
  background-color: #f9f9f9;
  width: 100%;
}
.slider .swiper-button-prev {
  opacity: 0;
}
.slider .swiper-button-next {
  opacity: 0;
}
.slider .item {
  width: 100%;
  background-size: cover;
  height: 620px;
  background-color: #f9f9f9;
  text-align: left;
  display: flex;
  align-items: center;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
}
.slider .title {
  color: #e52e06;
  transition: all 2.5s cubic-bezier(0, 0, 0.2, 1);
}
.slider .item .content h1 {
  font-size: 60px;
  transition: all 3.5s cubic-bezier(0, 0, 0.2, 1);
}
.slider .item .content p {
  font-size: 18px;
  margin: 30px 0px;
  transition: all 4.5s cubic-bezier(0, 0, 0.2, 1);
}
.slider .item .content button {
  background-color: #e52e06;
  border: 0px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 40px;
  transition: all 4s cubic-bezier(0, 0, 0.2, 1);
  /* opacity: 0; */
}
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      listSlide: [
        {
          title: "SALE UP TO 30% OFF",
          name: "Apple Watch Series",
          description:
            "Feature packed at a better value than ever Powerful sensors to monitor your fitness",
          img: "banner-1.jpg",
        },
        {
          title: "New arrivals collection",
          name: "iPhone Accessories ",
          description:
            "Snap on a case, wallet, wireless charger battery pack all accessories you’re looking",
          img: "banner-2.jpg",
        },
      ],
      modules: [EffectFade, Navigation, Pagination],
    };
  },
  setup() {},
  mounted() {
    // document.addEventListener("DOMContentLoaded", function (event) {
    //   console.log(document.getElementsByClassName("swiper-slide-active"));
    // });
  },
};
</script>

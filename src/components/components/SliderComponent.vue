<template>
  <div class="slider">
    <div
      class="item"
      v-for="item in listSlide"
      :key="index"
      v-bind:style="{ backgroundImage: 'url(/images/' + item.img + ')' }"
    >
      <div class="content container">
        <h4 class="title">{{ item.title }}</h4>
        <h1 class="name">{{ item.name }}</h1>
        <p class="description">
          {{ item.description }}
        </p>
        <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div>
</template>
<style>
.slider {
  height: 620px;
}
.slider .item {
  display: flex;
  align-items: center;
  background-image: url("/images/banner-1.jpg");
  background-size: cover;
  background-position: -100px;
  height: 100%;
  /* opacity: 0; */
  position: absolute;
  left: 0px;
  right: 0px;
  transition: opacity 0.5s ease-out;
  -moz-transition: opacity 0.5s ease-out;
  -webkit-transition: opacity 0.5s ease-out;
  -o-transition: opacity 0.5s ease-out;
  transition-delay: 2s;

}
.slider .item .content h1 {
  font-size: 60px;
}
.slider .item .content p {
  font-size: 18px;
  margin: 30px 0px;
}
.slider .item .content button {
  background-color: #e52e06;
  border: 0px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 40px;
}
.slider .title {
  color: #e52e06;
}
</style>
<script>
export default {
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
    };
  },
  setup() {},
  mounted() {
    var slider = document.querySelectorAll(".slider .item");
    var count = 0;

    setInterval(function () {
      slider.forEach(function (item) {
        item.style.opacity = "0";
      });
      slider[count].style.opacity = "1";
      count++;
      if (count > slider.length - 1) {
        count = 0;
      }
    }, 5000);
  },
};
</script>

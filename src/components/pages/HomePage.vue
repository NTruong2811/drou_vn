<template>
  <sliderComponent></sliderComponent>
  <div class="container">
    <div class="categories box_content">
      <h3>Trending Categories</h3>
      <Carousel :breakpoints="breakpoints" :wrap-around="true">
        <Slide v-for="item in categories" :key="item">
          <div class="item">
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
    <div class="featured_product box_content">
      <div class="inside row gap-4">
        <div class="item col-lg-6 col-sm-12">
          <div class="content">
            <span class="category">Security Smart Camera</span>
            <h3 class="price">Just Starting At $850</h3>
            <button>Shop Now</button>
          </div>
          <img src="images/sub-banner-1.jpg" alt="" />
        </div>

        <div class="item col-lg-6 col-sm-12">
          <div class="content">
            <span class="category">Entertainment & Games</span>
            <h3 class="price">Just Starting at $850 Hurry up!</h3>
            <button>Shop Now</button>
          </div>
          <img src="images/sub-banner-2.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="Latest_products box_content">
      <div class="head">
        <h3 class="title">Latest Products</h3>
        <div class="view_more">
          View all products <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div class="list">
        <Carousel :breakpoints="breakpoints" :wrap-around="true">
          <Slide v-for="item in latest_product" :key="item">
            <div class="item">
              <div class="img">
                <div class="show">
                  <img src="images/product_1.jpg" alt="" />
                </div>
                <div class="hide">
                  <img src="images/sub_product_1.jpg" alt="" />
                </div>
              </div>
              <div class="content">
                <span class="name">AirPods Pro white</span>
                <h4 class="price">$80.00 USD</h4>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <div class="sale_banner box_content">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="content">
            <h5>Hurry Up !</h5>
            <h6>
              Up To 25% Discount <br />
              Check it Out
            </h6>
            <div class="time">
              <div class="item days">
                <span id="days">360</span> <br />
                <p>DAYS</p>
              </div>
              <div class="item HRS">
                <span id="hours">06</span> <br />
                <p>HRS</p>
              </div>
              <div class="item MINS">
                <span id="minutes">19</span> <br />
                <p>MINS</p>
              </div>
              <div class="item SECS">
                <span id="seconds">51</span> <br />
                <p>SECS</p>
              </div>
            </div>
            <br />
            <span class="show_now">Shop Now</span>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="popular_product box_content">
      <div class="head">
        <h3 class="title">Popular Products</h3>
        <div class="categories">
          <ul>
            <li>Accessories</li>
            <li>iPhone</li>
            <li>Laptop</li>
          </ul>
        </div>
      </div>
      <div class="list">
        <div class="item" v-for="item in latest_product" :key="item">
          <div class="img">
            <div class="show">
              <img src="images/product_1.jpg" alt="" />
            </div>
            <div class="hide">
              <img src="images/sub_product_1.jpg" alt="" />
            </div>
          </div>
          <div class="content">
            <span class="name">AirPods Pro white</span>
            <h4 class="price">$80.00 USD</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="blog_event box_content">
      <div class="head">
        <h3 class="title">Latest Products</h3>
        <div class="view_more">
          View all products <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div class="list">
        <Carousel :breakpoints="breakpointsev" :wrap-around="true">
          <Slide v-for="item in blog_event" :key="item">
            <div class="item">
              <div class="img">
                <img src="images/blog_1.jpg" alt="" />
              </div>
              <div class="content">
                <div class="date">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>September 06, 2022</span>
                </div>
                <p>Lorem ipsum dolor sit adipis</p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="ads box_content">
      <div class="content">
        <span>BIG DISCOUNT </span>
        <h5>Google Pixel Smart Phone</h5>
        <h4>$350.00</h4>
        <button>Show Now</button>
      </div>
      <img src="images/slide61.jpg" alt="" />
    </div>
  </div>
  <div class="offer box_content">
    <div class="container">
      <div class="item">
        <img src="images/icon_1.png" alt="" />
        <h4>Free delivery</h4>
        <span>And free returns. See checkout for delivery dates.</span>
      </div>
      <div class="item">
        <img src="images/icon_2.png" alt="" />
        <h4>Pay monthly at 0% APR</h4>
        <span>Choose to check out with Apple Card Monthly Installments.</span>
      </div>
      <div class="item">
        <img src="images/icon_3.png" alt="" />
        <h4>Personalize it</h4>
        <span>Engrave your device with your name or a personal note.</span>
      </div>
    </div>
  </div>
</template>
<style>

.container {
  margin-top: 60px;
}
.box_content {
  margin-top: 60px;
}
.row {
  flex-wrap: nowrap !important;
}
.carousel__slide {
  cursor: pointer;
  padding: 10px;
}
@media screen and (max-width: 500px) {
  .row {
    flex-wrap: wrap !important;
  }
  .featured_product .item .content {
    position: absolute !important;
    bottom: 0px !important;
    text-align: center;
    width: 100%;
  }
}

/* categories */
.categories {
  cursor: pointer;
}
.categories button {
  display: none;
}
.categories h3 {
  margin: 60px 0px 50px 0px;
}
.categories .item {
  padding: 30px 0px;
  border: 1px solid #f8f8f8;
}
.categories img {
  width: 75%;
}
/* featured product */
.featured_product button {
  background-color: #e52e06;
  border: 0px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 40px;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
}
.featured_product .item {
  height: 400px;
  cursor: pointer;
  overflow: hidden;
}
.featured_product .item .content {
  z-index: 100;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.featured_product .item .content .price {
  font-weight: 400;
  font-size: 24px;
}
.featured_product .item img {
  position: absolute;
  left: 0px;
  width: 100%;
  top: 0px;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
}
.featured_product .item img:hover {
  transform: scale3d(1.1, 1.1, 1.1);
}
.featured_product .item:hover button {
  background-color: black !important;
}
/* Latest_products */
.Latest_products .head {
  display: flex;
  justify-content: space-between;
}
.Latest_products .head .view_more {
  margin-top: 10px;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
  font-weight: 600;
  cursor: pointer;
}
.Latest_products .head .view_more:hover {
  color: #e52e06;
}
.Latest_products .head .view_more i {
  margin-left: 10px;
  color: #e52e06;
}
.Latest_products .list {
  margin-top: 40px;
}
.carousel__track {
  padding: 30px 0px;
}
.Latest_products .list .item {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 260px;
  height: 350px;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
}
.Latest_products .list .item .content {
  text-align: center;
  position: absolute;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 20px;
}
.Latest_products .list .item .content span {
  font-size: 18px;
}
.Latest_products .list .item .content h4 {
  color: #e52e06;
  font-size: 21px;
  font-weight: 600;
  margin-top: 5px;
}
.Latest_products .list .item .img .hide {
  opacity: 0;
  transition: 0.25s opacity, 0.25s visibility,
    transform 1.5s cubic-bezier(0, 0, 0.2, 1),
    -webkit-transform 1.5s cubic-bezier(0, 0, 0.2, 1);
  position: absolute;
  top: 0px;
}
.Latest_products .list .item:hover .hide {
  opacity: 1;
}
.Latest_products .list .item img {
  width: 100%;
}
.Latest_products .list:hover .carousel__prev,
.Latest_products .list:hover .carousel__next {
  opacity: 1;
}
.Latest_products .list .carousel__prev,
.Latest_products .list .carousel__next {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px;
  border-radius: 100%;
  opacity: 0;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
  background-color: white;
}
/* sale banner */
.sale_banner {
  background-image: url("../images/sale_banner.jpg");
  background-size: cover;
  height: 400px;
}
.sale_banner .row .col .content {
  text-align: center;
  margin-top: 50px;
}
.sale_banner .row .col .content h5 {
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 14px;
  background-color: #e52e06;
  display: inline-block;
  padding: 14px 27px;
}
.sale_banner .row .col .content h6 {
  font-weight: 600;
  font-size: 42px;
  line-height: 39px;
  text-transform: none;
}
.sale_banner .time {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 15px;
}
.sale_banner .time .item {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px 15px 10px 15px;
  width: 65px;
  height: 65px;
  border-radius: 13px;
}
.sale_banner .time .item span {
  font-weight: 600;
}
.sale_banner .time .item p {
  font-size: 11px;
}
.sale_banner .show_now {
  font-weight: bold;
  padding-top: 40px;
}

.sale_banner .show_now:hover {
  color: #e52e06;
}
/* Popular Products */
.popular_product .head {
  display: flex;
  justify-content: space-between;
}
.popular_product .head ul {
  display: flex;
  gap: 10px;
}
.popular_product .list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
}
.popular_product .list .item {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  height: 360px;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
}
.popular_product .list .item .content {
  text-align: center;
  position: absolute;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 20px;
}
.popular_product .list .item .content span {
  font-size: 18px;
}
.popular_product .list .item .content h4 {
  color: #e52e06;
  font-size: 21px;
  font-weight: 600;
  margin-top: 5px;
}
.popular_product .list .item .img .hide {
  opacity: 0;
  transition: 0.25s opacity, 0.25s visibility,
    transform 1.5s cubic-bezier(0, 0, 0.2, 1),
    -webkit-transform 1.5s cubic-bezier(0, 0, 0.2, 1);
  position: absolute;
  top: 0px;
}
.popular_product .list .item:hover .hide {
  opacity: 1;
}
.popular_product .list .item img {
  width: 100%;
}
/* blog & event */
.blog_event .head {
  display: flex;
  justify-content: space-between;
}
.blog_event .head .view_more {
  margin-top: 10px;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
  font-weight: 600;
  cursor: pointer;
}
.blog_event .head .view_more:hover {
  color: #e52e06;
}
.blog_event .head .view_more i {
  margin-left: 10px;
  color: #e52e06;
}
.blog_event .list .item {
  width: 400px;
  text-align: left !important;
}
.blog_event .list .item .img {
  width: 100%;
}
.blog_event .list .item .img img {
  width: 100%;
}
.blog_event .date {
  font-size: 14px;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.781);
}
.blog_event .date i {
  margin-right: 10px;
}
.blog_event p {
  font-size: 17px;
}
.blog_event .list:hover .carousel__prev,
.blog_event .list:hover .carousel__next {
  opacity: 1;
}
.blog_event .list .carousel__prev,
.blog_event .list .carousel__next {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px;
  border-radius: 100%;
  opacity: 0;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
  background-color: white;
}
/* ads */
.ads {
  padding-top: 50px;
  overflow: hidden;
  height: 450px;
  cursor: pointer;
}
.ads .content {
  z-index: 10;
  text-align: center;
}
.ads .content span {
  font-size: 13px;
}
.ads .content h5 {
  margin-top: 10px;
}
.ads .content h4 {
  margin-top: 10px;
  color: #e52e06;
}
.ads .content button {
  background-color: #e52e06;
  color: white;
  border: 0px;
  padding: 8px 15px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  margin-top: 15px;
}
.ads img {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
}
.ads img:hover {
  transform: scale3d(1.1, 1.1, 1.1);
}
/* offer */
.offer {
  background-color: #f8f8f8;
}
.offer .container {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 50px 0px;
  gap: 100px;
}
.offer .item img{
    width: 40px;
}
.offer .item h4{
  font-size: 16px;
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
      latest_product: 8,
      blog_event: 10,
      breakpoints: {
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
      breakpointsev: {
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
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
  mounted() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "5/11/",
      end_sale = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > end_sale) {
      end_sale = dayMonth + nextYear;
    }

    const countDown = new Date(end_sale).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0);
  },
};
</script>

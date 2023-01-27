<template>
  <bread-crumb />
  <div class="electronic__pages">
    <div class=" product__page">
      <div class="list__slide-bar">
        <div class="search">
          <h5>Search</h5>
          <form action=""  >
            <input type="text" placeholder="search our store" @click="showBorderRed "> 
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>

        <div class="product__top">
          <div class="item__product">
            <h4>Top Rated Products</h4>
          <div class="items__top-product" v-for="item in topProducts" :key="item">
            <img :src="item.image" alt="" class="img__top-product">
            <div class="top__product-content">
              <p>{{ item.title }}</p>
              <div class="list__stars">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="price"> {{ item.price }}</p>
            </div>
          </div>
          
          <div class="list__categories">
            <h4>Categories</h4>
            <ul>
              <li>Accessories <span>(8)</span></li> 
              <li>Headphones <span>(8)</span></li>
              <li>Iphone <span>(8)</span></li>
              <li>Laptop <span>(8)</span></li>
              <li>Mini Speakers <span>(8)</span></li>
            </ul>
          </div>


            
            <div class="list__size">
              <h4>Size</h4>
              <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </div>

            
            <div class="list__tags">
              <h4>Tags</h4>
              <ul>
                <li>Black</li>
                <li>Blue</li>
                <li>Fiber</li>
                <li>Gold</li>
                <li>Gray</li>
                <li>Green</li>
                <li>L</li>
                <li>Leather</li>
                <li>M</li>
                <li>Magenta</li>
                <li>Maroon</li>
                <li>Metal</li>
                <li>Navy</li>
                <li>Orange</li>
                <li>Pink</li>
              </ul>
            </div>

            <h4>Color</h4>
            <div class="list__colors">
              <ul>
                <li style="background-color: red"></li>
                <li style="background-color: green"></li>
                <li style="background-color: blue"></li>
                <li style="background-color: yellow"></li>
                <li style="background-color: white"></li>
                <li style="background-color: gold"></li>
                <li style="background-color: gray"></li>
                <li style="background-color: magenta"></li>
                <li style="background-color: maroon"></li>
                <li style="background-color: navy"></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      <div class="electronics__content">
        <div class="content__arrange">
          <div class="icons__arrange">
            <i class="fa-solid fa-grid-2"></i>
            <i class="fa-solid fa-list"></i>
          </div>
          <p>Showing 1 - 9 of 11 result</p>
          <div class="content__sort">
            <label for="">Sort By: </label>
            <select>
              <option value="">Featured</option>
              <option value="">Best Selling</option>
              <option value="">Alphabetically, A-Z</option>
              <option value="">Alphabetically, Z-A</option>
              <option value="">Price, low to high</option>
              <option value="">Price, high to low</option>
              <option value="">Date, new to old</option>
              <option value="">Date, old to new</option>
            </select>
          </div>
        </div>
        <div class="content__product">
          <div class="list__product-items " >
            <div class="product__item col-lg-4 col-md-4 col-sm-6 col-12" v-for="item in itemsProduct" :key="item">
              <img :src="item.image" alt="" class="img__product" id="img-product">

              <div class="sub__item">
                <!-- <img :src="item.subImage" alt="" class="img__product sub__item-img"> -->
                <div class="sub__item-icons">
                  <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-chart-simple"></i>
                </div>
              </div>

              <div class="product__stars">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="product__name"> {{ item.name }}</p>
              <p class="product__price"> {{ item.price }}</p>
            </div>

          </div>
          <ul>
            <li><router-link to="" ><i class="fa-solid fa-arrow-left"></i></router-link></li>
            <li><router-link to="" >1</router-link></li>
            <li><router-link to="" >2</router-link></li>
            <li><router-link to="" ><i class="fa-solid fa-arrow-right"></i></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadCrumb from '@/components/components/BreadcrumbComponent.vue'
import './shopPage.scss'
import { reactive, ref } from '@vue/runtime-core'
export default {
  setup() {
    var showBorder = ref(false)
    
    const topProducts = reactive([
      {
        image: "/public/images/p9_800X800_crop_center.jpg",
        title: "Home Entertainment",
        price: "$115.03"
      },
      {
        image: "/public/images/cate_1.jpg",
        title: "Homepod Mini 2022",
        price: "$115.03"
      },
      {
        image: "/public/images/p10_78f5d5ed-818a-4a91-88a1-433a7f408c84_large.jpg",
        title: "MagSafe Charger",
        price: "$115.03"
      },
    ])

    const itemsProduct = reactive([
      {
        image: "/public/images/cate_3.jpg",
        subImage: "/public/images/p10_78f5d5ed-818a-4a91-88a1-433a7f408c84_large.jpg",
        name: "AirPods Max",
        price: "$78.04"
      },
      {
        image: "/public/images/cate_5.jpg",
        subImage: "/public/images/sub_product_1.jpg",
        name: "AirPods Pro White",
        price: "$55.34"
      },
      {
        image: "/public/images/cate_6.jpg",
        subImage: "/public/images/cate_5.jpg",
        name: "Apple Watch Utra",
        price: "$99.32"
      },
      {
        image: "/public/images/p9_800X800_crop_center.jpg",
        subImage: "/public/images/cate_7.jpg",
        name: "Home Entertainement",
        price: "$112.09"
      },
      {
        image: "/public/images/cate_1.jpg",
        subImage: "/public/images/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg",
        name: "Homepod Mini 2022",
        price: "$55.34"
      },
      {
        image: "/public/images/p1_large.jpg",
        subImage: "/public/images/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_220x240_crop_center.jpg",
        name: "Ipad Pro White Color",
        price: "$708.00"
      },
      {
        image: "/public/images/cate_7.jpg",
        subImage: "/public/images/p6_large.jpg",
        name: "Iphone 13 White Color",
        price: "$156.07"
      },
      {
        image: "/public/images/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_large.jpg",
        subImage: "/public/images/cate_7.jpg",
        name: "Iphone 14 Pro Max",
        price: "$1,417.43"
      },
      {
        image: "/public/images/sub_product_1.jpg",
        subImage: "/public/images/cate_5.jpg",
        name: "Iphone Lighting Cable",
        price: "$99.32"
      },
    ])

    function showBorderRed() {
      showBorder = true
      if(showBorder) {
        let border = document.querySelector('form')
        border.style.border = '1px solid red'
        border.style.transition ='all .4s ease-out'
      }
    }
    return {
      topProducts,showBorderRed, itemsProduct
    }
  },
  components : {
      breadCrumb
  }
}
</script>

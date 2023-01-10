<template>
  <bread-crumb />
  <div class="electronic__pages">
    <div class="container">
      <div class="list__slide-bar">
        <div class="search">
          <h5>Search</h5>
          <input type="text" placeholder="search our store"> 
          <i class="fa-solid fa-magnifying-glass"></i>
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
      <div class="electronics__content"></div>
    </div>
  </div>
</template>

<script>
import breadCrumb from '@/components/components/BreadcrumbComponent.vue'
import './shopPage.scss'
export default {
  setup() {
    const topProducts = [
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
    ]
    
    return {
      topProducts
    }
  },
  components : {
      breadCrumb
  }
}
</script>

<template>
    <header>
        <div class="header__left">
            <ul>
                <li>(+84)123 456 7890</li> |
                <li><router-link to="" >Store Location</router-link></li>
            </ul>
        </div>
        <div class="header__middle">
            Tell a friend about Drou & get 20% off*
        </div>
        <div class="header__right">
            <ul>
                <li> USD </li> |
                <ul>
                    <li><router-link to="">Log In</router-link></li> /
                    <li><router-link to="" >Sign Up</router-link></li>
                </ul>
            </ul>
        </div>
    </header>

    <!-- End header -->
    <hr>
    <nav>
        <div class="nav__logo">
            <img src="//cdn.shopify.com/s/files/1/1152/4590/files/logo_300x300.png?v=1671082437" alt="logo">
        </div>
        <div class="nav__menu-pages">
            <ul>
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/shop">electronics</router-link></li>
                <li><router-link to="/shop">blog</router-link></li>
                <li><router-link to="/shop">pages</router-link></li>
                <li><router-link to="/shop">contact</router-link></li>
            </ul>
        </div>
        <div class="nav__items">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-heart" />
            <i class="fa-light fa-cart-shopping"></i>
        </div>
    </nav>
      <router-view></router-view>
      <footer>foot</footer>
</template>
<script>
import './layout.scss'
export default {
    setup() {
        
    },
}
</script>
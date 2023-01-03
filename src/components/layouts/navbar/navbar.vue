<template>
  <div class="container">
        <nav>
            <div class="nav__logo">
            <img src="/public/images/logo_300x300.png" alt="logo">
        </div>
        <div class="nav__menu-pages">
            <ul>
                <li class="show__subnav-home"><router-link to="/">home <i class="fa-solid fa-chevron-down"></i>
                        <div class="subnav__home">
                            <ul>
                                <li><router-link to="/">Home demo one</router-link> </li>
                                <li><router-link to="/">Home demo two</router-link> </li>
                                <li><router-link to="/">Home demo three</router-link> </li>
                                <li><router-link to="/">Home demo four</router-link> </li>
                            </ul>
                        </div>
                    </router-link>
                </li> 
                <li class="show__subnav-electronic"><router-link to="/shop">electronics <i class="fa-solid fa-chevron-down"></i> </router-link>
                </li>
                <li><router-link to="/shop">blog</router-link></li> 
                <li class="show__subnav-pages"><router-link to="/shop">pages <i class="fa-solid fa-chevron-down"></i>
                        <div class="submenu__pages">
                            <ul>
                                <li><router-link to="/">About Pages</router-link> </li>
                                <li><router-link to="/">Contact Pages</router-link> </li>
                                <li><router-link to="/">FAQ Pages</router-link> </li>
                                <li><router-link to="/">Privacy Policy</router-link> </li>
                                <li><router-link to="/">404 Error Pages</router-link> </li>
                            </ul>
                        </div>
                    </router-link>
                </li> 
                <li><router-link to="/shop">contact</router-link></li>
            </ul>
        </div>
        <div class="nav__items">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-heart" />
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        </nav>
    </div>
</template>

<script>

import './navbar.scss'
export default {
    setup() {
        const listElectronic = [
            {
                title: 'Smart Phone',
                itemOfList: [
                    {
                        id: 1,
                        name: "Direct TV"
                    },
                    {
                        id: 2,
                        name: "LED Screen"
                    },
                    {
                        id: 3,
                        name: "LED Screen"
                    },
                    {
                        id: 4,
                        name: "Headsets"
                    },
                    {
                        id: 5,
                        name: "Smart watch"
                    },
                    {
                        id: 6,
                        name: "Airport pro"
                    },
                    {
                        id: 7,
                        name: "Computer"
                    },
                ]
            },
            {
                title: 'Head phones',
                itemOfList: [
                    {
                        id: 1,
                        name: "Direct TV"
                    },
                    {
                        id: 2,
                        name: "Direct TV"
                    },
                    {
                        id: 3,
                        name: "Direct TV"
                    },
                    {
                        id: 4,
                        name: "Direct TV"
                    },
                    {
                        id: 5,
                        name: "Direct TV"
                    },
                    {
                        id: 6,
                        name: "Direct TV"
                    },
                    {
                        id: 7,
                        name: "Direct TV"
                    },
                ]
            },
            {
                title: 'Apple Macbook',
                itemOfList: [
                    {
                        id: 1,
                        name: "Direct TV"
                    },
                    {
                        id: 2,
                        name: "Direct TV"
                    },
                    {
                        id: 3,
                        name: "Direct TV"
                    },
                    {
                        id: 4,
                        name: "Direct TV"
                    },
                    {
                        id: 5,
                        name: "Direct TV"
                    },
                    {
                        id: 6,
                        name: "Direct TV"
                    },
                    {
                        id: 7,
                        name: "Direct TV"
                    },
                ]
            },
        ]


        return {listElectronic}
    }


}
</script>

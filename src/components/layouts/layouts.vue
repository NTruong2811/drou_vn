<template>

    <header-global />
    <navbar />

    <!-- End header -->
 
    
      <router-view></router-view>
      <!-- <footer>foot</footer> -->
</template>
<script>
import headerGlobal from './header/header.vue'
import navbar from './navbar/navbar.vue'
export default {
    setup() {
    },

    components: {
        headerGlobal,
        navbar
    }
}


</script>

<style>
    


</style>
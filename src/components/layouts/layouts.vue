<template>
    <header-global />
    <navbar />
    <!-- End header -->
      <router-view />
      <footer-global />
</template>
<script>
import headerGlobal from './header/header.vue'
import navbar from './navbar/navbar.vue'
import footerGlobal from './footer/footer.vue'
export default {
    setup() {
    },

    components: {
        headerGlobal,
        navbar,
        footerGlobal
    }
}


</script>

<style>
    


</style>
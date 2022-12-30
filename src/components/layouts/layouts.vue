<template>
    <header>head</header>
    <nav>
        <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/shop">shop</router-link></li>
        </ul>
    </nav>
      <router-view></router-view>
      <footer>foot</footer>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
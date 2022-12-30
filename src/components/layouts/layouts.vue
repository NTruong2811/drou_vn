<template>
      <h1>head</h1>
      <nav><router-link to="/">Home</router-link><router-link to="/shop">shop</router-link></nav>
      <router-view></router-view>
      <h1>footer</h1>
</template>

<script>
export default {
    
}
</script>
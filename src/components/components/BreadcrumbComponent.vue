<template>
  <div class="breadcrumb">
    <ul id="breadcrumb" class="container"></ul>
  </div>
</template>
<style>
.breadcrumb {
  height: 125px;
  background-color: #f4f4f4 !important;
}
.breadcrumb .container {
  margin-top: 0px !important;
  display: flex;
  align-items: center;
}
</style>
<script>
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    onMounted(() => {
      var breadcrumb = document.getElementById("breadcrumb");
      var url = window.location.pathname;
      var arr = url.split("/");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode("Home / "));
      breadcrumb.appendChild(li);
      for (let index = 0; index < arr.length; index++) {
        if (arr[index] != "") {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(arr[index]));
          breadcrumb.appendChild(li);
        }
      }
    })
    return {};
  },
};
</script>

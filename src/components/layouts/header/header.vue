<template>
  <header>
    <div class="header__left">
      <ul>
        <li>(+84)123 456 7890</li>
        |
        <li><router-link to="">Store Location</router-link></li>
      </ul>
    </div>
    <div class="header__middle">Tell a friend about Drou & get 20% off*</div>
    <div class="header__right">
      <ul>
        <li class="show__currency">
          USD
          <i class="fa-solid fa-chevron-down" style="position: relative"></i>
          <div class="currency">
            <div
              class="list__currency"
              v-for="(item, index) in listCurrrency"
              :key="index"
            >
              <ul>
                <li>{{ item.Description }}</li>
              </ul>
            </div>
          </div>
        </li>
        |
        <ul>
          <li><router-link to="">Log In</router-link></li>
          /
          <li><router-link to="">Sign Up</router-link></li>
        </ul>
      </ul>
    </div>
  </header>
</template>

<script>
import "./header.scss";
export default {
  setup() {
    const listCurrrency = [
      {
        name: "USD",
        Description: " USD - US Dollar",
      },
      {
        name: "EUR",
        Description: " EUR - Euro",
      },
      {
        name: "GBP",
        Description: "GBP - British Pound",
      },
      {
        name: "INR",
        Description: "INR - Indian Rupee",
      },
      {
        name: "BDT",
        Description: "BDT - Bangladesh Taka",
      },
      {
        name: "JPY",
        Description: "JPY - Japan Yen",
      },
      {
        name: "CAD",
        Description: "CAD - Canada Dollar",
      },
      {
        name: "AUD",
        Description: "AUD - Australian Dollar",
      },
    ];

    return { listCurrrency };
  },
};
</script>

<style>
</style>
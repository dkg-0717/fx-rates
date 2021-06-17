<template>
  <Header />
  <Main />
  <Toast />
</template>

<script setup>
import { provide } from "vue";
import stateRate from "./state/rates.js";
import Toast from "./components/shared/Toast.vue";
import Header from "./components/shared/Header.vue";
import Main from "./components/Main.vue";

provide("rates", stateRate);
</script>

<style>
@import url("./assets/css/app.css");
</style>

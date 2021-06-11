<template>
  <Header />
  <Main />
</template>

<script setup>
import { provide } from "vue";
import stateRate from "./state/rates.js";
import Header from "./components/shared/Header.vue";
import Main from "./components/Main.vue";

provide("rates", stateRate);
</script>

<style>
@import url("./assets/css/app.css");
</style>

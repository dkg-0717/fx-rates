<template>
  <div
    class="toast"
    :class="[
    state.error !== '' && state.showToast
    ? 'toast-enter': '', state.error ? 'error': '']"
    @click="actions.showToast(false)"
  >
    <p class="title" v-if="state.error !== ''">Error!</p>
    <p class="description">{{ state.error }}</p>
  </div>
</template>

<script setup>
import { inject } from "vue";
const { state, actions } = inject("rates");
</script>

<style>
@import url("../../assets/css/toast.css");
</style>